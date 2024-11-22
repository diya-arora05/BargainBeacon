document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
  
      if (!category) {
        alert('Please select a category.');
        return;
      }
  
      const apiURL = 'https://jsonplaceholder.typicode.com/photos'; // Placeholder API for demonstration purposes
  
      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          // Filter data based on category (for demo purposes, we use a fixed ID)
          const product = data.find(item => item.id === 1);
  
          const productDetails = document.getElementById('productDetails');
          productDetails.innerHTML = `
            <h2>${category}</h2>
            <p>Title: ${product.title}</p>
            <img src="${product.url}" alt="${product.title}" width="200" height="200">
          `;
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });
  
  