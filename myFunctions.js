// myFunctions.js - Custom JavaScript functions for the AI Applications website

// Function to validate form inputs
function validateForm() {
    // Reset errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    
    // Get form values
    const appName = document.getElementById('appName').value.trim();
    const companyName = document.getElementById('companyName').value.trim();
    const website = document.getElementById('website').value.trim();
    const isFree = document.getElementById('isFree').value;
    const field = document.getElementById('field').value;
    const description = document.getElementById('description').value.trim();
    
    // Validation
    let isValid = true;
    
    // Validate app name (English letters only, no numbers or spaces)
    const appNameRegex = /^[A-Za-z]+$/;
    if (!appNameRegex.test(appName)) {
        document.getElementById('appNameError').textContent = 'اسم التطبيق يجب أن يحتوي على أحرف إنكليزية هجائية فقط بدون أرقام أو فراغات';
        isValid = false;
    }
    
    // Validate company name (English letters only)
    if (!appNameRegex.test(companyName)) {
        document.getElementById('companyNameError').textContent = 'اسم الشركة يجب أن يحتوي على أحرف إنكليزية هجائية فقط';
        isValid = false;
    }
    
    // Validate website URL
    if (!website) {
        document.getElementById('websiteError').textContent = 'يرجى إدخال موقع إلكتروني صحيح';
        isValid = false;
    }
    
    // Validate free status
    if (!isFree) {
        document.getElementById('isFreeError').textContent = 'يرجى تحديد ما إذا كان التطبيق مجاني أم لا';
        isValid = false;
    }
    
    // Validate field
    if (!field) {
        document.getElementById('fieldError').textContent = 'يرجى اختيار مجال الاستخدام';
        isValid = false;
    }
    
    // Validate description
    if (!description) {
        document.getElementById('descriptionError').textContent = 'يرجى إدخال شرح مختصر عن التطبيق';
        isValid = false;
    }
    
    return isValid;
}

// Function to reset form
function resetForm() {
    document.getElementById('appForm').reset();
    // Clear errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // Create app object
        const appName = document.getElementById('appName').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const website = document.getElementById('website').value.trim();
        const isFree = document.getElementById('isFree').value;
        const field = document.getElementById('field').value;
        const description = document.getElementById('description').value.trim();
        
        const newApp = {
            id: Date.now(), // Unique ID based on timestamp
            name: appName,
            company: companyName,
            website: website,
            isFree: isFree,
            field: field,
            description: description
        };
        
        // Save to localStorage
        let apps = JSON.parse(localStorage.getItem('aiApps')) || [];
        apps.push(newApp);
        localStorage.setItem('aiApps', JSON.stringify(apps));
        
        // Show success message and redirect
        alert('تم إضافة التطبيق بنجاح!');
        window.location.href = 'apps.html';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for form submission
    const appForm = document.getElementById('appForm');
    if (appForm) {
        appForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add event listener for form reset
    const resetButton = document.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', resetForm);
    }
});