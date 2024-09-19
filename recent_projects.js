
// Array of projects
const projects = [
  {
    title: "Poker Wizard VisionOS",
    description: "Created a VR project for Apple Vision Pro; received 33 downloads & 5-star reviews on the Apple Store.",
    tools: "Swift, VisionOS",
    link: "https://apps.apple.com/us/app/poker-wizards/id6642685724?platform=vision"
  },
  {
    title: "Mychef",
    description: "Created a personalized meal delivery app using React.js; won the Most Innovative Idea Award.",
    tools: "React.js, Node.js",
    link: "https://devpost.com/software/mychef-yo1d4j"
  },
  {
    title: "Machine Learning for Visual Localization",
    description: "Improved visual localization for autonomous cars and AR devices, increasing accuracy by 20%.",
    tools: "Python, PyTorch",
    link: "#"
  }
];

// Global variables to track which projects are currently displayed
let displayedProjects = 1; // Start by displaying the most recent project
const projectsToShow = 1; // Number of projects to load per click

// Function to create project HTML
function createProjectHTML(project) {
  return `
    <div class="card medium">
      <div class="card-content">
        <span class="card-title activator teal-text hoverline">${project.title}</span>
        <p>${project.description}</p>
        <ul>
          <li>Tools: ${project.tools}</li>
        </ul>
        <div class="card-action">
          <a href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
            <i class="fa fa-external-link"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Function to load projects
function loadProjects() {
  const container = document.getElementById('projects-container');
  const end = displayedProjects + projectsToShow;
  for (let i = displayedProjects; i < end && i < projects.length; i++) {
    container.innerHTML += createProjectHTML(projects[i]);
  }
  displayedProjects = end;
  
  // Hide "Load More" button if no more projects to load
  if (displayedProjects >= projects.length) {
    document.getElementById('load-more-btn').style.display = 'none';
  }
}

// Load initial projects when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadProjects(); // Load the first project

  // Event listener for "Load More" button
  document.getElementById('load-more-btn').addEventListener('click', loadProjects);
});
