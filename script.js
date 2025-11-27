document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  // const icon = menuToggle.querySelector("i");

  // Confirm elements exist
  console.log("Menu toggle:", menuToggle, "Nav links:", navLinks);

  if(!menuToggle || !navLinks){
    console.log("Menu toggle or nav links not found");
    return; // stop if not found
  }
  
  const icon = menuToggle.querySelector("i");

  // ======== TOGGLE MENU ========
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent click from bubbling up
    if(navLinks){
      navLinks.classList.toggle("active");
    }
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
    console.log("Toggled menu");
  });

  // ======== CLOSE ON LINK CLICK ========
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
    });
  });

  // ======== CLOSE WHEN CLICKING OUTSIDE ========
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    }
  });

  // ======== TYPING EFFECT ========
  const typingText = document.querySelector(".typing-text");
  const preText = "Java Developer | MySQL Enthusiast | Full Stack Learner | ";
  if (typingText) {
    const words = ["Programming Enthusiast", "Problem Solver"];
    let i = 0, j = 0, isDeleting = false;

    function type() {
      const currentWord = words[i];
      typingText.textContent = preText + currentWord.substring(0, j);
      if (!isDeleting && j++ === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j-- === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }

    type();
  }
});
