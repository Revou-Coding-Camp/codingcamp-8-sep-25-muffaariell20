document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const output = `
    <h3>Thank you for reaching out!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const resultBox = document.getElementById("output");
  resultBox.innerHTML = output;
  resultBox.style.display = "block";

  this.reset();
});
