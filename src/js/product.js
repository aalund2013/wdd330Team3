import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

import { getParam } from "./utils.js";
// import { getCartContents } from "./cart.js";

const dataSource = new ProductData();
const productId = getParam("product");
// const cart = getCartContents;

const product = new ProductDetails(productId, dataSource);
product.init();
