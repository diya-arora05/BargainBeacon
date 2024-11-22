const ctx = document.getElementById('priceHistoryChart').getContext('2d');
const priceHistoryChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Price in USD',
      data: [120, 115, 130, 125, 140, 135, 145, 150, 160, 155, 170, 165],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

document.getElementById('setPriceAlert').addEventListener('click', () => {
  alert('Price alert set!');
});
