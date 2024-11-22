document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const productName = document.getElementById('productName').value;
  
      const apis = [
        `https://api.publicapis.org/entries?title=${encodeURIComponent(productName)}`, // Mock API endpoint 1
        `https://api.publicapis.org/entries?title=${encodeURIComponent(productName)}`  // Mock API endpoint 2
      ];
  
      Promise.all(apis.map(api => fetch(api).then(response => response.json())))
        .then(data => {
          const productDetails = document.getElementById('productDetails');
          productDetails.innerHTML = ''; // Clear previous results
          const prices = [];
          const labels = [];
  
          data.forEach((apiData, index) => {
            const productElement = document.createElement('div');
            const price = Math.floor(Math.random() * 100); // Random price for demonstration
            productElement.innerHTML = `
              <h2>${productName} from Website ${index + 1}</h2>
              <p>Price: $${price}</p>
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
  