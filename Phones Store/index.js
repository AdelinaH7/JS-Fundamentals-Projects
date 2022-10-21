const root = document.querySelector("#root");

const date1 = new Date("09/25/2020").toISOString().split("T")[0];
const date2 = new Date("09/25/2018").toISOString().split("T")[0];
const date3 = new Date("09/25/2022").toISOString().split("T")[0];

const images = [
  "./img/iPhone XS.jpg",
  "./img/Huawei P30.jpg",
  "./img/Samsung S10.jpg",
];

const products = [
  {
    image: images[0],
    name: "Iphone XS",
    price: 4500,
    releaseYear: 2019,
    dateWhenAdded: date1,
  },
  {
    image: images[1],
    name: "Huawei P30",
    price: 4000,
    releaseYear: 2020,
    dateWhenAdded: date2,
  },
  {
    image: images[2],
    name: "Samsung S10",
    price: 4250,
    releaseYear: 2018,
    dateWhenAdded: date3,
  },
];

function getProducts() {
  const localStorageProducts = localStorage.getItem("products");
  console.log(localStorageProducts);
  const parsedProducts = JSON.parse(localStorageProducts);
  return parsedProducts;
}

function setProducts(products) {
  const stringifiedProducts = JSON.stringify(products);
  localStorage.setItem("products", stringifiedProducts);
}

function getImage() {
  const localStorageImage = localStorage.getItem("image");
  console.log(localStorageImage);
  const parsedImage = JSON.parse(localStorageImage);
  return parsedImage;
}

function setImage(image) {
  const stringifiedImage = JSON.stringify(image);
  localStorage.setItem("image", stringifiedImage);
}

if (getProducts() === null) {
  setProducts(products);
}

function startRendering() {
  const localStorageProducts = getProducts();
  renderProductList(localStorageProducts);
}
window.addEventListener("load", startRendering);
setImage({ data: null });
