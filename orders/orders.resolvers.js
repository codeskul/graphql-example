const { getAllOrders } = require("./orders.model");

module.exports = {
  Query: {
    orders: (parent) => {
      console.log("Getting the Orders...");
      return getAllOrders();
    },
  },
};
