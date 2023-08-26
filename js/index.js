const apiBase = "https://flowerpower.seeorno.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductUrl = apiBase + woocommerceBase + productBase;
const fullProductUrlExample =
  "https://flowerpower.seeorno.no/wp-json/wc/store/products";

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

  const productLink = document.createElement("a");
  productLink.href = "product.html";
  productLink.target = "";

  const title = document.createElement("h3");
  title.innerText = product.name;

  const imgLink = document.createElement("a");
  imgLink.href = "product.html";
  imgLink.target = "";

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;

    imgLink.appendChild(img);
  }

  productLink.appendChild(title);
  productLink.appendChild(imgLink);

  productContainer.appendChild(productLink);

  container.appendChild(productContainer);
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
