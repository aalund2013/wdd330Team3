import { renderListWithTemplate } from "./utils";

export default class ProductList {
  constructor(category, listElement, dataSource) {
    this.category = category;
    this.listElement = listElement;
    this.dataSource = dataSource;
  }
  async init() {
    const list = await this.dataSource.getData();
    // console.log(list)
    this.renderList(list);
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Image;
    template.querySelector("img").alt += product.Name;
    template.querySelector(".card__brand").textContent = product.Brand.Name;
    template.querySelector(".card__name").textContent =
      product.NameWithoutBrand;
    template.querySelector(".product-card__price").textContent +=
      product.FinalPrice;
    return template;
  }

  renderList(list) {
    this.listElement.innerHTML = "";
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }

  // filterList(list) {
  //   list.forEach(item => {
  //     if list.item
  //   })
  // }
}
