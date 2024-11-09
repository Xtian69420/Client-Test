function DisplayInfo(event) {
    event.preventDefault();

    const userId = document.getElementById('display-userid').value;

    fetch(`https://betcha-booking-api-master.onrender.com/User/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                const user = data.data; // Extract user data

                // Display email
                document.getElementById('user-email').textContent = `Email: ${user.email}`;

                // Display name (First and Last Name)
                const fullName = `${user.firstName} ${user.lastName}`;
                document.getElementById('user-name').textContent = `Name: ${fullName}`;

                // Display password (typically you should not display passwords in plain text)
                document.getElementById('user-password').textContent = `Password: ${user.password}`;

                // Display phone number
                document.getElementById('user-phone').textContent = `Phone Number: ${user.phoneNumber}`;
            } else {
                alert('User not found or missing data.');
            }
        })
        .catch(error => {
            console.error('Error during display:', error);
            alert('Failed to display user info: ' + error.message);
        });
}

document.getElementById('display-user-form').addEventListener('submit', DisplayInfo);
