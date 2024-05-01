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
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
   
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
