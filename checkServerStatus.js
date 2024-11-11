function checkServerStatus() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    fetch('https://betcha-booking-api-master.onrender.com/ping')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Server is down');
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();  
            } else {
                return response.text(); 
            }
        })
        .then(data => {
            if (typeof data === 'string' && data === "Server is alive!") {
                alert('Server is alive!');
                document.getElementById('loader').style.display = 'none'; 
                document.getElementById('overlay').style.display = 'none'; 
            } else {
                console.log('Unexpected server response:', data);
                setTimeout(checkServerStatus, 5000); 
            }
        })
        .catch(error => {
            console.log('Error checking server status:', error);
            setTimeout(checkServerStatus, 5000); 
        });
}

window.onload = function() {
    checkServerStatus();
};
