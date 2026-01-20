fetch("/gallery.json")
	.then((response) => response.json())
	.then((bikesGallery) => {
		renderGallery(bikesGallery);
	})
	.catch((error) => {
		console.error("Chyba při načítání galerie:", error);
	});

function renderGallery(bikesGallery) {
	const container = document.querySelector(".gallery-grid");
	const brands = ["Honda", "Suzuki", "Kawasaki", "Yamaha"];

	brands.forEach((brand) => {
		const row = document.createElement("div");
		row.className = "brand-row";

		for (let i = 0; i < bikesGallery.length; i++) {
			const bike = bikesGallery[i];

			if (bike.brand !== brand) continue;

			const label = document.createElement("div");
			label.className = "gallery-label";

			const img = document.createElement("img");
			img.src = bike.imgUrl;
			img.alt = `${bike.brand} ${bike.model}`;

			const caption = document.createElement("span");
			caption.className = "img-caption";
			caption.textContent = `${bike.brand} ${bike.model}`;

			const likeButton = document.createElement("div");
			likeButton.className = "like-button";

			const likeIcon = document.createElement("img");
			likeIcon.src = "/pics/thumbs-up.svg";
			likeIcon.alt = "Like";

			const likeCount = document.createElement("span");
			likeCount.textContent = "0";

			let likes = 0;
			likeButton.addEventListener("click", () => {
				likes++;
				likeCount.textContent = likes;
			});

			const modal = document.querySelector(".modal");
			const modalImg = document.querySelector(".modal-img");
			const modalCaption = document.querySelector(".modal-caption");
			const modalClose = document.querySelector(".modal-close");

			img.addEventListener("click", () => {
				modal.style.display = "flex";
				modalImg.src = img.src;
				modalCaption.textContent = img.alt;
			});

			img.addEventListener("click", () => {
				document.body.classList.add("modal-open");
				modal.style.display = "flex";
				modalImg.src = img.src;
				modalCaption.textContent = img.alt;
			});

			modalClose.addEventListener("click", () => {
				modal.style.display = "none";
				document.body.classList.remove("modal-open");
			});

			modal.addEventListener("click", (e) => {
				if (e.target === modal) {
					modal.style.display = "none";
					document.body.classList.remove("modal-open");
				}
			});

			modalClose.addEventListener("click", () => {
				modal.style.display = "none";
			});

			modal.addEventListener("click", (e) => {
				if (e.target === modal) {
					modal.style.display = "none";
				}
			});

			label.append(img);
			label.append(caption);
			row.append(label);
			likeButton.append(likeIcon);
			likeButton.append(likeCount);
			label.append(likeButton);
		}
		container.append(row);
	});

	bikesGallery.forEach((bike, index) => {
		console.log("Index:", index);
		console.log("Bike object:", bike);
		console.log("Brand:", bike.brand);
		console.log("Image URL:", bike.imgUrl);
	});
}
