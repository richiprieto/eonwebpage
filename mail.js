(function() {
    // Inicializa EmailJS con tu clave pública
    emailjs.init({
        publicKey: "JK85Q-znN7oVskxfg",
    });

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Mostrar indicador de carga
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = 'Enviando...';

            // Preparar los parámetros para el envío
            const templateParams = {
                from_name: form.querySelector('[name="name"]').value,
                reply_to: form.querySelector('[name="email"]').value,
                message: form.querySelector('[name="message"]').value
            };

            // Enviar el correo electrónico
            emailjs.send('service_b9r3nwe', 'template_q71kr0f', templateParams)
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
})();