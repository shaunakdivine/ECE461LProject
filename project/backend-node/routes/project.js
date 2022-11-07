const { Router } = require('express');
const { USER_COLLECTION } = require('../utilities/database');
const router = Router();

// 2.1 create project
// Still having errors with checking if it already exists
router.post("/create-project", async (req,res) => {
  const projectId = req.body;
  USER_COLLECTION.create(
      projectId
    );
    res.send({
      status: true,
      data: { projectId },
    });
});

// 2.2 list projects
router.get("/get-project", (req, res) => {
  const projects = req.body;
  res.send(projects);
});

// 2.3 edit project
router.put("/edit-project", (req, res) => {
});

// 2.4 delete project
router.delete("/delete-project", (req, res) => {
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