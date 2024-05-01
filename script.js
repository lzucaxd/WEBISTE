document.addEventListener('DOMContentLoaded', function() {
    fetchProjects();

    function fetchProjects() {
        fetch('https://api.github.com/users/lzucaxd/repos')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('project-list');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'col-md-4 mb-3';
                projectElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.log('Error loading projects:', error));
    }
});
