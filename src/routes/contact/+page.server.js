function form() {
    alert(`Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nReason: ${reason}`);
    
    // Reset form fields
    firstName = '';
    lastName = '';
    email = '';
    phone = '';
    reason = '';
    
    // Show submitted message
    submitted = true;

    // Hide the message after 3 seconds
    setTimeout(() => {
        submitted = false;
    }, 3000);
}
