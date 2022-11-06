const { Router } = require('express');

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
router.put("/checkin/:userId/:projectId/:hwsetId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.projectId);
  console.log(req.params.hwsetId);
});

// 3.6 checkout hardware
router.put("/checkout/:userId/:projectId/:hwsetId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.projectId);
  console.log(req.params.hwsetId);
});

module.exports = router;