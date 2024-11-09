function LoginButton(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const loginData = {
        email: email,
        password: password
    };

    console.log('Data:', JSON.stringify(loginData));  // Log to verify form data

    fetch('https://betcha-booking-api-master.onrender.com/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)  
    })
    .then(response => {
        console.log('Response Status:', response.status);  // Check status code
        if (response.status === 400) {
            return response.json().then(errorData => {
                throw new Error(errorData.message);
            });
        }

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(data => {
        console.log('Login successful:', data);
        alert('Login successful: userId = ' + data.userId);
    })
    .catch(error => {
        console.error('Error during fetch:', error);
        alert('Failed to login: ' + 'Incorrect Credentials');
    });
}

document.getElementById('login-form').addEventListener('submit', LoginButton);
