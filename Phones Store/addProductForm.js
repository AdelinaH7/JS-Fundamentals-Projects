root.innerHTML += `
<div class="form-div">
    <form id="add-product">
        <label class="name-label" for="name">Name:</label>
        <input type="text" name="name" id="name"/>

        <label for="price">Price:</label>
        <input type="number" name="price" id="price"/>

        <label for="releaseYear">Release year:</label>
        <input type="number" name="releaseYear" id="releaseYear"/>

        <label for="dateWhenAdded">Poste on:</label>
        <input type="date" name="dateWhenAdded" id="dateWhenAdded"/>

        <input type="file" name="image" accept="image/*" onchange='openFile(event)' id="image">

        <input class="submit-button" type="submit"/>
    </form>
<div>
`;

var openFile = function (file) {
  var input = file.target;
  var reader = new FileReader();
  reader.onload = function () {
    setImage({ data: reader.result });
  };
  reader.readAsDataURL(input.files[0]);
};

function addFormFunctionality() {
  const form = document.querySelector("#add-product");
  form.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    const phoneImage = getImage().data;
    const phoneName = event.target.name.value;
    const phonePrice = Number(event.target.price.value);
    const phoneReleaseYear = Number(event.target.releaseYear.value);
    const phoneDateAdded = event.target.dateWhenAdded.value;
    const newPhone = {
      image: phoneImage,
      name: phoneName,
      price: phonePrice,
      releaseYear: phoneReleaseYear,
      dateWhenAdded: phoneDateAdded,
    };
    setImage({ data: null });

    const localStorageProducts = getProducts();
    localStorageProducts.push(newPhone);
    setProducts(localStorageProducts);

    renderProductList(localStorageProducts);
  });
}

window.addEventListener("load", addFormFunctionality);
