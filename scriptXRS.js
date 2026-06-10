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