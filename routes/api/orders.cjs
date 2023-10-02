const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders.cjs');

router.post('/', ordersCtrl.create);

router.get('/:userId', ordersCtrl.index);

router.delete('/:orderId', ordersCtrl.remove);

module.exports = router;
