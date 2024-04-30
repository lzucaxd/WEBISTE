document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();

    function fetchProjects() {
        const username = 'lzucaxd'; // Replace this with your GitHub username
        const url = `https://api.github.com/users/${username}/repos?sort=pushed`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => displayProjects(data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                document.getElementById('project-list').innerHTML = '<p class="text-danger">Failed to load projects. Please check the console for more information.</p>';
            });
    }

    function displayProjects(projects) {
        const projectsContainer = document.getElementById('project-list');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-md-4 mb-3';
            projectElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-body
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description || 'No description available.'}</p>
                        <a href="${project.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });

        // Optionally, handle empty projects list
        if (projects.length === 0) {
            projectsContainer.innerHTML = '<p class="text-center">No projects found.</p>';
        }
    }
});
