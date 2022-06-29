var s = (t, n, e) =>
  new Promise((o, r) => {
    var c = (a) => {
        try {
          l(e.next(a));
        } catch (d) {
          r(d);
        }
      },
      i = (a) => {
        try {
          l(e.throw(a));
        } catch (d) {
          r(d);
        }
      },
      l = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(c, i));
    l((e = e.apply(t, n)).next());
  });
function u(t) {
  if (t.ok) return t.text();
  throw new Error("Bad Response");
}
export function qs(t) {
  return document.querySelector(t);
}
export function getLocalStorage(t) {
  return JSON.parse(localStorage.getItem(t));
}
export function setLocalStorage(t, n) {
  localStorage.setItem(t, JSON.stringify(n));
}
export function setClick(t, n) {
  qs(t).addEventListener("touchend", (e) => {
    e.preventDefault(), n();
  }),
    qs(t).addEventListener("click", n);
}
export function getParam(t) {
  const n = window.location.search,
    e = new URLSearchParams(n),
    o = e.get(t);
  return o;
}
export function renderListWithTemplate(t, n, e, o) {
  e.forEach((r) => {
    const c = t.content.cloneNode(!0),
      i = o(c, r);
    n.appendChild(i);
  });
}
export function renderWithTemplate(t, n, e, o) {
  let r = t.content.cloneNode(!0);
  o && (r = o(r, e)), n.appendChild(r);
}
export function loadTemplate(t) {
  return s(this, null, function* () {
    const n = yield fetch(t).then(u),
      e = document.createElement("template");
    return (e.innerHTML = n), e;
  });
}
export function loadHeaderFooter() {
  return s(this, null, function* () {
    const t = yield loadTemplate("../partials/header.html"),
      n = yield loadTemplate("../partials/footer.html"),
      e = document.getElementById("main-header"),
      o = document.getElementById("main-footer");
    renderWithTemplate(t, e), renderWithTemplate(n, o);
  });
}
