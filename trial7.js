document.addEventListener('DOMContentLoaded', () => {
    const apis = [
      'https://jsonplaceholder.typicode.com/photos/1',  // Mock API endpoint 1
      'https://jsonplaceholder.typicode.com/photos/2'   // Mock API endpoint 2
    ];
  
    Promise.all(apis.map(api => fetch(api).then(response => response.json())))
      .then(data => {
        const productDetails = document.getElementById('productDetails');
        const prices = [];
        const labels = [];
  
        data.forEach((photo, index) => {
          const productElement = document.createElement('div');
          const price = Math.floor(Math.random() * 100); // Random price for demonstration
          productElement.innerHTML = `
            <h2>Product ${index + 1}</h2>
            <p>Title: ${photo.title}</p>
            <p>Price: $${price}</p>
            <img src="${photo.url}" alt="${photo.title}" width="200" height="200">
          `;
          productDetails.appendChild(productElement);
          prices.push(price);
          labels.push(`Product ${index + 1}`);
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
              backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
            }]
          },
          options: {
            responsive: true
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  