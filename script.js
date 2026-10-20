/* 
    Assignment: Frame
    1. Pick a free, public API (e.g. NASA, Dog API, PokéAPI, etc.)
    2. In getData(), use fetch() to fetch data from the API
    3. Insert 10+ li elements into the .frame element 
*/

const frame = document.querySelector('.frame');
let currentItem = 0;
let totalItems = 15; // change this if you do more than 10 items

async function getData() {

    // Fetch 15 random dog images from the API
    const response = await fetch('https://dog.ceo/api/breeds/image/random/15');

    // Convert the response into JSON
    const data = await response.json();

    // Get the array of dog image URLs
    const dogImages = data.message;

    // Create a list item for each dog image
    for (let i = 0; i < dogImages.length; i++) {
        // Create a new li element
        const li = document.createElement('li');
        // Create an image element 
        const img = document.createElement('img');
        // Set the image source to the dog image URL
        img.src = dogImages[i];
        // Add the image to the list item
        li.appendChild(img);

        // Make the first image visible when the page loads
        if (i === 0) {
            li.classList.add('active');
        }

        // Add the list item to the frame
        frame.appendChild(li);
    }

}

function goToItem(index) {
    const items = frame.querySelectorAll('li');
    items[currentItem].classList.remove('active');
    currentItem = index;
    items[currentItem].classList.add('active');
}

frame.addEventListener('click', function () {
    const nextItem = (currentItem + 1) % totalItems;
    goToItem(nextItem);
});

getData();