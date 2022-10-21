class Product {
  constructor(image, name, price, releaseYear, dateWhenAdded) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.releaseYear = releaseYear;
    this.dateWhenAdded = dateWhenAdded;
  }
  renderProduct() {
    const productList = document.querySelector("#product-list");
    const li = document.createElement("li");
    li.className = "product";
    if (this.image !== undefined && this.image !== null) {
      const img = document.createElement("img");
      img.src = this.image;
      li.appendChild(img);
    }
    const div = document.createElement("div");
    div.className = "product-info";
    div.innerHTML = `
      <p><b>Name: ${this.name}</b></p>
      <p><i class="fa-solid fa-money-bill"></i> - Price: ${this.price}</p>
      <p><i class="fa-solid fa-calendar-days"></i> - Release Year: ${this.releaseYear}</p>
      <p><i>Post date: ${this.dateWhenAdded}</i></p>
    `;
    li.appendChild(div);
    productList.appendChild(li);
  }
}
