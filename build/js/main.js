import t from "./productData.js";
import o from "./productList.js";
import { loadHeaderFooter as r } from "./utils.js";
r();
const e = new t("tents"),
  s = document.querySelector(".product-list"),
  c = new o("tents", s, e);
c.init();
