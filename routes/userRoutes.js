// const express = require('express');

// const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userControllers');

// const router = express.Router();

//     router.get('/users', getAllUsers);

//     router.get('/users/:id', getUserById);

//     router.post('/users', createUser);

//     router.post('/login', checkAuthentication, (req, res) => {
//         res.status(200).json({"message": "Login successful"});
//     });

//     router.patch('/users/:id', updateUserById);

//     router.delete('/users/:id', deleteUserById);

//     module.exports = router;

const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userControllers');
const router = express.Router();

const checkAuthentication = (req, res, next) => {
  // Check if the user is authenticated
  // If authenticated, call `next()` to proceed to the route handler
  // If not authenticated, send an error response
};

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.post('/login', checkAuthentication, (req, res) => {
  res.status(200).json({"message": "Login successful"});
});
router.patch('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;