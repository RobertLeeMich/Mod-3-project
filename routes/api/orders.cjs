const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders.cjs');

// Create a new order
router.post('/', ordersCtrl.create);

// Fetch orders for a specific user
router.get('/:userId', ordersCtrl.index);

module.exports = router;
