document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();

    function fetchProjects() {
        fetch('https://api.github.com/users/<your-username>/repos')
            .then(response => response.json())
            .then(data => displayProjects(data))
            .catch(error => console.error('Failed to fetch projects:', error));
    }

    function displayProjects(projects) {
        const projectsContainer = document.getElementById('project-list');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-sm-12 col-md-6 col-lg-4 mb-4';
            projectCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description || 'No description available'}</p>
                        <a href="${project.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
});
