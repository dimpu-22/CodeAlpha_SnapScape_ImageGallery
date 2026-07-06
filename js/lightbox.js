const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let galleryImages = [];

function refreshImages() {
    galleryImages = document.querySelectorAll(".card img");
}

refreshImages();

document.addEventListener("click", function (e) {

    if (e.target.matches(".card img")) {

        refreshImages();

        currentIndex = [...galleryImages].indexOf(e.target);

        lightbox.classList.add("active");

        lightboxImg.src = galleryImages[currentIndex].src;

    }

});

closeBtn.onclick = () => {

    lightbox.classList.remove("active");

};

lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

};

nextBtn.onclick = () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    lightboxImg.src = galleryImages[currentIndex].src;

};

prevBtn.onclick = () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    lightboxImg.src = galleryImages[currentIndex].src;

};

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});