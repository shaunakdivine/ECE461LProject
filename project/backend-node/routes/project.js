const { Router } = require('express');
const { USER_COLLECTION, PROJECT_COLLECTION } = require('../utilities/database');
const router = Router();

// 2.1 create project
// Still having errors with checking if it already exists
router.post("/", async (req,res) => {
  const { name, description, } = req.body;
  PROJECT_COLLECTION.create({
    name,
    description,
    projectId: Date.now(),
    hardwares: [
      {
        id: 0,
        name: 'HWSet1',
        checkedIn: [],
      },
      {
        id: 1,
        name: 'HWSet2',
        checkedIn: [],
      },
      {
        id: 2,
        name: 'HWSet3',
        checkedIn: [],
      },
    ]
  });
    res.send({
      status: true,
    });
});

// 2.2 list projects
router.get("/", async (req, res) => {
  const user = await PROJECT_COLLECTION.find({});
  res.send(user);
});

// 2.3 edit project
router.put("/", (req, res) => {
});

// 2.4 delete project
router.delete("/", (req, res) => {
});

// 2.5 join project
router.put("/join/:userId/:projectId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.projectId);
});

// 2.6 leave project
router.put("/leave/:userId/:projectId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.projectId);
});

module.exports = router;