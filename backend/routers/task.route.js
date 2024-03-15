const express = require("express");
const router = new express.Router();
const taskController = require('../controllers/task.controller');

router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.get('/tasks', taskController.getAllTasks);
router.patch('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
