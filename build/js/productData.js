var h = (r, t, n) =>
  new Promise((e, c) => {
    var i = (o) => {
        try {
          s(n.next(o));
        } catch (a) {
          c(a);
        }
      },
      d = (o) => {
        try {
          s(n.throw(o));
        } catch (a) {
          c(a);
        }
      },
      s = (o) => (o.done ? e(o.value) : Promise.resolve(o.value).then(i, d));
    s((n = n.apply(r, t)).next());
  });
function u(r) {
  if (r.ok) return r.json();
  throw new Error("Bad Response");
}
export default class f {
  constructor(t) {
    (this.category = t), (this.path = "../json/" + this.category + ".json");
  }
  getData() {
    return fetch(this.path)
      .then(u)
      .then((t) => t);
  }
  findProductById(t) {
    return h(this, null, function* () {
      const n = yield this.getData();
      return n.find((e) => e.Id === t);
    });
  }
}
