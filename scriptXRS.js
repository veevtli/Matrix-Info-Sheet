const buttons =
		document.querySelectorAll(".collapsible");

		buttons.forEach(button => {

    		button.addEventListener("click", () => {

        		const content =
        		button.nextElementSibling;

        		document.querySelectorAll(".content")
        		.forEach(section => {

            		if (section !== content) {

                		section.style.maxHeight = null;
            		}
        		});

        		if (content.style.maxHeight) {

            		content.style.maxHeight = null;

        		} else {

            		content.style.maxHeight =
            		content.scrollHeight + "px";
        		}

    		});

		});

  // 1. Define your list of images
  const images = [
    "images/front.jpg", 
    "images/side.jpg", 
    "images/rear.jpg",
	"images/int.jpg",
	"images/dash.jpg"
  ];
  
  let currentIndex = 0;
  
  // 2. Grab the DOM elements
  const imageElement = document.getElementById('matrix-image');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  
  // 3. Function to update the image
  function updateImage() {
    imageElement.src = images[currentIndex];
  }
  
  // 4. Event Listeners for the buttons
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // Loop back to the first image
    }
    updateImage();
  });
  
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // Loop to the last image
    }
    updateImage();
  });

let currentIndex = 0; 

function updateCarousel() {
    const imageElement = document.getElementById('carousel-img');
}

const buttons =
		document.querySelectorAll(".collapsible");

		buttons.forEach(button => {

    		button.addEventListener("click", () => {

        		const content =
        		button.nextElementSibling;

        		document.querySelectorAll(".content")
        		.forEach(section => {

            		if (section !== content) {

                		section.style.maxHeight = null;
            		}
        		});

        		if (content.style.maxHeight) {

            		content.style.maxHeight = null;

        		} else {

            		content.style.maxHeight =
            		content.scrollHeight + "px";
        		}

    		});

		});

    
const images = [

    		"images/front.jpg",

    		"images/side.jpg",

    		"images/rear.jpg",

			"images/int.jpg",

			"images/dash.jpg"

		];

		let current = 0;

		const carouselImage =
		document.getElementById("carousel-image");

		function changeImage() {

    		carouselImage.style.opacity = 0;

    		setTimeout(() => {

        		carouselImage.src = images[current];

        		carouselImage.style.opacity = 1;

    		}, 300);
		}

		document.querySelector(".next")
		.addEventListener("click", () => {

    		current++;

    			if (current >= images.length) {

        		current = 0;
    		}

    	changeImage();
		});

		document.querySelector(".prev")
		.addEventListener("click", () => {

    		current--;

    		if (current < 0) {

        		current = images.length - 1;
    		}

    		changeImage();
		});

let currentIndex = 0; 

function updateCarousel() {
    const imageElement = document.getElementById('carousel-img');
}

updateCarousel();