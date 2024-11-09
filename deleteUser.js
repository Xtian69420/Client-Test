function DelUser(event) {
    event.preventDefault();

    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

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
    })
    .finally(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
}

document.getElementById('delete-user-form').addEventListener('submit', DelUser);