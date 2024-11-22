document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
  
      if (!category) {
        alert('Please select a category.');
        return;
      }
  
      const apis = {
        Grains: [
          `https://jsonplaceholder.typicode.com/photos/1`, 
          `https://jsonplaceholder.typicode.com/photos/2`
        ],
        BreakfastFood: [
          `https://jsonplaceholder.typicode.com/photos/3`, 
          `https://jsonplaceholder.typicode.com/photos/4`
        ],
        Drinks: [
          `https://jsonplaceholder.typicode.com/photos/5`, 
          `https://jsonplaceholder.typicode.com/photos/6`
        ],
        Household: [
          `https://jsonplaceholder.typicode.com/photos/7`, 
          `https://jsonplaceholder.typicode.com/photos/8`
        ],
        Personalcare: [
          `https://jsonplaceholder.typicode.com/photos/9`, 
          `https://jsonplaceholder.typicode.com/photos/10`
        ],
        Body: [
          `https://jsonplaceholder.typicode.com/photos/11`, 
          `https://jsonplaceholder.typicode.com/photos/12`
        ],
        Beauty: [
          `https://jsonplaceholder.typicode.com/photos/13`, 
          `https://jsonplaceholder.typicode.com/photos/14`
        ]
        // ],
        // tablets: [
        //   `https://jsonplaceholder.typicode.com/photos/15`, 
        //   `https://jsonplaceholder.typicode.com/photos/16`
        // ],
        // smartwatch: [
        //   `https://jsonplaceholder.typicode.com/photos/17`, 
        //   `https://jsonplaceholder.typicode.com/photos/18`
        // ],
        // homeaudio: [
        //   `https://jsonplaceholder.typicode.com/photos/19`, 
        //   `https://jsonplaceholder.typicode.com/photos/20`
        // ]
      };
  
      Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
        .then(data => {
          const productDetails = document.getElementById('productDetails');
          productDetails.innerHTML = ''; 
          const prices = [];
          const labels = [];
  
          data.forEach((product, index) => {
            const price = Math.floor(Math.random() * 100); 
            const productElement = document.createElement('div');
            productElement.innerHTML = `
              <h2>${category.charAt(0).toUpperCase() + category.slice(1)} from Website ${index + 1}</h2>
              <p>Title: ${product.title}</p>
              <p>Description: ${product.title} - More detailed information about the product can go here.</p>
              <p>Price: $${price}</p>
              <img src="${product.url}" alt="${product.title}" width="200" height="200">
              <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
            `;
            productDetails.appendChild(productElement);
            prices.push(price);
            labels.push(`Website ${index + 1}`);
          });
  
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
  