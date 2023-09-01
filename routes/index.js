const express = require('express');
const router = express.Router();
const {index, processForm, logout, profile}= require('../controllers/indexController')
const userCheck = require("../middleware/userCheck");
const usersValidator = require('../validations/usersValidator');

/* index/ */
router.get('/', index);
router.get('/profile',userCheck, profile);
router.post('/',usersValidator,processForm);
router.get('/logout', logout);

module.exports = router;
