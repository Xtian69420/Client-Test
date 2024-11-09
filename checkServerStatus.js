// checkServerStatus.js
function checkServerStatus() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Perform the GET request to /ping
    fetch('https://betcha-booking-api-master.onrender.com/ping')
        .then(response => {
            if (!response.ok) { // Check if the response is not OK (e.g., 404 or 500)
                throw new Error('Server is down');
            }

            // Check if the response is JSON
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();  // Parse as JSON if it's JSON
            } else {
                return response.text();  // Otherwise, treat it as plain text
            }
        })
        .then(data => {
            if (typeof data === 'string' && data === "Server is alive!") {
                alert('Server is alive!');
                document.getElementById('loader').style.display = 'none'; // Hide loader
                document.getElementById('overlay').style.display = 'none'; // Hide overlay
            } else {
                console.log('Unexpected server response:', data);
                setTimeout(checkServerStatus, 5000);  // Retry after 5 seconds if response is not expected
            }
        })
        .catch(error => {
            console.log('Error checking server status:', error);
            setTimeout(checkServerStatus, 5000);  // Retry after 5 seconds if there's an error
        });
}

// Ensure that the function runs when the page loads
window.onload = function() {
    checkServerStatus();
};
