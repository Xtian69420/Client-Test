function LoginButton(event) {
    event.preventDefault();

    // Show the loader
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const loginData = {
        email: email,
        password: password
    };
    console.log('Data:', JSON.stringify(loginData)); 

    fetch('https://betcha-booking-api-master.onrender.com/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)  
    })
    .then(response => {
        console.log('Response Status:', response.status); 
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
        document.getElementById('_USERID').textContent = `User ID: ` + `${data.userId}`;
    })
    .catch(error => {
        console.error('Error during fetch:', error);
        alert('Failed to login: ' + 'Incorrect Credentials');
    })
    .finally(() => {
        // Hide the loader once the request is finished
        document.getElementById('loader').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
}

document.getElementById('login-form').addEventListener('submit', LoginButton);