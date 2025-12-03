const express = require('express');
const { helloController } = require('../backend/controllers/hello.controllers');

const router = express.Router();

router.get('/', helloController);

module.exports = router;