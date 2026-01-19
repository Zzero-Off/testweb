const bikesGallery = [
	{ brand: "Honda", model: "CBR Repsol", imgUrl: "pics/moto-gallery/honda-cbr-repsol.jpg"},
	{ brand: "Honda", model: "CBR 1000RR",	imgUrl: "pics/moto-gallery/honda-CBR1000rr.jpeg"},
	{ brand: "Honda", model: "Hornet", imgUrl: "pics/moto-gallery/honda-hornet.jpg"},
	{ brand: "Honda", model: "Rebel", imgUrl: "pics/moto-gallery/honda-rebel.jpeg"},
	{ brand: "Honda", model: "XL750 Transalp", imgUrl: "pics/moto-gallery/honda-xl750-transalp.jpeg"},

	{ brand: "Suzuki", model: "Hayabusa", imgUrl: "pics/moto-gallery/suzuki-hayabusa.jpg"},
	{ brand: "Suzuki", model: "Intruder", imgUrl: "pics/moto-gallery/suzuki-intruder.jpg"},
	{ brand: "Suzuki", model: "V-Strom", imgUrl: "pics/moto-gallery/suzuki-v-strom.jpeg"},
	{ brand: "Suzuki", model: "SV650", imgUrl: "pics/moto-gallery/suzuki-sv650.jpg"},
	{ brand: "Suzuki", model: "GSX-S", imgUrl: "pics/moto-gallery/suzuki-gsx-s.jpg"},

	{ brand: "Kawasaki", model: "Z900", imgUrl: "pics/moto-gallery/kawasaki-z900.jpg"},
	{ brand: "Kawasaki", model: "Versys X300", imgUrl: "pics/moto-gallery/kawasaki-versys-x300.jpeg"},
	{ brand: "Kawasaki", model: "Vulcan-S", imgUrl: "pics/moto-gallery/kawasaki-vulcan-s.jpg"},
	{ brand: "Kawasaki", model: "KX", imgUrl: "pics/moto-gallery/kawasaki-kx.jpg"},
	{ brand: "Kawasaki", model: "H2R", imgUrl: "pics/moto-gallery/kawasaki-h2r.jpg"},
	
	{ brand: "Yamaha", model: "MT-09", imgUrl: "pics/moto-gallery/yamaha-mt-09.jpg"},
	{ brand: "Yamaha", model: "XSR", imgUrl: "pics/moto-gallery/yamaha-xsr.jpg"},
	{ brand: "Yamaha", model: "Dragstar", imgUrl: "pics/moto-gallery/yamaha-xvs-dragstar.jpg"},
	{ brand: "Yamaha", model: "R1", imgUrl: "pics/moto-gallery/yamaha-r1.jpg"},
	{ brand: "Yamaha", model: "Ténéré", imgUrl: "pics/moto-gallery/yamaha-tenere.jpg"}
]

const container = document.querySelector(".gallery-grid");
const brands = ["Honda", "Suzuki", "Kawasaki", "Yamaha"];

brands.forEach(brand => {
  const row = document.createElement("div");
  row.className = "brand-row";

  bikesGallery.forEach(bike => {
    if (bike.brand === brand) {
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

	  const modal = document.getElementById("modal");
	  const modalImg = document.querySelector(".modal-img");
	  const modalCaption = document.querySelector(".modal-caption");
	  const modalClose = document.querySelector(".close");

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

		modal.addEventListener("click", e => {
		if (e.target === modal) {
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
		}
		});

	  modalClose.addEventListener("click", () => {
		modal.style.display = "none";
	  });

	  modal.addEventListener("click", e => {
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
  });

  container.append(row);
});

bikesGallery.forEach((bike, index) => {
	console.log("Index:", index);
	console.log("Bike object:", bike);
	console.log("Brand:", bike.brand);
	console.log("Image URL:", bike.imgUrl);
});






