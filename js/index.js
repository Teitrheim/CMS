import { fullProductUrl } from "./constants/api.js";

async function getProducts() {
  const response = await fetch(fullProductUrl);
  const products = await response.json();
  return products;
}

function createProductHtml(product) {
  const container = document.querySelector(".container");
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");

  const productLink = document.createElement("a");
  productLink.classList.add("product-item");
  productLink.href = `product.html?id=${product.id}`;

  const title = document.createElement("h3");
  title.innerText = product.name;

  productLink.appendChild(title);

  if (product.images.length > 0) {
    const image = document.createElement("img");
    image.src = product.images[0].src;
    image.alt = product.images[0].alt;
    productLink.appendChild(image);
  }

  productContainer.appendChild(productLink);

  container.appendChild(productContainer);
}

function createFeaturedProductHtml(product) {
  const container = document.querySelector(".featured-products");
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");

  const productLink = document.createElement("a");
  productLink.classList.add("product-item");
  productLink.href = `product.html?id=${product.id}`;

  const title = document.createElement("h3");
  title.innerText = product.name;

  productLink.appendChild(title);

  if (product.images.length > 0) {
    const image = document.createElement("img");
    image.src = product.images[0].src;
    image.alt = product.images[0].alt;
    productLink.appendChild(image);
  }

  productContainer.appendChild(productLink);

  container.appendChild(productContainer);
}

async function shopPage() {
  const products = await getProducts();

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.featured) {
      createFeaturedProductHtml(product);
    } else {
      createProductHtml(product);
    }
  }
}

shopPage();
