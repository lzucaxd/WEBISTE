document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();

    function fetchProjects() {
        const username = '<lzucaxd>'; // Replace this with your GitHub username
        const url = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    document.getElementById('project-list').innerHTML = '<p>No projects found.</p>';
                } else {
                    displayProjects(data);
                }
            })
            .catch(error => console.error('Error fetching projects:', error));
    }

    function displayProjects(projects) {
        const projectsContainer = document.getElementById('project-list');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-md-4 mb-3';
            projectCard.innerHTML = `
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description || 'No description available.'}</p>
                        <a href="${project.html_url}" target="_blank" class="btn btn-outline-light">View on GitHub</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
});
