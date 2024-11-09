function DelUser(event) {
    event.preventDefault();

    const userId = document.getElementById('delete-userid').value;

    fetch(`https://betcha-booking-api-master.onrender.com/deleteUser/${userId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        alert('User deleted successfully');
    })
    .catch(error => {
        console.error('Error during delete:', error);
        alert('Failed to delete user: ' + error.message);
    });
}

document.getElementById('delete-user-form').addEventListener('submit', DelUser);