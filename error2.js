document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
  
      if (!category) {
        alert('Please select a category.');
        return;
      };
    });
});