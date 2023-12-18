const products = [
  { id: "redshoe", description: "Red Shoe", price: 41.33, reviews: [] },
  { id: "bluejeans", description: "Blue Jeans", price: 55.67, reviews: [] },
];

const getAllProducts = () => {
  return products;
};

const getProductByPrice = (min, max) => {
  const filteredProducts = products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
  return filteredProducts;
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const product = getProductById(id);
  if (product) {
    const newReview = {
      rating,
      comment,
    };
    product.reviews.push(newReview);
    return newReview;
  }
};

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
