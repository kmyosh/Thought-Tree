var router = require('express').Router();
var thoughtsCtrl = require('../controllers/thoughts');

// GET /students
router.get('/', thoughtsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/facts', thoughtsCtrl.addFact);

// DELETE /facts/:id
// router.delete('/facts/:id', thoughtsCtrl.delFact);

module.exports = router;
