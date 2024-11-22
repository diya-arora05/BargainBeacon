// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('productForm').addEventListener('submit', (e) => {
//       e.preventDefault();
//       const category = document.getElementById('category').value;
  
//       if (!category) {
//         alert('Please select a category.');
//         return;
//       }
  
//       const apis = {
//         AirConditioner: [
//           `https://jsonplaceholder.typicode.com/photos/1`, 
//           `https://jsonplaceholder.typicode.com/photos/2`
//         ],
//         Refrigerator: [
//           `https://jsonplaceholder.typicode.com/photos/3`, 
//           `https://jsonplaceholder.typicode.com/photos/4`
//         ],
//         Television: [
//           `https://jsonplaceholder.typicode.com/photos/5`, 
//           `https://jsonplaceholder.typicode.com/photos/6`
//         ],
//         Airfryer: [
//           `https://jsonplaceholder.typicode.com/photos/7`, 
//           `https://jsonplaceholder.typicode.com/photos/8`
//         ],
//         Storage: [
//           `https://jsonplaceholder.typicode.com/photos/9`, 
//           `https://jsonplaceholder.typicode.com/photos/10`
//         ],
//         Laptop: [
//           `https://jsonplaceholder.typicode.com/photos/11`, 
//           `https://jsonplaceholder.typicode.com/photos/12`
//         ],
//         Headphone: [
//           `https://jsonplaceholder.typicode.com/photos/13`, 
//           `https://jsonplaceholder.typicode.com/photos/14`
//         ],
//         Tablet: [
//           `https://jsonplaceholder.typicode.com/photos/15`, 
//           `https://jsonplaceholder.typicode.com/photos/16`
//         ],
//         Smartwatch: [
//           `https://jsonplaceholder.typicode.com/photos/17`, 
//           `https://jsonplaceholder.typicode.com/photos/18`
//         ],
//         Homeaudio: [
//           `https://jsonplaceholder.typicode.com/photos/19`, 
//           `https://jsonplaceholder.typicode.com/photos/20`
//         ]
//       };
  
//       Promise.all(apis[category].map(api => fetch(api).then(response => response.json())))
//         .then(data => {
//           const productDetails = document.getElementById('productDetails');
//           productDetails.innerHTML = ''; 
//           const prices = [];
//           const labels = [];
  
//           data.forEach((product, index) => {
//             const price = Math.floor(Math.random() * 100); 
//             const productElement = document.createElement('div');
//             productElement.innerHTML = `
//               <h2>${category.charAt(0).toUpperCase() + category.slice(1)} from Website ${index + 1}</h2>
//               <p>Title: ${product.title}</p>
//               <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//               <p>Price: $${price}</p>
//               <img src="${product.url}" alt="${product.title}" width="200" height="200">
//               <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
//             `;
//             productDetails.appendChild(productElement);
//             prices.push(price);
//             labels.push(`Website ${index + 1}`);
//           });
  
//           const ctx = document.getElementById('priceChart').getContext('2d');
//           const priceChart = new Chart(ctx, {
//             type: 'pie',
//             data: {
//               labels: labels,
//               datasets: [{
//                 label: 'Price in USD',
//                 data: prices,
//                 backgroundColor: ['#ff6384', '#36a2eb']
//               }]
//             },
//             options: {
//               responsive: true
//             }
//           });
//         })
//         .catch(error => console.error('Error fetching data:', error));
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('productForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const category = document.getElementById('category').value;

//     if (!category) {
//       alert('Please select a category.');
//       return;
//     }

//     const apis = {
//       AirConditioner: [
//         {
//           title: 'Air Conditioner',
//           url: 'https://your-image-host.com/airconditioner1.jpg'
//         },
//         {
//           title: 'Air Conditioner Deluxe',
//           url: 'https://your-image-host.com/airconditioner2.jpg'
//         }
//       ],
//       Refrigerator: [
//         {
//           title: 'Refrigerator',
//           url: 'https://your-image-host.com/refrigerator1.jpg'
//         },
//         {
//           title: 'Refrigerator XL',
//           url: 'https://your-image-host.com/refrigerator2.jpg'
//         }
//       ],
//       Television: [
//         {
//           title: 'Television',
//           url: 'https://your-image-host.com/television1.jpg'
//         },
//         {
//           title: 'Smart TV',
//           url: 'https://your-image-host.com/television2.jpg'
//         }
//       ],
//       Airfryer: [
//         {
//           title: 'Air Fryer',
//           url: 'https://your-image-host.com/airfryer1.jpg'
//         },
//         {
//           title: 'Air Fryer Pro',
//           url: 'https://your-image-host.com/airfryer2.jpg'
//         }
//       ],
//       Storage: [
//         {
//           title: 'Storage',
//           url: 'https://your-image-host.com/storage1.jpg'
//         },
//         {
//           title: 'Storage Plus',
//           url: 'https://your-image-host.com/storage2.jpg'
//         }
//       ],
//       Laptop: [
//         {
//           title: 'Laptop',
//           url: 'https://your-image-host.com/laptop1.jpg'
//         },
//         {
//           title: 'Gaming Laptop',
//           url: 'https://your-image-host.com/laptop2.jpg'
//         }
//       ],
//       Headphone: [
//         {
//           title: 'Headphone',
//           url: 'https://your-image-host.com/headphone1.jpg'
//         },
//         {
//           title: 'Wireless Headphone',
//           url: 'https://your-image-host.com/headphone2.jpg'
//         }
//       ],
//       Tablet: [
//         {
//           title: 'Tablet',
//           url: 'https://your-image-host.com/tablet1.jpg'
//         },
//         {
//           title: 'Tablet Pro',
//           url: 'https://your-image-host.com/tablet2.jpg'
//         }
//       ],
//       Smartwatch: [
//         {
//           title: 'Smartwatch',
//           url: 'https://your-image-host.com/smartwatch1.jpg'
//         },
//         {
//           title: 'Fitness Smartwatch',
//           url: 'https://your-image-host.com/smartwatch2.jpg'
//         }
//       ],
//       Homeaudio: [
//         {
//           title: 'Speakers',
//           url: 'https://your-image-host.com/speakers1.jpg'
//         },
//         {
//           title: 'Home Audio System',
//           url: 'https://your-image-host.com/speakers2.jpg'
//         }
//       ]
//     };

//     const productDetails = document.getElementById('productDetails');
//     productDetails.innerHTML = '';
//     const prices = [];
//     const labels = [];

//     apis[category].forEach((product, index) => {
//       const price = Math.floor(Math.random() * 100);
//       const productElement = document.createElement('div');
//       productElement.innerHTML = `
//         <h2>${product.title} from Website ${index + 1}</h2>
//         <p>Title: ${product.title}</p>
//         <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//         <p>Price: $${price}</p>
//         <img src="${product.url}" alt="${product.title}" width="200" height="200">
//         <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
//       `;
//       productDetails.appendChild(productElement);
//       prices.push(price);
//       labels.push(`Website ${index + 1}`);
//     });

//     const ctx = document.getElementById('priceChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Price in USD',
//           data: prices,
//           backgroundColor: ['#ff6384', '#36a2eb']
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('productForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const category = document.getElementById('category').value;

//     if (!category) {
//       alert('Please select a category.');
//       return;
//     }

//     const apis = {
//       AirConditioner: [
//         {
//           title: 'Air Conditioner',
//           url: 'https://source.unsplash.com/800x600/?air-conditioner'
//         },
//         {
//           title: 'Air Conditioner Deluxe',
//           url: 'https://source.unsplash.com/800x600/?air-conditioning'
//         }
//       ],
//       Refrigerator: [
//         {
//           title: 'Refrigerator',
//           url: 'https://source.unsplash.com/800x600/?refrigerator'
//         },
//         {
//           title: 'Refrigerator XL',
//           url: 'https://source.unsplash.com/800x600/?fridge'
//         }
//       ],
//       Television: [
//         {
//           title: 'Television',
//           url: 'https://source.unsplash.com/800x600/?television'
//         },
//         {
//           title: 'Smart TV',
//           url: 'https://source.unsplash.com/800x600/?smart-tv'
//         }
//       ],
//       Airfryer: [
//         {
//           title: 'Air Fryer',
//           url: 'https://source.unsplash.com/800x600/?air-fryer'
//         },
//         {
//           title: 'Air Fryer Pro',
//           url: 'https://source.unsplash.com/800x600/?kitchen-appliance'
//         }
//       ],
//       Storage: [
//         {
//           title: 'Storage',
//           url: 'https://source.unsplash.com/800x600/?storage'
//         },
//         {
//           title: 'Storage Plus',
//           url: 'https://source.unsplash.com/800x600/?shelf'
//         }
//       ],
//       Laptop: [
//         {
//           title: 'Laptop',
//           url: 'https://source.unsplash.com/800x600/?laptop'
//         },
//         {
//           title: 'Gaming Laptop',
//           url: 'https://source.unsplash.com/800x600/?gaming-laptop'
//         }
//       ],
//       Headphone: [
//         {
//           title: 'Headphone',
//           url: 'https://source.unsplash.com/800x600/?headphone'
//         },
//         {
//           title: 'Wireless Headphone',
//           url: 'https://source.unsplash.com/800x600/?wireless-headphone'
//         }
//       ],
//       Tablet: [
//         {
//           title: 'Tablet',
//           url: 'https://source.unsplash.com/800x600/?tablet'
//         },
//         {
//           title: 'Tablet Pro',
//           url: 'https://source.unsplash.com/800x600/?tablet-pro'
//         }
//       ],
//       Smartwatch: [
//         {
//           title: 'Smartwatch',
//           url: 'https://source.unsplash.com/800x600/?smartwatch'
//         },
//         {
//           title: 'Fitness Smartwatch',
//           url: 'https://source.unsplash.com/800x600/?fitness-watch'
//         }
//       ],
//       Homeaudio: [
//         {
//           title: 'Speakers',
//           url: 'https://source.unsplash.com/800x600/?speakers'
//         },
//         {
//           title: 'Home Audio System',
//           url: 'https://source.unsplash.com/800x600/?home-audio'
//         }
//       ]
//     };

//     const productDetails = document.getElementById('productDetails');
//     productDetails.innerHTML = '';
//     const prices = [];
//     const labels = [];

//     apis[category].forEach((product, index) => {
//       const price = Math.floor(Math.random() * 100);
//       const productElement = document.createElement('div');
//       productElement.innerHTML = `
//         <h2>${product.title} from Website ${index + 1}</h2>
//         <p>Title: ${product.title}</p>
//         <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//         <p>Price: $${price}</p>
//         <img src="${product.url}" alt="${product.title}" width="200" height="200">
//         <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
//       `;
//       productDetails.appendChild(productElement);
//       prices.push(price);
//       labels.push(`Website ${index + 1}`);
//     });

//     const ctx = document.getElementById('priceChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Price in USD',
//           data: prices,
//           backgroundColor: ['#ff6384', '#36a2eb']
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('productForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const category = document.getElementById('category').value;

//     if (!category) {
//       alert('Please select a category.');
//       return;
//     }

//     const apis = {
//       AirConditioner: [
//         {
//           title: 'Air Conditioner',
//           url: 'https://source.unsplash.com/800x600/?air-conditioner'
//         },
//         {
//           title: 'Air Conditioner Deluxe',
//           url: 'https://source.unsplash.com/800x600/?air-conditioning'
//         }
//       ],
//       Refrigerator: [
//         {
//           title: 'Refrigerator',
//           url: 'https://source.unsplash.com/800x600/?refrigerator'
//         },
//         {
//           title: 'Refrigerator XL',
//           url: 'https://source.unsplash.com/800x600/?fridge'
//         }
//       ],
//       Television: [
//         {
//           title: 'Television',
//           url: 'https://source.unsplash.com/800x600/?television'
//         },
//         {
//           title: 'Smart TV',
//           url: 'https://source.unsplash.com/800x600/?smart-tv'
//         }
//       ],
//       Airfryer: [
//         {
//           title: 'Air Fryer',
//           url: 'https://source.unsplash.com/800x600/?air-fryer'
//         },
//         {
//           title: 'Air Fryer Pro',
//           url: 'https://source.unsplash.com/800x600/?kitchen-appliance'
//         }
//       ],
//       Storage: [
//         {
//           title: 'Storage',
//           url: 'https://source.unsplash.com/800x600/?storage'
//         },
//         {
//           title: 'Storage Plus',
//           url: 'https://source.unsplash.com/800x600/?shelf'
//         }
//       ],
//       Laptop: [
//         {
//           title: 'Laptop',
//           url: 'https://source.unsplash.com/800x600/?laptop'
//         },
//         {
//           title: 'Gaming Laptop',
//           url: 'https://source.unsplash.com/800x600/?gaming-laptop'
//         }
//       ],
//       Headphone: [
//         {
//           title: 'Headphone',
//           url: 'https://source.unsplash.com/800x600/?headphone'
//         },
//         {
//           title: 'Wireless Headphone',
//           url: 'https://source.unsplash.com/800x600/?wireless-headphone'
//         }
//       ],
//       Tablet: [
//         {
//           title: 'Tablet',
//           url: 'https://source.unsplash.com/800x600/?tablet'
//         },
//         {
//           title: 'Tablet Pro',
//           url: 'https://source.unsplash.com/800x600/?tablet-pro'
//         }
//       ],
//       Smartwatch: [
//         {
//           title: 'Smartwatch',
//           url: 'https://source.unsplash.com/800x600/?smartwatch'
//         },
//         {
//           title: 'Fitness Smartwatch',
//           url: 'https://source.unsplash.com/800x600/?fitness-watch'
//         }
//       ],
//       Homeaudio: [
//         {
//           title: 'Speakers',
//           url: 'https://source.unsplash.com/800x600/?speakers'
//         },
//         {
//           title: 'Home Audio System',
//           url: 'https://source.unsplash.com/800x600/?home-audio'
//         }
//       ]
//     };

//     const productDetails = document.getElementById('productDetails');
//     productDetails.innerHTML = '';
//     const prices = [];
//     const labels = [];

//     apis[category].forEach((product, index) => {
//       const price = Math.floor(Math.random() * 100);
//       const productElement = document.createElement('div');
//       productElement.innerHTML = `
//         <h2>${product.title} from Website ${index + 1}</h2>
//         <p>Title: ${product.title}</p>
//         <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//         <p>Price: $${price}</p>
//         <img src="${product.url}" alt="${product.title}" width="200" height="200">
//         <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
//       `;
//       productDetails.appendChild(productElement);
//       prices.push(price);
//       labels.push(`Website ${index + 1}`);
//     });

//     const ctx = document.getElementById('priceChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Price in USD',
//           data: prices,
//           backgroundColor: ['#ff6384', '#36a2eb']
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('productForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const category = document.getElementById('category').value;

//     if (!category) {
//       alert('Please select a category.');
//       return;
//     }

//     const apis = {
//       AirConditioner: [
//         {
//           title: 'Air Conditioner',
//           url:' https://th.bing.com/th/id/R.943972827e607c9ca3346d0a2f4733b1?rik=jWKiKBm4dE59DQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-XjutfYhW3wc%2fUZRo-qiK4KI%2fAAAAAAAADsY%2fpNl1nZetyXk%2fs1600%2fAir%2bConditioner%2bSplit.jpg&ehk=QXpf9UwKP4yhjo4ZH4TUjdNm7r98VKDZeYJJsf%2fAKoM%3d&risl=&pid=ImgRaw&r=0'
//         },
//         {
//           title: 'Air Conditioner Deluxe',
//           url: 'https://www.eedesignit.com/wp-content/uploads/2016/07/air-conditioners.jpg'
//         }
//       ],
//       Refrigerator: [
//         {
//           title: 'Refrigerator',
//           url: 'https://images.unsplash.com/photo-1596747461026-b5cb9eb2b6a4?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Refrigerator XL',
//           url: 'https://images.unsplash.com/photo-1560839993-5d28d3b1cf25?fit=crop&w=800&h=600'
//         }
//       ],
//       Television: [
//         {
//           title: 'Television',
//           url: 'https://images.unsplash.com/photo-1525803500235-3cfa723c63dc?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Smart TV',
//           url: 'https://images.unsplash.com/photo-1587825140400-91cbf960cc90?fit=crop&w=800&h=600'
//         }
//       ],
//       Airfryer: [
//         {
//           title: 'Air Fryer',
//           url: 'https://images.unsplash.com/photo-1623031150039-72cf35c2c4a9?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Air Fryer Pro',
//           url: 'https://images.unsplash.com/photo-1619449692179-d5020dfea4d6?fit=crop&w=800&h=600'
//         }
//       ],
//       Storage: [
//         {
//           title: 'Storage',
//           url: 'https://images.unsplash.com/photo-1579420806457-bc9c7e6e36df?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Storage Plus',
//           url: 'https://images.unsplash.com/photo-1594150233257-6b61f96a4865?fit=crop&w=800&h=600'
//         }
//       ],
//       Laptop: [
//         {
//           title: 'Laptop',
//           url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Gaming Laptop',
//           url: 'https://images.unsplash.com/photo-1572736879432-8e32449e63d1?fit=crop&w=800&h=600'
//         }
//       ],
//       Headphone: [
//         {
//           title: 'Headphone',
//           url: 'https://images.unsplash.com/photo-1599901812375-84097a509aa0?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Wireless Headphone',
//           url: 'https://images.unsplash.com/photo-1593720218874-ef25b8f86633?fit=crop&w=800&h=600'
//         }
//       ],
//       Tablet: [
//         {
//           title: 'Tablet',
//           url: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Tablet Pro',
//           url: 'https://images.unsplash.com/photo-1541807084-5c52a3c9ab7a?fit=crop&w=800&h=600'
//         }
//       ],
//       Smartwatch: [
//         {
//           title: 'Smartwatch',
//           url: 'https://images.unsplash.com/photo-1523475496153-3a4d7d3fa8b4?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Fitness Smartwatch',
//           url: 'https://images.unsplash.com/photo-1578857222785-a9c22507d066?fit=crop&w=800&h=600'
//         }
//       ],
//       Homeaudio: [
//         {
//           title: 'Speakers',
//           url: 'https://images.unsplash.com/photo-1574273731131-baaec39f94b2?fit=crop&w=800&h=600'
//         },
//         {
//           title: 'Home Audio System',
//           url: 'https://images.unsplash.com/photo-1586422973570-ecb85d9d3ce6?fit=crop&w=800&h=600'
//         }
//       ]
//     };

//     const productDetails = document.getElementById('productDetails');
//     productDetails.innerHTML = '';
//     const prices = [];
//     const labels = [];

//     apis[category].forEach((product, index) => {
//       const price = Math.floor(Math.random() * 100);
//       const productElement = document.createElement('div');
//       productElement.innerHTML = `
//         <h2>${product.title} from Website ${index + 1}</h2>
//         <p>Title: ${product.title}</p>
//         <p>Description: ${product.title} - More detailed information about the product can go here.</p>
//         <p>Price: $${price}</p>
//         <img src="${product.url}" alt="${product.title}" width="200" height="200">
//         <p><a href="product.html?category=${category}&index=${index}" class="product-link">View on Website ${index + 1}</a></p>
//       `;
//       productDetails.appendChild(productElement);
//       prices.push(price);
//       labels.push(`Website ${index + 1}`);
//     });

//     const ctx = document.getElementById('priceChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Price in USD',
//           data: prices,
//           backgroundColor: ['#ff6384', '#36a2eb']
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;

    if (!category) {
      alert('Please select a category.');
      return;
    }

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
      ],
      Refrigerator: [
        {
          title: 'Refrigerator',
          url: 'https://source.unsplash.com/800x600/?refrigerator',
          websites: [
            { name: "Website 1", link: "https://example1.com/refrigerator" }
           
          ]
        },
        {
          title: 'Refrigerator XL',
          url: 'https://source.unsplash.com/800x600/?fridge',
          websites: [
            { name: "Website 2", link: "https://example1.com/refrigerator-xl" }
           
          ]
        }
      ],
      Television: [
        {
          title: 'Television',
          url: 'https://source.unsplash.com/800x600/?refrigerator',
          websites: [
            { name: "Website 1", link: "https://example1.com/refrigerator" }
           
          ]
        },
        {
          title: 'Television-delux',
          url: 'https://source.unsplash.com/800x600/?fridge',
          websites: [
            { name: "Website 2", link: "https://example1.com/refrigerator-xl" }
           
          ]
        }
      ],
      Laptop: [
        {
          title: 'Laptop',
          url: 'https://source.unsplash.com/800x600/?refrigerator',
          websites: [
            { name: "Website 1", link: "https://example1.com/refrigerator" }
           
          ]
        },
        {
          title: 'Laptop-venus',
          url: 'https://source.unsplash.com/800x600/?fridge',
          websites: [
            { name: "Website 2", link: "https://example1.com/refrigerator-xl" }
           
          ]
        }
      ],
    };

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
  });
});

