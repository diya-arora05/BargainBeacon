// document.addEventListener('DOMContentLoaded', () => {
    
//         const apis = [
//             `https://api.amazon.com/products?asin=YOUR_ASIN&apiKey=YOUR_AMAZON_API_KEY`,
//             `https://api.ebay.com/buy/browse/v1/item_summary/search?q=YOUR_PRODUCT_NAME&apiKey=YOUR_EBAY_API_KEY`,
//             `https://api.walmartlabs.com/v1/items?apiKey=YOUR_WALMART_API_KEY&upc=YOUR_UPC_CODE`
//           ];
          
  
  
//     Promise.all(apis.map(api => fetch(api).then(response => response.json())))
//       .then(data => {
//         const productDetails = document.getElementById('productDetails');
//         data.forEach((product, index) => {
//           const productElement = document.createElement('div');
//           productElement.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Price: $${product.price}</p>
//             <p>Description: ${product.description}</p>
//           `;
//           productDetails.appendChild(productElement);
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const apis = [
      `https://api.amazon.com/products?asin=YOUR_ASIN&apiKey=YOUR_AMAZON_API_KEY`,
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=YOUR_PRODUCT_NAME&apiKey=YOUR_EBAY_API_KEY`,
      `https://api.walmartlabs.com/v1/items?apiKey=YOUR_WALMART_API_KEY&upc=YOUR_UPC_CODE`
    ];
  
    Promise.all(apis.map(api => fetch(api).then(response => response.json())))
      .then(data => {
        const productDetails = document.getElementById('productDetails');
        data.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
          `;
          productDetails.appendChild(productElement);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
