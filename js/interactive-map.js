document.addEventListener("DOMContentLoaded", () => {
    const mapToggle = document.getElementById("map-toggle");
    const mapContainer = document.getElementById("map-container");

    if (!mapToggle || !mapContainer) {
        console.error("Map toggle elements not found.");
        return;
    }

    const arrow = mapToggle.querySelector(".map-arrow");

    // Set the initial state
    const isCollapsed = mapContainer.classList.contains("collapsed");

    mapToggle.setAttribute("aria-expanded", String(!isCollapsed));

    if (arrow) {
        arrow.textContent = isCollapsed ? "▼" : "▲";
    }

    // Toggle the map when the button is clicked
    mapToggle.addEventListener("click", () => {
        const isNowCollapsed = mapContainer.classList.toggle("collapsed");

        if (arrow) {
            arrow.textContent = isNowCollapsed ? "▼" : "▲";
        }

        mapToggle.setAttribute("aria-expanded", String(!isNowCollapsed));
    });
});