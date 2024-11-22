document.getElementById('mainCategory').addEventListener('change', function() {
    const subCategoryContainer = document.getElementById('subCategoryContainer');
    const subCategoryList = document.getElementById('subCategoryList');
    const selectedCategory = this.value;
  
    // Clear previous sub-category options
    subCategoryList.innerHTML = '';
  
    if (selectedCategory) {
      let subCategories = [];
  
      // Define sub-categories based on selected main category
      if (selectedCategory === 'electronics') {
        subCategories = ['Mobiles', 'Laptops', 'Cameras', 'Televisions'];
      } else if (selectedCategory === 'grocery') {
        subCategories = ['Fruits & Vegetables', 'Dairy Products', 'Snacks', 'Beverages'];
      }
  
      // Populate sub-category list
      subCategories.forEach(subCategory => {
        const listItem = document.createElement('li');
        listItem.textContent = subCategory;
        subCategoryList.appendChild(listItem);
      });
  
      // Show sub-category list
      subCategoryContainer.style.display = 'block';
    } else {
      // Hide sub-category list if no main category is selected
      subCategoryContainer.style.display = 'none';
    }
  });
  