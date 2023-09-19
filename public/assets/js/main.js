
//Developed by Tsundzukani Mabunda

// The following code is to cosume the endpoint but it throw a Cors Origin error for which it has to be fixed on the API side and for progress 
// sake I decided to put the json data as Text

let jsonResponse = null;
// Make a GET request to the JSON endpoint
fetch(endpointUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((jsonResponse) => {
    // jsonResponse is the parsed JSON data
    console.log(jsonResponse);
	jsonResponse = jsonResponse; 
    // You can now use the JSON data as needed
    // For example, if jsonResponse is an array, you can iterate through it
    for (const item of jsonResponse) {
      console.log(item);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


// Select DOM elements
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const slides = document.querySelectorAll('.slide');
const slideshowContainer = document.querySelector('.slider-container');
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggleMobile = document.querySelector('#menu-toggle');

// Add event listener to toggle the desktop menu
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

// Function to toggle the mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Add event listener to toggle the mobile menu
menuToggleMobile.addEventListener('click', toggleMobileMenu);

// JSON data (replace with your actual data)
 jsonResponse = [{"imageUrl":"https:\/\/d2vcaowhp5v7jq.cloudfront.net\/olympian.jpeg","description":"The only athlete in the world to do her Olympic routine in 2020","title":"The Olympian"},{"imageUrl":"https:\/\/d2vcaowhp5v7jq.cloudfront.net\/dragon.jpeg","description":"Grow your savings treasure and grow your dragon.","title":"The Savings Jar"},{"imageUrl":"https:\/\/d2vcaowhp5v7jq.cloudfront.net\/skhokho.jpeg","description":"Helping South Africans become #CashCleva with Skhokho and TymeBank","title":"Skhokho seMali"}];

let currentIndex = 0;

// Function to update the slider with JSON data
function updateSlider() {
    for (let i = 0; i < slides.length; i++) {
        const item = jsonResponse[(i + currentIndex) % jsonResponse.length];
        const slide = slides[i];
        const img = slide.querySelector('img');
        const h2 = slide.querySelector('h2');
        const p = slide.querySelector('p');
        img.src = item.imageUrl;
        img.alt = item.title;
        h2.textContent = item.title;
        p.textContent = item.description;
    }
}

// Function to slide the content to the left
function slideToLeft() {
    currentIndex = (currentIndex - 1 + jsonResponse.length) % jsonResponse.length;
	//slides.style.transform = `translateX(-${currentIndex * slides.offsetWidth}px)`;
    
    updateSlider();
}

// Start the slideshow with an interval of 5 seconds (5000 milliseconds)
let slideInterval = setInterval(slideToLeft, 5000);


// Pause the slideshow on hover
slideshowContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume the slideshow on mouse leave
slideshowContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(slideToLeft, 5000);
});

// Initialize the slider
updateSlider();
