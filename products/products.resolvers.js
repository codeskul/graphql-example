const {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: async (parent) => {
      return getAllProducts();
    },
    productByPrice: (_, args) => {
      return getProductByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return addNewProductReview(args.id, args.rating, args.comment);
    },
  },
};
