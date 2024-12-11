document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active navigation link based on the current page
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Handle project card click navigation
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            if (projectId) {
                // Navigate to project.html with the project ID as a URL parameter
                window.location.href = `project.html?id=${projectId}`;
            }
        });
    });
});
