import { createMapLink } from "./helpers.js";
import { openGallery } from "./gallery.js";

export function renderInternationalSummits(summits) {
    const container = document.getElementById("international-list");

    container.innerHTML = "";

    summits.forEach(summit => {
        const card = document.createElement("div");
        card.className = "summit-card";

        const info = document.createElement("div");
        info.className = "summit-info";

        const title = document.createElement("h3");
        title.textContent = `${summit.range} – ${summit.peak}`;

        const meta = document.createElement("div");
        meta.className = "summit-meta";

        meta.innerHTML = `
            <span>${summit.flag} ${summit.country}</span>
            <span class="summit-badge">${summit.height} м</span>
            ${summit.completed && summit.date
                ? `<span>${summit.date}</span>`
                : ""}
        `;

        info.append(title, meta);

        const actions = document.createElement("div");
        actions.className = "actions";

        // Gallery button (same as Bulgarian hikes)
        if (summit.photos && summit.photos.length > 0) {
            const photoButton = document.createElement("button");
            photoButton.className = "photo-button";
            photoButton.innerHTML = "📷 Gallery";

            photoButton.addEventListener("click", () => {
                openGallery(summit);
            });

            actions.appendChild(photoButton);
        }

        // Google Maps button
        const mapLink = createMapLink(summit.coordinates);
        if (mapLink) {
            actions.appendChild(mapLink);
        }

        card.append(info, actions);
        container.appendChild(card);
    });
}