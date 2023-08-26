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
      for (const product of products) {
        const productHtml = `
          <div class="product">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.images[0].src}" alt="Product Image">
          </div>
        `;

        productContainer.innerHTML += productHtml;
      }
    } else {
      productContainer.innerHTML = "No products found.";
    }
  } catch (error) {
    console.error("Error fetching products", error);
    productContainer.innerHTML = "Error fetching products";
  }
}

fetchProducts();

// const productId = 48;
// const productApiEndpoint = `https://flowerpower.seeorno.no/wp-json/wc/store/products/${productId}`;
// const productContainer = document.getElementById("product-container");

// async function fetchProduct() {
//   try {
//     const response = await fetch(productApiEndpoint);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const productData = await response.json();
//     displayProduct(productData);
//   } catch (error) {
//     console.error("Error fetching product", error);
//     productContainer.innerHTML = "Error fetching product";
//   }
// }

// function displayProduct(product) {
//   const productHtml = `
//     <div class="product">
//       <h2>${product.name}</h2>
//       <p>${product.description}</p>
//       <img src="${product.images[0].src}" alt="Product Image">
//     </div>
//   `;

//   productContainer.innerHTML = productHtml;
// }

// fetchProduct();
