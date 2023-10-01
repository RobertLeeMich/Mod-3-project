const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderId: String,
  items: [
    {
      _id: false,
      name: String,
      price: Number,
      background_image: String,
      quantity: Number,
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
