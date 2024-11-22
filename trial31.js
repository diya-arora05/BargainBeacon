const apis = {
    AirConditioner: [
      {
        title: 'Air Conditioner',
        url: 'https://th.bing.com/th/id/R.943972827e607c9ca3346d0a2f4733b1?rik=jWKiKBm4dE59DQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-XjutfYhW3wc%2fUZRo-qiK4KI%2fAAAAAAAADsY%2fpNl1nZetyXk%2fs1600%2fAir%2bConditioner%2bSplit.jpg&ehk=QXpf9UwKP4yhjo4ZH4TUjdNm7r98VKDZeYJJsf%2fAKoM%3d&risl=&pid=ImgRaw&r=0',
        websites: [
          { name: "Website 1", link: "product1.1.html" }
                  ]
      },
      {
        title: 'Air Conditioner Deluxe',
        url: 'https://www.eedesignit.com/wp-content/uploads/2016/07/air-conditioners.jpg',
        websites: [
          { name: "Website 2", link: "product1.2.html" }  
        ]
      }
    ]
}
const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = '';
    const prices = [];
    const labels = [];

    apis[category].forEach((product, index) => {
      const price = Math.floor(Math.random() * 100);
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h2>${product.title} from Website ${index + 1}</h2>
        <p>Title: ${product.title}</p>
        <p>Description: ${product.title} - More detailed information about the product can go here.</p>
        <p>Price: $${price}</p>
        <img src="${product.url}" alt="${product.title}" width="200" height="200">
        <p>
          ${product.websites.map(site => `<a href="${site.link}" class="product-link" target="_blank">${site.name}</a>`).join(' | ')}
        </p>
      `;
      productDetails.appendChild(productElement);
      prices.push(price);
      labels.push(`Website ${index + 1}`);
    });

    const ctx = document.getElementById('priceChart').getContext('2d');
    new Chart(ctx, {
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


