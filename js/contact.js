document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const errorMessage = document.getElementById("formError");

    if (!form) {
        console.error("Formulario no encontrado.");
        return;
    }

    if (!errorMessage) {
        console.error("Elemento de mensaje de error no encontrado.");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Clear previous error message
        errorMessage.textContent = "";

        // Get form values
        const name = document.getElementById("name");
        const surname = document.getElementById("surname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        // Check if all elements are present
        if (!name || !surname || !email || !phone || !message) {
            console.error("Uno o más elementos del formulario no se encontraron.");
            return;
        }

        const nameValue = name.value.trim();
        const surnameValue = surname.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const messageValue = message.value.trim();

        // Validation
        if (!nameValue || !surnameValue || !emailValue || !phoneValue || !messageValue) {
            errorMessage.textContent = "Todos los campos deben ser completados.";
            return;
        }

        if (!validateEmail(emailValue)) {
            errorMessage.textContent = "Por favor ingrese un correo electrónico válido.";
            return;
        }

        if (!/^\d+$/.test(phoneValue)) {
            errorMessage.textContent = "El teléfono debe ser un número válido.";
            return;
        }

        // Create file content
        const fileContent = `Nombre: ${nameValue}\nApellido: ${surnameValue}\nEmail: ${emailValue}\nTeléfono: ${phoneValue}\nConsulta: ${messageValue}`;
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create a download link and trigger it
        const a = document.createElement("a");
        a.href = url;
        a.download = "contacto.txt";
        a.style.display = "none"; // Hide the link
        document.body.appendChild(a);
        a.click();

        // Clean up
        URL.revokeObjectURL(url); // Release memory
        document.body.removeChild(a);
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
