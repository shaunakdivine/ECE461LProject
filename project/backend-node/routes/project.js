const { Router } = require('express');
const { USER_COLLECTION, PROJECT_COLLECTION } = require('../utilities/database');
const router = Router();

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
  }
  await PROJECT_COLLECTION.create(project);

  res.send({
    status: true,
    data: project
  });
});

// 2.2 list projects
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const projects = await PROJECT_COLLECTION.find({});

  console.log(projects);
  
  res.send({
    status: true,
    data: projects.map(p => ({
      id: p.projectId,
      name: p.name,
      description: p.description,
      master: p.master,
      authUsers: p.authUsers,
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
router.put("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const { name, description } = req.body;

  try {
    const project = await PROJECT_COLLECTION.findOne({ projectId: parseInt(projectId) });
    console.log(project);

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
    console.log(project);

    if (project) {
      await PROJECT_COLLECTION.deleteOne({ projectId: parseInt(projectId) });

      res.send({
        status: true,
        data: project
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

// 2.5 join project
router.put("/join", (req, res) => {
  const { projectId } = req.body;
  try {
    const user = PROJECT_COLLECTION.findOne({ projectId });

    // check if the user exists
    if (user) {
      res.send({
        status: true,
      });
      return;
    }
    else{
      res.send("Doesn't exist");
      return;
    }

  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }

  // console.log(req.params.userId);
  // console.log(req.params.projectId);
});

// 2.6 leave project
router.put("/leave/:userId/:projectId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.projectId);
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

    // add new authorized user
    await PROJECT_COLLECTION.updateOne(
      { projectId: parseInt(projectId) },
      {
        $push: { authUsers: newUserId }
      }
    );

    res.send({
      status: true,
      data: "done",
    });
  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
  // add it
});

module.exports = router;