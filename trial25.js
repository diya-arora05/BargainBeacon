document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('priceHistoryChart').getContext('2d');
    const priceHistoryChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Electronics',
            data: [120, 115, 130, 125, 140, 135, 145, 150, 160, 155, 170, 165],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Home & Furniture',
            data: [150, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  
  