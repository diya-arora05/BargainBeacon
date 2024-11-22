// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('productForm').addEventListener('submit', (e) => {
//       e.preventDefault();
//       const category = document.getElementById('category').value;
//       const productName = document.getElementById('productName').value;
  
//       if (!category || !productName) {
//         alert('Please select a category and enter a product name.');
//         return;
//       }
  
//       const apis = {
//         electronics: [
//           `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
//           `https://jsonplaceholder.typicode.com/photos/2`   // Mock API endpoint for electronics 2
//         ],
//         dailyuse: [
//           `https://jsonplaceholder.typicode.com/photos/3`,  // Mock API endpoint for daily use 1
//           `https://jsonplaceholder.typicode.com/photos/4`   // Mock API endpoint for daily use 2
//         ]
//       };
  
//       const productLinks = {
//         electronics: [
//           `https://example.com/electronics/product1`,  // Placeholder URL for electronics 1
//           `https://example.com/electronics/product2`   // Placeholder URL for electronics 2
//         ],
//         dailyuse: [
//           `https://example.com/dailyuse/product1`,     // Placeholder URL for daily use 1
//           `https://example.com/dailyuse/product2`      // Placeholder URL for daily use 2
//         ]
//       };
  
//       Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
//         .then(data => {
//           const productDetails = document.getElementById('productDetails');
//           productDetails.innerHTML = ''; // Clear previous results
//           const prices = [];
//           const labels = [];
  
//           data.forEach((product, index) => {
//             const price = Math.floor(Math.random() * 100); // Random price for demonstration
//             const productElement = document.createElement('div');
//             productElement.innerHTML = `
//               <h2>${productName} from Website ${index + 1}</h2>
//               <p>Title: ${product.title}</p>
//               <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//               <p>Price: $${price}</p>
//               <img src="${product.url}" alt="${product.title}" width="200" height="200">
//               <p><a href="${productLinks[category][index]}" target="_blank">View on Website ${index + 1}</a></p>
//             `;
//             product

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('productForm').addEventListener('submit', (e) => {
//       e.preventDefault();
//       const category = document.getElementById('category').value;
//       const productName = document.getElementById('productName').value;
  
//       if (!category || !productName) {
//         alert('Please select a category and enter a product name.');
//         return;
//       }
  
//       const apis = {
//         electronics: [
//           `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
//           `https://jsonplaceholder.typicode.com/photos/2`   // Mock API endpoint for electronics 2
//         ],
//         dailyuse: [
//           `https://jsonplaceholder.typicode.com/photos/3`,  // Mock API endpoint for daily use 1
//           `https://jsonplaceholder.typicode.com/photos/4`   // Mock API endpoint for daily use 2
//         ]
//       };
  
//       const productLinks = {
//         electronics: [
//           `https://example.com/electronics/product1`,  // Placeholder URL for electronics 1
//           `https://example.com/electronics/product2`   // Placeholder URL for electronics 2
//         ],
//         dailyuse: [
//           `https://example.com/dailyuse/product1`,     // Placeholder URL for daily use 1
//           `https://example.com/dailyuse/product2`      // Placeholder URL for daily use 2
//         ]
//       };
  
//       Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
//         .then(data => {
//           const productDetails = document.getElementById('productDetails');
//           productDetails.innerHTML = ''; // Clear previous results
//           const prices = [];
//           const labels = [];
  
//           data.forEach((product, index) => {
//             const price = Math.floor(Math.random() * 100); // Random price for demonstration
//             const productElement = document.createElement('div');
//             productElement.innerHTML = `
//               <h2>${productName} from Website ${index + 1}</h2>
//               <p>Title: ${product.title}</p>
//               <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//               <p>Price: $${price}</p>
//               <img src="${product.url}" alt="${product.title}" width="200" height="200">
//               <p><a href="${productLinks[category][index]}" target="_blank">View on Website ${index + 1}</a></p>

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
      const productName = document.getElementById('productName').value;
  
      if (!category || !productName) {
        alert('Please select a category and enter a product name.');
        return;
      }
  
      const apis = {
        electronics: [
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`   // Mock API endpoint for electronics 2
        ],
        dailyuse: [
          `https://jsonplaceholder.typicode.com/photos/3`,  // Mock API endpoint for daily use 1
          `https://jsonplaceholder.typicode.com/photos/4`   // Mock API endpoint for daily use 2
        ]
      };
  
      Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
        .then(data => {
          const productDetails = document.getElementById('productDetails');
          productDetails.innerHTML = ''; // Clear previous results
          const prices = [];
          const labels = [];
  
          data.forEach((product, index) => {
            const price = Math.floor(Math.random() * 100); // Random price for demonstration
            const productElement = document.createElement('div');
            productElement.innerHTML = `
              <h2>${productName} from Website ${index + 1}</h2>
              <p>Title: ${product.title}</p>
              <p>Description: ${product.title} - More detailed information about the product can go here.</p>
              <p>Price: $${price}</p>
              <img src="${product.url}" alt="${product.title}" width="200" height="200">
              <p><a href="#" class="product-link" data-index="${index}">View on Website ${index + 1}</a></p>
            `;
            productDetails.appendChild(productElement);
            prices.push(price);
            labels.push(`Website ${index + 1}`);
          });
  
          // Create the pie chart
          const ctx = document.getElementById('priceChart').getContext('2d');
          const priceChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [{
                label: 'Price in USD',
                data: prices,
                backgroundColor: ['#ff6384', '#36a2eb']
              }]
            },
            options: {
              responsive: true
            }
          });
  
          // Add event listeners for product links
          document.querySelectorAll('.product-link').forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const index = e.target.dataset.index;
              const product = data[index];
              const productPageContent = document.getElementById('productPageContent');
              productPageContent.innerHTML = `
                <h2>${productName} from Website ${index + 1}</h2>
                <p>Title: ${product.title}</p>
                <p>Description: ${product.title} - More detailed information about the product can go here.</p>
                <p>Price: $${Math.floor(Math.random() * 100)}</p>
                <img src="${product.url}" alt="${product.title}" width="200" height="200">
                <p><a href="${product.url}" target="_blank">View on Original Website</a></p>
              `;
              document.getElementById('productDetails').style.display = 'none';
              document.getElementById('priceChart').style.display = 'none';
              document.getElementById('productPage').style.display = 'block';
            });
          });
  
          // Add event listener for back button
          document.getElementById('backButton').addEventListener('click', () => {
            document.getElementById('productDetails').style.display = 'block';
            document.getElementById('priceChart').style.display = 'block';
            document.getElementById('productPage').style.display = 'none';
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });
  