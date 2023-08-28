const express = require('express');
const router = express.Router();
const {index}= require('../controllers/indexController')


/* index/ */
router.get('/', index);

module.exports = router;
