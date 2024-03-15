const express = require('express');
const router = new express.Router();
const userController = require('../controllers/user-controller');

router.post('/users', userController.createUser);

router.post('/users/login', userController.loginUser);

router.get('/users', userController.getUsers);

router.get('/users/:id', userController.getUserById);

router.patch('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;
