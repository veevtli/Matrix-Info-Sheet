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

  // 1. List all the image paths you want to cycle through
  const images = [
    "images/front.jpg",
    "images/side.jpg",
    "images/rear.jpg",
    "images/int.jpg",
	"images/dash.jpg"
  ];

  // 2. Start at the first image (index 0)
  let currentIndex = 0;

  function nextImage() {
    // Move to the next index
    currentIndex++;

    // If we reach the end of the array, loop back to the beginning
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    // Update the image src on the page
    document.getElementById("matrix-image").src = images[currentIndex];
  }

  function prevImage() {
  currentIndex--;
  
  // If we go past the beginning, loop to the last image
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  
  document.getElementById("matrix-image").src = images[currentIndex];
}