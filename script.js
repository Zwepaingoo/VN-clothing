const form = document.getElementById("waitlist");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  msg.textContent="Thank you. We will contact you if selected.";
});