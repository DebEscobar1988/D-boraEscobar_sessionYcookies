const express = require('express');
const { usersForm } = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
router.get('/', usersForm);

module.exports = router;
