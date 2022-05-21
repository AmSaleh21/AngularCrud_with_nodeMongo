const express = require('express');
const controller = require('./../Controllers/StudentController');
const router = express.Router();
// isAuth = require('./../Middleware/authMW');
router
  .route('/students')
  .get(controller.getAllStudent)
  .post(controller.createStudent);

router.put('/students/:id', controller.updateStudent);
router.delete('/students/:id', controller.deleteStudent);

router.get('/students/:id', controller.getStudent);
module.exports = router;
