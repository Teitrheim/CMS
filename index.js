// const WOO_API_KEY = `ck_ff96352a4abf2487595675a1e29cd83f7e08c33c`;
// const WOO_API_SECRET = `cs_49a14fb8aadaea141dab047291d789376caf5b87`;
// const BASE_URL = `https://localhost/Flower_Power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`;
// `<img src="${imgData.src}" alt="${imgData.alt}" />`;

const apiBase = "https://localhost/Flower_Power";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductUrl = apiBase + woocommerceBase + productBase;
const fullProductUrlExample =
  "https://localhost/Flower_Power/wp-json/wc/store/products";

async function getProducts() {
  const response = await fetch(fullProductUrl);
  const products = await response.json();

  return products;
}

function createProductHtml(product) {
  const container = document.querySelector(".container");
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.id = product.id;

  const title = document.createElement("h2");
  title.innerText = product.name;
  productContainer.append(title);

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];

    const img = document.createElement("img");
    img.src = "imgData.src";
    img.alt = "imgData.alt";
    productContainer.append(img);
  }
  container.append(productContainer);
}

function createProductsHtml(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    createProductHtml(product);
  }
}

async function main() {
  const products = await getProducts();
  createProductsHtml(products);
}

main();
