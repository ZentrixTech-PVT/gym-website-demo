// Smooth scroll
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact form
function submitForm(e) {
  e.preventDefault();
  alert("Message Sent!");
}

// Feedback form
function feedbackForm(e) {
  e.preventDefault();
  alert("Thanks for feedback!");
}

// Login popup
function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}

// Login check
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === "admin" && p === "1234") {
    document.getElementById("msg").innerText = "Login Success!";
  } else {
    document.getElementById("msg").innerText = "Wrong credentials";
  }
}

// Scroll animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});