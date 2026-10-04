document.addEventListener("DOMContentLoaded", () => {
    const mapToggle = document.getElementById("map-toggle");
    const mapContainer = document.getElementById("map-container");

    if (!mapToggle || !mapContainer) {
        console.error("Map toggle elements not found.");
        return;
    }

    mapToggle.addEventListener("click", () => {
        mapContainer.classList.toggle("collapsed");

        const arrow = mapToggle.querySelector(".map-arrow");

        if (mapContainer.classList.contains("collapsed")) {
            arrow.textContent = "▼";
        } else {
            arrow.textContent = "▲";
        }
    });
});