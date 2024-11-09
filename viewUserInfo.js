function DisplayInfo(event) {
    event.preventDefault();

    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    const userId = document.getElementById('display-userid').value;

    fetch(`https://betcha-booking-api-master.onrender.com/User/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                const user = data.data; 
                document.getElementById('user-email').textContent = `Email: ${user.email}`;

                const fullName = `${user.firstName} ${user.lastName}`;
                document.getElementById('user-name').textContent = `Name: ${fullName}`;

                document.getElementById('user-password').textContent = `Password: ${user.password}`;

                document.getElementById('user-phone').textContent = `Phone Number: ${user.phoneNumber}`;
            } else {
                alert('User not found or missing data.');
            }
        })
        .catch(error => {
            console.error('Error during display:', error);
            alert('Failed to display user info: ' + error.message);
        })
        .finally(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });
}

document.getElementById('display-user-form').addEventListener('submit', DisplayInfo);
