// Extract the project ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Elements to update
const projectNameEl = document.getElementById("project-name");
const techStackEl = document.getElementById("tech-stack");
const descriptionListEl = document.getElementById("description-list");
const projectImageEl = document.getElementById("project-image");

// Fetch project details from the JSON file
async function fetchProjectDetails() {
    try {
        const response = await fetch("projects.json");
        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);

        if (project) {
            // Update the page content with project details
            projectNameEl.textContent = project.name;
            techStackEl.textContent = project.tech_stack.join(", ");
            descriptionListEl.innerHTML = project.description
                .map(point => `<li>${point}</li>`)
                .join("");

            // Update project image
            if (project.image_url) {
                projectImageEl.src = project.image_url;
                projectImageEl.alt = project.name;
                projectImageEl.style.display = "block"; // Show the image
            }
        } else {
            projectNameEl.textContent = "Project not found";
            techStackEl.textContent = "";
            descriptionListEl.innerHTML = "";
        }
    } catch (error) {
        console.error("Error fetching project details:", error);
        projectNameEl.textContent = "Error loading project details";
    }
}

// Load project details on page load
fetchProjectDetails();
