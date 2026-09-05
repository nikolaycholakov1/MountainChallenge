export function createMapLink(coordinates) {

    if (
        !coordinates ||
        typeof coordinates.lat !== "number" ||
        typeof coordinates.lng !== "number"
    ) {
        return null;
    }

    const link = document.createElement("a");

    link.href =
        `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.className = "map-link";
    link.textContent = "📍 Google Maps";
    link.title = "Open in Google Maps";

    return link;
}

export function createPhotoButton(item) {

    if (!item.photos || item.photos.length === 0) {
        return null;
    }

    const button = document.createElement("button");

    button.className = "photo-button";
    button.textContent = "📷";
    button.title = `Photos from ${item.peak}`;

    button.addEventListener("click", () => {
        openGallery(item);
    });

    return button;
}