// Select all sections
const sections = document.querySelectorAll("section");

// Function to check if section is in viewport
function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom && sectionTop > 0 - section.offsetHeight) {
            // Section is within the viewport, show it
            section.classList.add("show");
        } else {
            // Section is out of viewport (either above or below), hide it
            section.classList.remove("show");
        }
    });
}

// Run on scroll
window.addEventListener("scroll", checkSections);

// Run on page load
window.addEventListener("load", checkSections);