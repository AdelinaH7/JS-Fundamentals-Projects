root.innerHTML += `
<div class="btn-div">
    <button class="sort-button" id="sort-by-price">Sort by price</button>
    <button class="sort-button" id="sort-by-year">Sort by release year</button>
    <button class="sort-button" id="sort-by-date-added">Sort by date when added</button>
    <button class="sort-button" id="filter-by-price">Price > 4500</button>
</div>
`;

function sortPhones(sortType) {
  const localStorageProducts = getProducts();
  switch (sortType) {
    case "SORT_BY_PRICE":
      const sortedArray = localStorageProducts.sort((elem1, elem2) => {
        if (elem1.price < elem2.price) {
          return -1;
        } else if (elem1.price > elem2.price) {
          return 1;
        } else {
          return 0;
        }
      });
      setProducts(sortedArray);
      renderProductList(sortedArray);
      break;
    case "SORT_BY_YEAR_RELEASE":
      const sortedYear = localStorageProducts.sort((elem1, elem2) => {
        if (elem1.releaseYear < elem2.releaseYear) {
          return -1;
        } else if (elem1.releaseYear > elem2.releaseYear) {
          return 1;
        } else {
          return 0;
        }
      });
      setProducts(sortedYear);
      renderProductList(sortedYear);
      break;
    case "SORT_BY_DATE_ADDED":
      const sortedDateAdded = localStorageProducts.sort((elem1, elem2) => {
        if (elem1.dateWhenAdded < elem2.dateWhenAdded) {
          return -1;
        } else if (elem1.dateWhenAdded > elem2.dateWhenAdded) {
          return 1;
        } else {
          return 0;
        }
      });
      setProducts(sortedDateAdded);
      renderProductList(sortedDateAdded);
      break;
    case "FILTER_BY_PRICE":
      const filteredPrice = localStorageProducts.filter(
        (prod) => prod.price > 4500
      );
      renderProductList(filteredPrice);
      break;
  }
}

function addSortingFunctionality() {
  const sortByPrice = document.querySelector("#sort-by-price");
  sortByPrice.addEventListener("click", function () {
    sortPhones("SORT_BY_PRICE");
  });
  const sortByYear = document.querySelector("#sort-by-year");
  sortByYear.addEventListener("click", function () {
    sortPhones("SORT_BY_YEAR_RELEASE");
  });
  const sortByDateAdded = document.querySelector("#sort-by-date-added");
  sortByDateAdded.addEventListener("click", function () {
    sortPhones("SORT_BY_DATE_ADDED");
  });
  const filterByPrice = document.querySelector("#filter-by-price");
  filterByPrice.addEventListener("click", function () {
    sortPhones("FILTER_BY_PRICE");
  });
}

window.addEventListener("load", addSortingFunctionality);
