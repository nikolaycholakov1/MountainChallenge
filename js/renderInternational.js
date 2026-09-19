import { createMapLink } from "./helpers.js";
import { openGallery } from "./gallery.js";

export function renderInternationalSummits(summits) {
    const container = document.getElementById("international-list");

    container.innerHTML = "";

    summits.forEach(summit => {
        const li = document.createElement("li");

        if (summit.completed) {
            li.classList.add("completed");
        }

        const row = document.createElement("div");
        row.className = "row";

        const peakInfo = document.createElement("div");
        peakInfo.className = "peak-info";

        const info = document.createElement("div");

        const peak = document.createElement("span");
        peak.className = "peak";
        peak.textContent = `${summit.completed ? "✅ " : ""}${summit.flag} ${summit.range} - ${summit.peak}`;

        const height = document.createElement("span");
        height.className = "height";
        height.textContent = `${summit.height} м`;

        peak.appendChild(height);
        info.appendChild(peak);

        // Second line (country + date)
        const meta = document.createElement("span");
        meta.className = "date";
        meta.textContent = summit.completed && summit.date
            ? `${summit.country}  ${summit.date}`
            : summit.country;

        info.appendChild(meta);

        peakInfo.appendChild(info);
        row.appendChild(peakInfo);

        // Action buttons
        const actions = document.createElement("div");
        actions.className = "actions";

        if (summit.photos && summit.photos.length > 0) {
            const photoButton = document.createElement("button");
            photoButton.className = "photo-button";
            photoButton.innerHTML = "📷 Gallery";
            photoButton.addEventListener("click", () => openGallery(summit));
            actions.appendChild(photoButton);
        }

        const mapLink = createMapLink(summit.coordinates);
        if (mapLink) actions.appendChild(mapLink);

        row.appendChild(actions);
        li.appendChild(row);
        container.appendChild(li);
    });
}