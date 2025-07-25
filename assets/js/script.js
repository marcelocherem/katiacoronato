document.getElementById('actionBtn').addEventListener('click', function () {
    const contato = document.getElementById('contact');
    if (contato) {
        contato.scrollIntoView({ behavior: 'smooth' });
    }
});



//validate and function for contact buttons
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Per favore, compila tutti i campi prima di inviare");
        return false;
    }
    return true;
}

function sendEmail() {
    if (!validateForm()) return;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let subject = encodeURIComponent("Contatto tramite portfolio");
    let body = encodeURIComponent(`Ciao! Mi chiamo ${name}, la mia email è ${email}. \n${message}`);

    let mailtoLink = `mailto:katiacoronato@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

function sendWhatsApp() {
    if (!validateForm()) return;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let whatsappMessage = encodeURIComponent(`Ciao! Mi chiamo ${name}, la mia email è ${email}. \n${message}`);
    let whatsappLink = `https://wa.me/3473595718?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");
}