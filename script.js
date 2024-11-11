// Form submit event
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const course = document.getElementById("course").value;

    // Add the user to the database or API here
    const apiUrl = "https://hashgo-api.vercel.app//api/v1/users"; // Corrected URL format

    fetch(
      apiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          course,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        showToast("success", "Registered successfully!!");
      })
      .catch((error) => {
        console.error("Error:", error);
        showToast("error", "Registration failed. Please try again.");
      });

    // Close the form and reset it
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
document
  .getElementById("registrationModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal(); // Close modal if clicked outside modal-content
    }
  });

function openCourseDetails() {
  document.getElementById("course-details-modal").style.display = "flex";
  document.getElementById("course-details-modal").classList.add("show-modal");
}

function closeCourseDetails() {
  document
    .getElementById("course-details-modal")
    .classList.remove("show-modal");
  setTimeout(() => {
    document.getElementById("course-details-modal").style.display = "none";
  }, 300);
}

// Set the registration end date
const registrationEndDate = new Date("November 18, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = registrationEndDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById(
    "countdown-timer"
  ).innerHTML = `Ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If countdown is over
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML =
      "Registration is now closed!";
  }
}, 1000);

// Function to show toast with dynamic content
function showToast(type, message) {
  let toast, messageElement;
  if (type === "success") {
    toast = document.getElementById("success-toast");
    messageElement = document.getElementById("success-message");
    toast.classList.add("show");
  } else if (type === "error") {
    toast = document.getElementById("error-toast");
    messageElement = document.getElementById("error-message");
    toast.classList.add("show");
  }

  // Set the message dynamically
  messageElement.textContent = message;

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Function to close a specific toast
function closeToast(toastId) {
  const toast = document.getElementById(toastId);
  toast.classList.remove("show");
}
