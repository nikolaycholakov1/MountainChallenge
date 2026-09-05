let currentPhotos = [];
let currentIndex = 0;

const overlay = document.getElementById("gallery-overlay");
const title = document.getElementById("gallery-title");
const image = document.getElementById("gallery-image");
const caption = document.getElementById("gallery-caption");
const counter = document.getElementById("gallery-counter");

const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");
const close = document.getElementById("gallery-close");

function updateImage() {
    const photo = currentPhotos[currentIndex];

    image.src = photo.url;
    image.alt = photo.caption || "";
    caption.textContent = photo.caption || "";
    counter.textContent = `${currentIndex + 1} / ${currentPhotos.length}`;

    prev.style.visibility = currentPhotos.length > 1 ? "visible" : "hidden";
    next.style.visibility = currentPhotos.length > 1 ? "visible" : "hidden";
}

export function openGallery(mountain) {
    if (!mountain.photos.length) return;

    currentPhotos = mountain.photos;
    currentIndex = 0;

    title.textContent = `${mountain.range} – ${mountain.peak}`;

    overlay.classList.remove("hidden");
    updateImage();
}

function closeGallery() {
    overlay.classList.add("hidden");
}

prev.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateImage();
});

next.addEventListener("click", () => {
    currentIndex =
        (currentIndex + 1) % currentPhotos.length;
    updateImage();
});

close.addEventListener("click", closeGallery);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeGallery();
    }
});

document.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("hidden")) return;

    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowLeft") prev.click();
    if (e.key === "ArrowRight") next.click();
});