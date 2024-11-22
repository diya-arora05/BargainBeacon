document.querySelectorAll('.main-category').forEach(item => {
    item.addEventListener('mouseenter', function() {
      const category = this.getAttribute('data-category');
      document.querySelectorAll('.sub-dropdown-content').forEach(subContent => {
        subContent.style.display = 'none';
      });
      document.getElementById(category + 'Sub').style.display = 'block';
    });
  });
  
  document.querySelectorAll('.navbar-links > li').forEach(item => {
    item.addEventListener('mouseleave', function() {
      setTimeout(() => {
        document.querySelectorAll('.sub-dropdown-content').forEach(subContent => {
          subContent.style.display = 'none';
        });
      }, 300);
    });
  });
  