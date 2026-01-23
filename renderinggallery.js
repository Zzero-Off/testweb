class Gallery {
	constructor() {
		this.container = document.querySelector(".gallery-grid");
		this.brands = ["Honda", "Suzuki", "Kawasaki", "Yamaha"];

		this.modal = document.querySelector(".modal");
		this.modalImg = document.querySelector(".modal-img");
		this.modalCaption = document.querySelector(".modal-caption");
		this.modalClose = document.querySelector(".modal-close");

		this.loadData();
	}

	loadData() {
		fetch("/gallery.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((bikesGallery) => {
				this.renderGallery(bikesGallery);
			})
			.catch((error) => {
				console.error("Chyba při načítání galerie:", error);
			});
	}

	renderGallery(bikesGallery) {
		this.brands.forEach((brand) => {
			const row = document.createElement("div");
			row.className = "brand-row";

			bikesGallery.forEach((bike) => {
				if (bike.brand !== brand) return;

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

				const likeCount = document.createElement("span");
				likeCount.textContent = "0";

				let likes = 0;
				likeButton.addEventListener("click", () => {
					likes++;
					likeCount.textContent = likes;
				});

				img.addEventListener("click", () => {
					this.openModal(img.src, img.alt);
				});

				likeButton.append(likeIcon, likeCount);
				label.append(img, caption, likeButton);
				row.append(label);
			});

			this.container.append(row);
		});

		this.initModal();
	}

	initModal() {
		this.modalClose.addEventListener("click", () => {
			this.closeModal();
		});

		this.modal.addEventListener("click", (e) => {
			if (e.target === this.modal) {
				this.closeModal();
			}
		});
	}

	openModal(src, caption) {
		this.modal.style.display = "flex";
		this.modalImg.src = src;
		this.modalCaption.textContent = caption;
		document.body.classList.add("modal-open");
	}

	closeModal() {
		this.modal.style.display = "none";
		document.body.classList.remove("modal-open");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new Gallery();
});
