document.addEventListener('DOMContentLoaded', () => {
    const apis = [
      'https://jsonplaceholder.typicode.com/posts/1',  // Mock API endpoint 1
      'https://jsonplaceholder.typicode.com/posts/2',  // Mock API endpoint 2
      'https://jsonplaceholder.typicode.com/posts/3'   // Mock API endpoint 3
    ];
  
    Promise.all(apis.map(api => fetch(api).then(response => response.json())))
      .then(data => {
        const productDetails = document.getElementById('productDetails');
        const prices = [];
        const labels = [];
        
        data.forEach((product, index) => {
          const productElement = document.createElement('div');
          const price = Math.floor(Math.random() * 100); // Random price for demonstration
          productElement.innerHTML = `
            <h2>Product ${index + 1}</h2>
            <p>Title: ${product.title}</p>
            <p>Price: $${price}</p>
          `;
          productDetails.appendChild(productElement);
          prices.push(price);
          labels.push(`Product ${index + 1}`);
        });
  
        // Create the chart
        const ctx = document.getElementById('priceChart').getContext('2d');
        const priceChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Price in USD',
              data: prices,
              backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  