const Order = require('../../models/order.cjs');


//controller for orders, this block was the first I got working overall
async function create(req, res) {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    return res.status(200).send(savedOrder);
  } catch (err) {
    return res.status(500).send(err);
  }
}

//index function
  async function index(req, res) {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      return res.status(200).send(orders);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
  
  //remove/delete function
  async function remove(req, res) {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
      res.status(200).json(deletedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  

module.exports = {
  create,
  index,
  remove,
};
