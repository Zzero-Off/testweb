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
});
