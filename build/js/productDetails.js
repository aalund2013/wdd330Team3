var s=(i,d,r)=>new Promise((e,c)=>{var u=t=>{try{o(r.next(t))}catch(a){c(a)}},p=t=>{try{o(r.throw(t))}catch(a){c(a)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(u,p);o((r=r.apply(i,d)).next())});import{setLocalStorage as l,getLocalStorage as n,loadHeaderFooter as h}from"./utils.js";h();export default class m{constructor(d,r){this.productId=d,this.product={},this.dataSource=r}init(){return s(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let d=n("so-cart")||[];d.push(this.product),l("so-cart",d)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="this.product.Id">Add to Cart</button>
    </div></section>`}}
