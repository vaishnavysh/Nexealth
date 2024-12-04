document.getElementById('patientForm').addEventListener('submit', function(event) {
    // Basic validation example
    var form = event.target;
    if (!form.checkValidity()) {
        alert('Please fill out all required fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert('Form submitted successfully!');
        // Optionally, handle form submission (e.g., via AJAX) here
    }
});