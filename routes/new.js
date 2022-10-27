const router = require("express").Router();
const newCtrl = require("../controllers/thinkers");

// GET /students
router.get("/", newCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/facts', thinkersCtrl.addFact);

// DELETE /facts/:id
// router.delete('/facts/:id', thinkersCtrl.delFact);

module.exports = router;
