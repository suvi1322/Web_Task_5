document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  this.reset();
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
