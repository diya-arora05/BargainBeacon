document.getElementById('signinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
  
    // Here, you can validate the form data (optional)
    if (validateForm(data)) {
      // If validation is successful, redirect to the next page
      window.location.href = '/next-page';
    } else {
      alert('Invalid credentials');
    }
  });
  
  function validateForm(data) {
    // Perform basic validation
    return data.email && data.password; // Simplified validation
  }
  