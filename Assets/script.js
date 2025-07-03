document.getElementById("contactForm").addEventListener("submit"), function(event) {
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      event.preventDefault();
      alert("Veuillez entrer une adresse e-mail valide.");
      emailInput.focus();
      return;
    }

  }

