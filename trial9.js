document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const productName = document.getElementById('productName').value;
  
      const apis = [
        `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint 1
        `https://jsonplaceholder.typicode.com/photos/2`   // Mock API endpoint 2
      ];
  
      Promise.all(apis.map(api => fetch(api).then(response => response.json())))
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
              <p>Price: $${price}</p>
              <img src="${product.url}" alt="${product.title}" width="200" height="200">
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
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });
  