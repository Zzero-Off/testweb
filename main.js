document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery-label img");

    for (const img of galleryImages) {
        img.addEventListener("click", () => {
            alert("^_^");
        });
    }
});
