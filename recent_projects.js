// Array of projects
const projects = [
  {
    title: "Poker Wizard VisionOS",
    description: "Created a VR project for Apple Vision Pro; received 33 downloads & 5-star reviews on the Apple Store.",
    image: "/assets/img/project-poker-wizard.png",
    accomplishments: [
      "Self-learned Swift, UI design, and VR development",
      "Tools: Swift, VisionOS",
      "Downloads: 33"
    ],
    link: "https://apps.apple.com/us/app/poker-wizards/id6642685724?platform=vision",
    date: "September 2024"
  },
  {
    title: "Mychef",
    description: "Created a personalized meal delivery app using React.js; won the Most Innovative Idea Award.",
    image: "/assets/img/project-mychef.png",
    accomplishments: [
      "Collaborated with a team of 4 to build scalable backend architecture",
      "Tools: React.js, Node.js"
    ],
    link: "https://devpost.com/software/mychef-yo1d4j",
    date: "March 2022"
  }
];

// Sort projects by date in descending order
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Global variables to track which projects are currently displayed
let displayedProjects = 0; // Start by displaying no projects initially
const projectsToShow = 1;  // Number of projects to load per click

// Function to create project HTML with image and accomplishments
function createProjectHTML(project) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title} project" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
          <p><strong>Completed:</strong> ${project.date}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Accomplishments<i class="mdi-navigation-close right"></i></span>
          <ul>
            ${project.accomplishments.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <div class="card-action">
            <a href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
              <i class="fa fa-external-link"></i>
            </a>
          </div>
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
  loadProjects();  // Load the first project
  
  // Add event listener for the "Load More" button
  document.getElementById('load-more-btn').addEventListener('click', loadProjects);
});
