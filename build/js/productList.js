var o = (s, e, t) =>
  new Promise((i, c) => {
    var l = (r) => {
        try {
          a(t.next(r));
        } catch (n) {
          c(n);
        }
      },
      d = (r) => {
        try {
          a(t.throw(r));
        } catch (n) {
          c(n);
        }
      },
      a = (r) => (r.done ? i(r.value) : Promise.resolve(r.value).then(l, d));
    a((t = t.apply(s, e)).next());
  });
import { renderListWithTemplate as m } from "./utils.js";
export default class u {
  constructor(e, t, i) {
    (this.category = e), (this.listElement = t), (this.dataSource = i);
  }
  init() {
    return o(this, null, function* () {
      const e = yield this.dataSource.getData();
      this.renderList(e);
    });
  }
  prepareTemplate(e, t) {
    return (
      (e.querySelector("a").href += t.Id),
      (e.querySelector("img").src = t.Image),
      (e.querySelector("img").alt += t.Name),
      (e.querySelector(".card__brand").textContent = t.Brand.Name),
      (e.querySelector(".card__name").textContent = t.NameWithoutBrand),
      (e.querySelector(".product-card__price").textContent += t.FinalPrice),
      e
    );
  }
  renderList(e) {
    this.listElement.innerHTML = "";
    const t = document.getElementById("product-card-template");
    m(t, this.listElement, e, this.prepareTemplate);
  }
}
