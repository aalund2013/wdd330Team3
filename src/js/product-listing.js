import ExternalServices from "./externalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ExternalServices();
const listElement = document.querySelector(".product-list");

const prodList = new ProductList(category, listElement, dataSource);
prodList.init();
