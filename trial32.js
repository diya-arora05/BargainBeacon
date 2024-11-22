  
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
  
    // Fetch data from JSON file
    fetch('product1.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.className = 'product';
          productElement.innerHTML = `
            <h2>Product on Website ${index + 1}</h2>
            <img src="${product.imageUrl}" alt="${product.title}">
            <p><strong>Title:</strong> ${product.title}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p>
              ${product.links.map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`).join(' | ')}
            </p>
          `;
          productContainer.appendChild(productElement);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  
  
  
  