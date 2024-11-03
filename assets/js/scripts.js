document.addEventListener('DOMContentLoaded', function () {

    hljs.highlightAll();

    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll("section[id]"); // Get all sections that have an ID defined
    const goToTopButton = document.getElementById('goToTop');

    // Smooth scroll for anchor links
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100; // Adjust this value if your header height changes
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        // Get current scroll position
        let scrollY = window.pageYOffset;

        // Show or hide the "Go to Top" button
        if (scrollY > 200) {
            goToTopButton.classList.remove('hidden');
        } else {
            goToTopButton.classList.add('hidden');
        }

        // Loop through sections to get height, top and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 130; // Adjust for sticky header
            const sectionId = current.getAttribute("id");

            // If our current scroll position enters the space where current section is, add .active class to corresponding navigation link, else remove it
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }

    // Add click event to "Go to Top" button
    goToTopButton.addEventListener('click', function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});