class BikeCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: `open` });
		this.likes = 0;
	}

	connectedCallback() {
		const brand = this.getAttribute(`brand`) || ``;
		const model = this.getAttribute(`model`) || ``;
		const img = this.getAttribute(`img`) || ``;

		this.shadowRoot.innerHTML = `
			<style>
				.gallery-label {
					position: relative;
					text-align: center;
					overflow: hidden;
					aspect-ratio: 4 / 3;
				}
				.gallery-label:hover {
					transform: scale(1.2);
					transition: 0.7s ease;
					z-index: 1;
					cursor: pointer;
				}	
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					display: block;
					border-radius: 10px;
				}	
				.img-caption {
					padding: 0.4rem;
					color: rgb(255, 255, 255);
					text-align: center;
					background: transparent;
					position: absolute;
					left: 0;
					bottom: 0;
					width: calc(100% - 40px);
					text-overflow: ellipsis;
				}
				.like-button {
					display: flex;
					position: absolute;
					align-items: center;
					bottom: 4px;
					right: 4px;
					text-decoration: none;
					color: white;
					border-radius: 3px;
					gap: 4px;
				}
				.like-button:hover {
					background-color: rgb(46, 220, 46);
				}
				.like-button img {
					width: 20px;
					height: 20px;
					filter: invert(1);
				}
			</style>
			
			<div class="gallery-label">
				<img src="${img}" alt="${brand} ${model}">
				<span class="img-caption">${brand} ${model}</span>
				<div class="like-button" id="like-btn">
					<img src="/pics/thumbs-up.svg" alt="Like">
					<span id="like-count">0</span>
				</div>
			</div>
		`;

		const btn = this.shadowRoot.querySelector(".like-button");
		const count = this.shadowRoot.querySelector("#like-count");

		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			this.likes++;
			count.textContent = this.likes;
		});

		const imageElement = this.shadowRoot.querySelector(`img`);

		imageElement.addEventListener(`click`, () => {
			const modal = document.querySelector(".modal");
			const modalImg = document.querySelector(".modal-img");
			const modalCaption = document.querySelector(".modal-caption");
			const modalClose = document.querySelector(".modal-close");

			modalClose.addEventListener("click", () => {
				modal.style.display = "none";

				document.body.classList.remove("modal-open");
			});

			if (modal && modalImg) {
				modalImg.src = img;
				modalCaption.textContent = `${brand} ${model}`;

				modal.style.display = "flex";
				document.body.classList.add("modal-open");
			}
		});
	}
}

customElements.define("bike-card", BikeCard);

fetch("/gallery.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
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

		bikesGallery.forEach((bike) => {
			if (bike.brand === brand) {
				const card = document.createElement("bike-card");

				card.setAttribute("brand", bike.brand);
				card.setAttribute("model", bike.model);
				card.setAttribute("img", bike.imgUrl);
				row.append(card);
			}
		});
		container.append(row);
	});
}

document.querySelector(".modal-close").addEventListener("click", () => {
	document.querySelector(".modal").style.display = "none";
});
