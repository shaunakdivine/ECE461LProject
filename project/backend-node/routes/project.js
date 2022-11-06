const { Router } = require('express');

const router = Router();

// 2.1 create project
router.post("/", (req, res) => {
});

// 2.2 list projects
router.get("/", (req, res) => {
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