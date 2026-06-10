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

let currentIndex = 0;
let isTransitioning = false; // The safety lock

function changeImage(direction) {
  // If we are already mid-fade, ignore any incoming clicks
  if (isTransitioning) return;
  
  const imgElement = document.getElementById("matrix-image");
  if (!imgElement) return; // Safety check in case ID is wrong

  // Lock the button
  isTransitioning = true;

  // 1. Start the fade out
  imgElement.classList.add("fade-out");

  // 2. Wait 400ms for CSS transition to finish
  setTimeout(() => {
    // Update index
    if (direction === 'next') {
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
    } else if (direction === 'prev') {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
    }

    // 3. Swap source while hidden
    imgElement.src = images[currentIndex];

    // 4. Fade back in
    imgElement.classList.remove("fade-out");

    // 5. Unlock the button after fade-in completes
    setTimeout(() => {
      isTransitioning = false;
    }, 400);

  }, 400); 
}