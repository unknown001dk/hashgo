// Form submit event
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for registering! We’ll contact you soon.");
    closeRegistrationForm();
    document.getElementById("registrationForm").reset();
  });

document.addEventListener("DOMContentLoaded", function () {
  const animatedCards = document.querySelectorAll(".animated-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Remove the class when the card is out of view to allow animation on re-entry
        entry.target.classList.remove("visible");
      }
    });
  });

  animatedCards.forEach((card) => {
    observer.observe(card);
  });
});

function openRegistrationForm() {
  document.getElementById("registrationModal").style.display = "block";
}

function closeRegistrationForm() {
  document.getElementById("registrationModal").style.display = "none";
}
document.getElementById('registrationModal').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal(); // Close modal if clicked outside modal-content
  }
});

function openCourseDetails() {
  document.getElementById("course-details-modal").style.display = "flex";
  document
    .getElementById("course-details-modal")
    .classList.add("show-modal");
}

function closeCourseDetails() {
  document
    .getElementById("course-details-modal")
    .classList.remove("show-modal");
  setTimeout(() => {
    document.getElementById("course-details-modal").style.display = "none";
  }, 300);
}