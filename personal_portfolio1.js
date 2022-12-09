const hamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.querySelector("#nav-content");
const closeNavButton = document.querySelector("#nav-content .close-btn");
const navLinks = document.querySelectorAll("#nav-content nav ul li a");
const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  window.addEventListener("scroll", () => {
    if (pageYOffset > window.innerHeight * 1.2) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

hamburgerMenu.addEventListener("click", () => {
  navContent.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeNavButton.addEventListener("click", () => {
  navContent.classList.remove("show");
  document.body.style.overflow = "initial";
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContent.classList.remove("show");
    document.body.style.overflow = "initial";
  });
});
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_9viw1zj";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
