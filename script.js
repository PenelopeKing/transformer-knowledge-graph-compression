document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-section");
  
    const observerOptions = {
      threshold: [0, 0.5, 1], // Trigger at 0%, 50%, and 100% visibility
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // Fade in when entering the viewport
          entry.target.classList.add("visible");
          entry.target.classList.remove("fading-out");
        } else {
          // Fade out when leaving the viewport
          entry.target.classList.remove("visible");
          entry.target.classList.add("fading-out");
        }
      });
    }, observerOptions);
  
    sections.forEach((section) => observer.observe(section));
  });
  