const productApiEndpoint = `http://localhost:10004/wp-json/wc/store/products/`;

const productContainer = document.getElementById("product-container");

fetch(productApiEndpoint)
  .then((response) => response.json())
  .then((productData) => {
    console.log(productData);
    const productHtml = `
             <h2>${productData.title}</h2>
             <p>${productData.description}</p>
             <img src="${productData.images[0].src}" alt="Product Image">
        `;
    productContainer.innerHTML = productHtml;
  })
  .catch((error) => {
    console.error("error fetching product", error);
    productContainer.innerHTML = "error fetching product";
  });
