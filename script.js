// Example JS for contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log("Form submitted:", { name, email, message });

    // For now, show an alert. Later, you can connect with a backend or email API
    alert(`Thanks, ${name}! I'll get back to you soon.`);

    // Reset form
    e.target.reset();
  });
