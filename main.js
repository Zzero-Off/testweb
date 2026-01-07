document.addEventListener("DOMContentLoaded", () => {
	const likeButtons = document.querySelectorAll(".like-button");

	for (const btn of likeButtons) {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			const countSpan = btn.querySelector(".like-count");
			let count = parseInt(countSpan.innerText, 10);
			count +=1;
			countSpan.innerText = count;
		});
	}
});
