// const WOO_API_KEY = `ck_ff96352a4abf2487595675a1e29cd83f7e08c33c`;
// const WOO_API_SECRET = `cs_49a14fb8aadaea141dab047291d789376caf5b87`;
// const BASE_URL = `https://localhost/Flower_Power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`;

const apiBase = "http://localhost:10004";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductUrl = apiBase + woocommerceBase + productBase;
const fullProductUrlExample =
  "http://localhost:10004/wp-json/wc/store/products";

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

  // Create an anchor element for the product detail page
  const productLink = document.createElement("a");
  productLink.href = "cart.html"; // Replace with the product detail URL
  productLink.target = ""; // Open link in a new tab

  const title = document.createElement("p");
  title.innerText = product.name;
  productContainer.append(title);

  // Create an anchor element for the image
  const imgLink = document.createElement("a");
  imgLink.href = "cart.html"; // Replace with the same product detail URL
  imgLink.target = ""; // Open link in a new tab

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;

    // Append the image to the image link
    imgLink.appendChild(img);

    // Append the title to the product link
    productLink.appendChild(title);

    // Append the image link and product link to the product container
    productContainer.append(imgLink);
    productContainer.append(productLink);

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

async function shopPage() {
  const products = await getProducts();
  createProductsHtml(products);
}

shopPage();
