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