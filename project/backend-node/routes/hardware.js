const { Router } = require('express');
const { PROJECT_COLLECTION, USER_COLLECTION } = require('../utilities/database');

const router = Router();

// 3.1 create hwset
router.post("/", (req, res) => {
});

// 3.2 list hwset
router.get("/", (req, res) => {
});

// 3.3 edit hwset
router.put("/", (req, res) => {
});

// 3.4 delete hwset
router.delete("/", (req, res) => {
});

// 3.5 checkin hardware
router.put("/checkin/:userId/:projectId", async (req, res) => {
  const { userId, projectId } = req.params;
  const { hwsetId, amount } = req.body;

  try {
    if (hwsetId == null || amount == null) {
      res.send({
        status: false,
        error: "Lack of request body parameters"
      });
      return;
    }
    
    const user = await USER_COLLECTION.findOne({ email: userId });
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    // check user exists
    if (!user) {
      res.send({
        status: false,
        error: "User not exists"
      });
      return;
    }

    // check if the project exists
    if (!project) {
      res.send({
        status: false,
        error: "Project not exists"
      });
      return;
    }

    // check hwid exists
    if (![0, 1, 2].includes(hwsetId)) {
      res.send({
        status: false,
        error: "HW Set not exists"
      });
      return;
    }

    const hw = project.hardwares[hwsetId]
    const checkedIn = hw.checkedIn.find(c => c.userID === userId);

    // no check in records yet, append a new one with newAmount
    if (!checkedIn) {
      // set the check in cap
      const newAmount = amount > 100 ? 100 : amount;

      // check in newAmount
      await PROJECT_COLLECTION.updateOne(
        { projectId: parseInt(projectId) },
        {
          $push: {
            'hardwares.$[hw].checkedIn': {
              userID: userId,
              amount: newAmount
            }
          }
        },
        {
          arrayFilters: [
            { "hw.id": hwsetId }
          ]
        }
      );
    } else {
      // find the check in record, change the amount with newAmount
      const currAmount = checkedIn.amount;

      if (currAmount >= 100) {
        res.send({
          status: false,
          error: 'User has no available hardware to check in.'
        });
        return;
      }

      // set the check in cap
      const newAmount = amount + currAmount > 100 ? 100 : amount + currAmount;

      // check in newAmount
      await PROJECT_COLLECTION.updateOne(
        { projectId: parseInt(projectId) },
        {
          $set: {
            'hardwares.$[hw].checkedIn.$[user].amount': newAmount
          }
        },
        {
          arrayFilters: [
            { "hw.id": hwsetId },
            { "user.userID": userId }
          ]
        }
      );
    }

    res.send({
      status: true,
      msg: "done"
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 3.6 checkout hardware
router.put("/checkout/:userId/:projectId", async (req, res) => {
  const { userId, projectId } = req.params;
  const { hwsetId, amount } = req.body;

  try {
    if (hwsetId == null || amount == null) {
      res.send({
        status: false,
        error: "Lack of request body parameters"
      });
      return;
    }

    const user = await USER_COLLECTION.findOne({ email: userId });
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    // check user exists
    if (!user) {
      res.send({
        status: false,
        error: "User not exists"
      });
      return;
    }

    // check if the project exists
    if (!project) {
      res.send({
        status: false,
        error: "Project not exists"
      });
      return;
    }

    // check hwid exists
    if (![0, 1, 2].includes(hwsetId)) {
      res.send({
        status: false,
        error: "HW Set not exists"
      });
      return;
    }

    const hw = project.hardwares[hwsetId]
    const checkedIn = hw.checkedIn.find(c => c.userID === userId);

    // check if there's any checked in hws to check out
    if (!checkedIn) {
      res.send({
        status: false,
        error: `User has no hardware to check out.`
      });
      return;
    }

    // find the check in record, change the amount with newAmount
    const currAmount = checkedIn.amount;

    // set the check out cap
    const newAmount = amount > currAmount ? 0 : currAmount - amount;

    // check out newAmount
    await PROJECT_COLLECTION.updateOne(
      { projectId: parseInt(projectId) },
      {
        $set: {
          'hardwares.$[hw].checkedIn.$[user].amount': newAmount
        }
      },
      {
        arrayFilters: [
          { "hw.id": hwsetId },
          { "user.userID": userId }
        ]
      }
    );

    // if newAmount is 0, remove the check in record
    if (newAmount === 0) {
      await PROJECT_COLLECTION.updateOne(
        { projectId: parseInt(projectId) },
        {
          $pull: {
            'hardwares.$[hw].checkedIn': { userID: userId },
          }
        },
        {
          arrayFilters: [
            { "hw.id": hwsetId }
          ]
        }
      );
    }

    res.send({
      status: true,
      msg: "done"
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

module.exports = router;