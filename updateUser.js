function UpdateButton(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const updatedData = {
        email: document.getElementById('edit-email').value,
        password: document.getElementById('edit-password').value,
        phoneNumber: document.getElementById('edit-phone').value,
        firstName: document.getElementById('edit-firstname').value,
        middleInitial: document.getElementById('edit-middleinitial').value,
        lastName: document.getElementById('edit-lastname').value,
    };
    console.log(userId);
    fetch(`https://betcha-booking-api-master.onrender.com/updateUser/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        alert('User updated successfully');
    })
    .catch(error => {
        console.error('Error during update:', error);
        alert('Failed to update user: ' + error.message);
    });
}

document.getElementById('edit-user-form').addEventListener('submit', UpdateButton);