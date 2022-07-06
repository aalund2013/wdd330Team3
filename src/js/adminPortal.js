import { loadHeaderFooter } from "./utils.js";
import Admin from "./admin.js";

loadHeaderFooter();
const myAdmin = new Admin("main");
myAdmin.showLogin();
