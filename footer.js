
    document.getElementById('form_container').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var drone = document.querySelector('input[name="drone"]:checked').value;

        // Store data only if all fields are filled
        if (email && name && drone) {
            var formData = {
                email: email,
                name: name,
                drone: drone
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            
            // Display tooltip
            var tooltip = document.createElement('div');
            tooltip.textContent = 'Thanks for subscribing';
            tooltip.classList.add('tooltip');
            document.getElementById('submit').appendChild(tooltip);

            // Hide tooltip after 3 seconds
            setTimeout(function() {
                tooltip.style.opacity = '0';
            }, 3000);

            // Remove tooltip after transition
            setTimeout(function() {
                tooltip.remove();
            }, 3300);

            // Reset form
            document.getElementById('form_container').reset();
        }
    });

