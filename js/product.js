const productApiEndpoint =
  "https://flowerpower.seeorno.no/wp-json/wc/store/products/";
const productContainer = document.getElementById("product-container");

async function fetchProducts() {
  try {
    const response = await fetch(productApiEndpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const products = await response.json();

    if (products.length > 0) {
      const productHtml = products
        .map(
          (productData) => `
        <div class="product">
          <h2>${productData.name}</h2>
          <p>${productData.description}</p>
          <img src="${productData.images[0].src}" alt="Product Image">
        </div>
      `
        )
        .join("");

      productContainer.innerHTML = productHtml;
    } else {
      productContainer.innerHTML = "No products found.";
    }
  } catch (error) {
    console.error("Error fetching products", error);
    productContainer.innerHTML = "Error fetching products";
  }
}

fetchProducts();
