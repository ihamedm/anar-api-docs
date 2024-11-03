(() => {
  // assets/js/scripts.js
  document.addEventListener("DOMContentLoaded", function() {
    hljs.highlightAll();
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section[id]");
    const goToTopButton = document.getElementById("goToTop");
    links.forEach((link) => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
      let scrollY = window.pageYOffset;
      if (scrollY > 200) {
        goToTopButton.classList.remove("hidden");
      } else {
        goToTopButton.classList.add("hidden");
      }
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 130;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
        }
      });
    }
    goToTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
