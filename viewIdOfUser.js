function DisplayID(event) {
    event.preventDefault();

    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    const userId = document.getElementById('display-id').value;
    console.log('userId:', userId);

    fetch(`https://betcha-booking-api-master.onrender.com/User/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log('data:', data); 

            if (data && data.data) {
                console.log('data.data:', data.data); 
                
                if (data.data.IdImage && data.data.IdImage.filename) {
                    const imageUrl = `/uploads/${data.data.IdImage.filename}`;
                    const fullImageUrl = `https://betcha-booking-api-master.onrender.com${imageUrl}`;
                    console.log('Full Image URL:', fullImageUrl);

                    document.getElementById('image-link').src = fullImageUrl;
                    document.getElementById('image-link').style.display = 'block';
                } else {
                    console.log('Image not found in IdImage');
                    alert('Image not found for this user.');
                }
            } else {
                console.log('data or data.data is undefined or null');
                alert('User data not found.');
            }
        })
        .catch(error => {
            console.error('Error during fetch:', error);
            alert('Failed to retrieve image.');
        })
        .finally(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });
}

document.getElementById('display-id-form').addEventListener('submit', DisplayID);
