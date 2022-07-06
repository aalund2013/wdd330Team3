import ExternalServices from "./externalServices.js";
import ProductDetails from "./productDetails.js";

import { getParam } from "./utils.js";
// import { getCartContents } from "./cart.js";

const dataSource = new ExternalServices();
const productId = getParam("product");
// const cart = getCartContents;

const product = new ProductDetails(productId, dataSource);
product.init();
