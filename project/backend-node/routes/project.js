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
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const projects = await PROJECT_COLLECTION.find({});
  console.log(projects);
  res.send({
    status: true,
    data: projects.map(p => ({
      id: p.projectId,
      name: p.name,
      description: p.description,
      joined: true,
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
  })
});

// 2.3 edit project
router.put("/", (req, res) => {
});

// 2.4 delete project
router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;
  try {
    const user = PROJECT_COLLECTION.find({ projectId: parseInt(projectId) });
    console.log(user);
    // check if the ID exists
    if (user.count() > 0) {
      PROJECT_COLLECTION.deleteOne({ projectId: parseInt(projectId) });
      res.send({
        status: true,
        data: { projectId },
      });
      return;
    }

    res.send({
      status: false,
      error: "That ProjID doesn't exists",
    });
    return;

  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
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