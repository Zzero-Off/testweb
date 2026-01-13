document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".js-gallery-image");

    for (const img of galleryImages) {
        img.addEventListener("click", () => {
            alert("^_^");
        });
    }
});
