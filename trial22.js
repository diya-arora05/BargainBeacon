document.getElementById('mainCategory').addEventListener('change', function() {
    const subCategoryContainer = document.getElementById('subCategoryContainer');
    const subCategorySelect = document.getElementById('subCategory');
    const selectedCategory = this.value;
  
    // Clear previous options
    subCategorySelect.innerHTML = '';
  
    if (selectedCategory) {
      let subCategories = [];
  
      // Define sub-categories based on selected main category
      if (selectedCategory === 'electronics') {
        subCategories = ['Mobiles', 'Laptops', 'Cameras', 'Televisions'];
      } else if (selectedCategory === 'grocery') {
        subCategories = ['Fruits & Vegetables', 'Dairy Products', 'Snacks', 'Beverages'];
      }
  
      // Populate sub-category dropdown
      subCategories.forEach(subCategory => {
        const option = document.createElement('option');
        option.value = subCategory.toLowerCase().replace(/ /g, '-');
        option.textContent = subCategory;
        subCategorySelect.appendChild(option);
      });
  
      // Show sub-category dropdown
      subCategoryContainer.style.display = 'block';
    } else {
      // Hide sub-category dropdown if no main category is selected
      subCategoryContainer.style.display = 'none';
    }
  });
  