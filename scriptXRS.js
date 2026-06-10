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

function changeImage(direction) {
  const imgElement = document.getElementById("matrix-image");

  // 1. Start the fade out
  imgElement.classList.add("fade-out");

  // 2. Wait for the fade-out animation to finish (400ms)
  setTimeout(() => {
    // Update the index based on clicking Next or Previous
    if (direction === 'next') {
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
    } else if (direction === 'prev') {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
    }

    // 3. Swap the image source while it's invisible
    imgElement.src = images[currentIndex];

    // 4. Fade it back in
    imgElement.classList.remove("fade-out");
  }, 400); 
}