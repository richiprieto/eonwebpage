document.addEventListener("DOMContentLoaded", function () {
    // Asegúrate de reemplazar 'tu_public_key' con tu clave pública real de EmailJS
    emailjs.init("JK85Q-znN7oVskxfg"); // Reemplaza con tu user_id de EmailJS

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mostrar un indicador de carga
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Enviando...';

        // Aquí se envía el correo electrónico a través de EmailJS
        emailjs.sendForm('service_b9r3nwe', 'template_q71kr0f', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Lo siento, ocurrió un error al enviar tu mensaje: ' + error.text);
            })
            .finally(function() {
                // Restaurar el botón de envío
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });
    });
});