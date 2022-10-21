root.innerHTML += `
    <h2>Smart Phones:</h2>
    <ul class="product-container" id="product-list"></ul>
`;

function renderProductList(products) {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = "";
  products.forEach(function (product) {
    const phone = new Product(
      product.image,
      product.name,
      product.price,
      product.releaseYear,
      product.dateWhenAdded
    );
    phone.renderProduct();
  });
}
