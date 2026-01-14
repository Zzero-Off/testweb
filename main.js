document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".js-gallery-image");

    for (const img of galleryImages) {
        img.addEventListener("click", () => {
            alert("^_^");
        });
    }

	const likeButtons = document.querySelectorAll(".js-like-button");

	for (const btn of likeButtons) {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			const countSpan = btn.querySelector(".js-like-count");
			let count = parseInt(countSpan.innerText, 10);

			if (isNaN(count)) {
				count = 0;
			}
			
			count ++;
			countSpan.innerText = count;
		});
	}

		const totalCountElement = document.querySelector(".js-total-count");
		
		let cookiesArray = document.cookie.split(";");
		let visitsCookie = cookiesArray.find(cookie => cookie.startsWith("visits"));
		let numberOfVisits;
				
			if (visitsCookie) {
				numberOfVisits = Number(visitsCookie.split("=")[1]) + 1;
			} else {
				numberOfVisits = 1;
			}

			document.cookie = "visit" + numberOfVisits + "; path=/";

			totalCountElement.textContent = numberOfVisits;

	
});
