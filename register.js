function RegisterButton(event) {
    event.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    const firstName = document.getElementById('register-firstname').value;
    const middleInitial = document.getElementById('register-middleinitial').value;
    const lastName = document.getElementById('register-lastname').value;
    const image = document.getElementById('register-image').files[0];

    const registerData = new FormData();
    registerData.append('email', email);
    registerData.append('password', password);
    registerData.append('phoneNumber', phone);
    registerData.append('firstName', firstName);

    // Conditionally append middleInitial only if it's not null or empty
    if (middleInitial) {
        registerData.append('middleInitial', middleInitial);
    }

    registerData.append('lastName', lastName);
    registerData.append('IdImage', image);

    // Log FormData for debugging
    for (let [key, value] of registerData.entries()) {
        console.log(`${key}: ${value}`);
    }

    fetch('https://betcha-booking-api-master.onrender.com/Register', {
        method: 'POST',
        body: registerData
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful: ' + data.message);
    })
    .catch(error => {
        console.error('Error during registration:', error);
        alert('Failed to register: ' + error.message);
        console.log(error); // To see the full error object
    });
}

document.getElementById('register-form').addEventListener('submit', RegisterButton);