const images = [
    { name: 'image1', src: 'images/download (1).jpg' },
    { name: 'image2', src: 'images/download (2).jpg' },
    { name: 'image3', src: 'images/download (3).jpg' },
    { name: 'image4', src: 'images/download (4).jpg' },
    { name: 'image1', src: 'images/download (5).jpg' },
    { name: 'image2', src: 'images/download (6).jpg' },
    { name: 'image3', src: 'images/download.jpg' },
    { name: 'image4', src: 'images/html semantic tags.jpg' },
    { name: 'image1', src: 'images/Media Query.jpg' },
    { name: 'image2', src: 'images/HTML Tags.jpg' },
    { name: 'image3', src: 'images/HTML and CSS Example.jpg' },
    { name: 'image4', src: 'images/download (4).jpg' },
    // Add more image objects here
];

window.onload = () => {
    displayImages(images);
};

function displayImages(imageList) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';
    imageList.forEach(image => {
        const imgCard = document.createElement('div');
        imgCard.className = 'image-card';
        imgCard.innerHTML = `<img src="${image.src}" alt="${image.name}"><p>${image.name}</p>`;
        gallery.appendChild(imgCard);
    });
}

function searchImages() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredImages = images.filter(image => image.name.toLowerCase().includes(query));
    displayImages(filteredImages);
}

function resetSearch() {
    document.getElementById('search-input').value = '';
    displayImages(images);
}
