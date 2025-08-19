// Certificate modal preview
document.querySelectorAll(".certificate-img").forEach((img) => {
  img.addEventListener("click", function () {
    const modal = document.getElementById("certificate-modal");
    const modalImg = document.getElementById("certificate-modal-img");
    modalImg.src = this.src;
    modal.classList.add("active");
  });
});
const modal = document.getElementById("certificate-modal");
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.classList.contains("certificate-modal-close")) {
      modal.classList.remove("active");
      document.getElementById("certificate-modal-img").src = "";
    }
  });
}
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Simple form submission alert
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    form.reset();
  });
}

// Scroll active effect for navbar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
