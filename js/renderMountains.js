import { createMapLink } from "./helpers.js";
import { openGallery } from "./gallery.js";

export function renderMountains(mountains) {
    const leftList = document.getElementById("mountains-left");
    const rightList = document.getElementById("mountains-right");

    leftList.innerHTML = "";
    rightList.innerHTML = "";

    mountains.forEach((mountain, index) => {
        const li = document.createElement("li");

        if (mountain.completed) {
            li.classList.add("completed");
        }

        const row = document.createElement("div");
        row.className = "row";

        const peakInfo = document.createElement("div");
        peakInfo.className = "peak-info";

        const peak = document.createElement("span");
        peak.className = "peak";
        peak.textContent = `${mountain.completed ? "✅ " : ""}${mountain.range} - ${mountain.peak}`;

        const height = document.createElement("span");
        height.className = "height";
        height.textContent = `${mountain.height} м`;

        peak.appendChild(height);
        peakInfo.appendChild(peak);

        if (mountain.completed && mountain.date) {
            const date = document.createElement("span");
            date.className = "date";
            date.textContent = mountain.date;
            peakInfo.appendChild(date);
        }

        row.appendChild(peakInfo);

        // Right-side action buttons
        const actions = document.createElement("div");
        actions.className = "actions";

        // Gallery button
        if (mountain.photos && mountain.photos.length > 0) {
            const photoButton = document.createElement("button");
            photoButton.className = "photo-button";
            photoButton.innerHTML = "📷 Gallery";

            photoButton.addEventListener("click", () => {
                openGallery(mountain);
            });

            actions.appendChild(photoButton);
        }

        // Google Maps button
        const mapLink = createMapLink(mountain.coordinates);
        if (mapLink) {
            actions.appendChild(mapLink);
        }

        row.appendChild(actions);
        li.appendChild(row);

        (index < 20 ? leftList : rightList).appendChild(li);
    });
}