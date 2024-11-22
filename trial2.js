document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const products = ['Product A', 'Product B', 'Product C'];
    const prices = [29.99, 49.99, 19.99];
  
    // Select the canvas element
    const ctx = document.getElementById('priceChart').getContext('2d');
  
    // Create the chart
    const priceChart = new Chart(ctx, {
      type: 'bar', // Change to 'pie', 'line', etc. as needed
      data: {
        labels: products,
        datasets: [{
          label: 'Price in USD',
          data: prices,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
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
  });
  