document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        document.getElementById('form-response').innerHTML = "<p style='color: red;'>Por favor, completa todos los campos.</p>";
    } else {
        document.getElementById('form-response').innerHTML = "<p style='color: green;'>¡Mensaje enviado correctamente!</p>";
    }
    
    document.getElementById('contact-form').reset();
});
