import { fullProductUrl } from "./constants/api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  location.href = "/";
}

const productContainer = document.getElementById("product-container");

async function fetchProduct() {
  try {
    const url = `${fullProductUrl}/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const product = await response.json();

    const productHtml = `
          <div class="product">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.images[0].src}" alt="${product.images[0].alt}">
          </div>
        `;

    productContainer.innerHTML += productHtml;
  } catch (error) {
    console.error("Error fetching products", error);
    productContainer.innerHTML = "Error fetching products";
  }
}

fetchProduct();
