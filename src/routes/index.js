const express = require('express');
const router = express.Router();
const { getHelloWorld, test } = require('../controllers/index');

// Define routes
router.get('/', getHelloWorld);
router.get('/test', test);

module.exports = router;