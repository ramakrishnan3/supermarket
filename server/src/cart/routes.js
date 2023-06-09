const express = require('express');
const cartController = require('./controller');

const router = express.Router();

router.get('/', cartController.getItems);
router.post('/total', cartController.getTotalPrice);

module.exports = router;
