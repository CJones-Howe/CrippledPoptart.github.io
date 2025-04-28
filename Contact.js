document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        statusMessage.textContent = 'Form submitted (check your browser console)!';
        form.reset(); // Clear the form after submission (optional)
    });
});
