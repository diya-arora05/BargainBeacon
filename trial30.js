document.addEventListener('DOMContentLoaded', () => {
    const handleCategoryClick = (category) => {
      sessionStorage.setItem('selectedCategory', category);
      window.location.href = "product-comparison.html";
    };
  
    document.querySelectorAll('.dropdown-content a[data-category]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        if (category) {
          handleCategoryClick(category);
        }
      });
    });
  });
  
  