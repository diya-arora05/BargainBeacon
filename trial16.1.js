document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
      // const productName = document.getElementById('productName').value;
  
      if (!category) {
        alert('Please select a category.');
        return;
      }
  
      const apis = {
        ac: [
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`   // Mock API endpoint for electronics 2
        ],
        fridge: [
          `https://jsonplaceholder.typicode.com/photos/3`,  // Mock API endpoint for daily use 1
          `https://jsonplaceholder.typicode.com/photos/4`   // Mock API endpoint for daily use 2
        ],
        tv: [
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        airfryer: [
           `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        storage: [
           `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        laptops: [
            `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        headphones: [
           `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        tablets: [
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        smartwatch:[
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        homeaudio: [
          `https://jsonplaceholder.typicode.com/photos/1`,  // Mock API endpoint for electronics 1
          `https://jsonplaceholder.typicode.com/photos/2`
        ]
      };
  
      Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
        .then(data => {
          const productDetails = document.getElementById('productDetails');
          productDetails.innerHTML = ''; // Clear previous results
          const prices = [];
          const labels = [];
          const productUrls = [
            'https://example.com/product-1',  // Mock product page URL 1
            'https://example.com/product-2'   // Mock product page URL 2
          ];
  
          data.forEach((product, index) => {
            const price = Math.floor(Math.random() * 100); // Random price for demonstration
            const productElement = document.createElement('div');
            productElement.innerHTML = `
              <h2>${productName} from Website ${index + 1}</h2>
              <p>Title: ${product.title}</p>
              <p>Description: ${product.title} - More detailed information about the product can go here.</p>
              <p>Price: $${price}</p>
              <img src="${product.url}" alt="${product.title}" width="200" height="200">
              <p><a href="${productUrls[index]}" target="_blank">View on Original Website</a></p>
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
                label: 'Price in INR',
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
  