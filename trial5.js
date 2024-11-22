document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=5'; // Mock API endpoint
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const productImages = document.getElementById('productImages');
        data.forEach(photo => {
          const photoElement = document.createElement('div');
          photoElement.innerHTML = `
            <h2>${photo.title}</h2>
            <img src="${photo.url}" alt="${photo.title}" width="200" height="200">
          `;
          productImages.appendChild(photoElement);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  