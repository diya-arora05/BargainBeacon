document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=5'; // Mock API endpoint
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const productImages = document.getElementById('productImages');
        const prices = [];
        const labels = [];
  
        data.forEach((photo, index) => {
          const price = Math.floor(Math.random() * 100); // Random price for demonstration
          const productElement = document.createElement('div');
          productElement.innerHTML = `
            <h2>${photo.title}</h2>
            <p>Price: $${price}</p>
            <img src="${photo.url}" alt="${photo.title}" width="200" height="200">
          `;
          productImages.appendChild(productElement);
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
  