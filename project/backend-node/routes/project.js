const { Router } = require('express');
const { USER_COLLECTION, PROJECT_COLLECTION } = require('../utilities/database');
const router = Router();

// 2.9 list all projects
router.get("/all", async (req, res) => {
  try {
    const projects = await PROJECT_COLLECTION.find({});

    res.send({
      status: true,
      data: projects,
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.1 create project
router.post("/", async (req, res) => {
  const { userId, name, description, } = req.body;
  const project = {
    name,
    description,
    projectId: Date.now(),
    master: userId,
    authUsers: [userId],
    hardwares: [
      {
        id: 0,
        name: 'HWSet1',
        capacity: 100,
        checkedIn: [],
      },
      {
        id: 1,
        name: 'HWSet2',
        capacity: 100,
        checkedIn: [],
      },
      {
        id: 2,
        name: 'HWSet3',
        capacity: 100,
        checkedIn: [],
      },
    ]
  }
  await PROJECT_COLLECTION.create(project);

  res.send({
    status: true,
    data: project
  });
});

// 2.2 list authorized projects
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await USER_COLLECTION.findOne({ email: userId });
    const projects = await PROJECT_COLLECTION.find({});

    // check if the user exists
    if (!user) {
      res.send({
        status: false,
        error: "User not exists"
      });
      return;
    }

    res.send({
      status: true,
      data: projects
        .filter(p => p.authUsers.includes(userId))
        .map(p => ({
          id: p.projectId,
          name: p.name,
          description: p.description,
          master: p.master,
          authUsers: p.authUsers,
          joined: user.projectIds.includes(p.projectId),
          hw: p.hardwares.map(h => ({
            id: h.id,
            name: h.name,
            checkedIn: h.checkedIn,
            capacity: h.capacity,
          })),
          hardwares: [
            {
              id: 0,
              name: 'HWSet1',
              checkedIn: 0,
              capacity: 100,
            },
            {
              id: 1,
              name: 'HWSet2',
              checkedIn: 0,
              capacity: 100,
            },
            {
              id: 2,
              name: 'HWSet3',
              checkedIn: 0,
              capacity: 100,
            },
          ]
        }))
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.3 edit project
router.put("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const { name, description } = req.body;

  try {
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    if (project) {
      await PROJECT_COLLECTION.updateOne(
        { projectId: parseInt(projectId) },
        {
          $set: { name, description },
        }
      );
      
      res.send({
        status: true
      });
      return;
    }

    res.send({
      status: false,
      error: "Project ID not exists",
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.4 delete project
router.delete("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    if (!project) {
      res.send({
        status: false,
        error: "Project ID not exists",
      });
      return;
    }

    await PROJECT_COLLECTION.deleteOne({ projectId: parseInt(projectId) });

    res.send({
      status: true,
      msg: 'done'
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.5 join project
router.put("/join/:userId/:projectId", async (req, res) => {
  const { userId, projectId } = req.params;

  try {
    const user = await USER_COLLECTION.findOne({ email: userId });
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    // check if the user exists
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

    // check if the user already joined the project
    if (user.projectIds.includes(projectId)) {
      res.send({
        status: false,
        error: `User ${userId} already joined project ${projectId}`
      });
      return;
    }

    // check if the user is authorized to join the project
    if (!project.authUsers.includes(userId)) {
      res.send({
        status: false,
        error: `User ${userId} is not authorized to join project ${projectId}`
      });
      return;
    }

    // join
    await USER_COLLECTION.updateOne(
      { email: userId },
      {
        $push: { projectIds: parseInt(projectId) }
      }
    )

    res.send({
      status: true,
      msg: 'done'
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.6 leave project
router.put("/leave/:userId/:projectId", async (req, res) => {
  const { userId, projectId } = req.params;

  try {
    const user = await USER_COLLECTION.findOne({ email: userId });
    // const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    // check if the user exists
    if (!user) {
      res.send({
        status: false,
        error: "User not exists"
      });
      return;
    }

    // no need to check if the project exists
    // if (!project) {
    //   res.send({
    //     status: false,
    //     error: "Project not exists"
    //   });
    //   return;
    // }

    // check if the user actually in the project
    if (!user.projectIds.includes(parseInt(projectId))) {
      res.send({
        status: false,
        error: `User ${userId} did not joined project ${projectId}`
      });
      return;
    }

    // check if the user has any hardware checked in in this project
    // TODO: iterate through the hws to check

    // leave the project
    await USER_COLLECTION.updateOne(
      { email: userId },
      {
        $pull: { projectIds: projectId }
      }
    )

    res.send({
      status: true,
      msg: 'done'
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

// 2.7 Add authorized user
router.put("/addUser/:projectId/:masterId/:newUserId", async (req, res) => {
  const { projectId, masterId, newUserId } = req.params;

  // check if project exists
  try {
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });

    // check if project exists
    if (!project) {
      res.send({
        status: false,
        error: "Project not exist",
      });
      return;
    }

    // check if you are the master
    if (project.master !== masterId) {
      res.send({
        status: false,
        error: "You are not the project master",
      });
      return;
    }

    // check if new user already in the authorized list
    if (project.authUsers.includes(newUserId)) {
      res.send({
        status: false,
        error: `User ${newUserId} already authorized`,
      });
      return;
    }

    // add new authorized user
    await PROJECT_COLLECTION.updateOne(
      { projectId: parseInt(projectId) },
      {
        $push: { authUsers: newUserId }
      }
    );

    res.send({
      status: true,
      msg: 'done'
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

module.exports = router;