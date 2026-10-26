import { createMapLink } from "./helpers.js";
import { openGallery } from "./gallery.js";

export function renderEuropeanSummits(summits) {
    const leftList = document.getElementById("european-list-left");
    const rightList = document.getElementById("european-list-right");

    leftList.innerHTML = "";
    rightList.innerHTML = "";

    const midpoint = Math.ceil(summits.length / 2);

    const leftSummits = summits.slice(0, midpoint);
    const rightSummits = summits.slice(midpoint);

    renderColumn(leftSummits, leftList);
    renderColumn(rightSummits, rightList);

    updateEuropeanProgress(summits);
}

function renderColumn(summits, container) {
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

        peak.textContent =
            `${summit.completed ? "✅ " : ""}${summit.flag} ${summit.country} – ${summit.peak}`;

        const height = document.createElement("span");
        height.className = "height";
        height.textContent = `${summit.height} m`;

        peak.appendChild(height);
        info.appendChild(peak);

        const meta = document.createElement("span");
        meta.className = "date";

        meta.textContent = summit.completed && summit.date
            ? summit.date
            : summit.region || "";

        info.appendChild(meta);
        peakInfo.appendChild(info);
        row.appendChild(peakInfo);

        const actions = document.createElement("div");
        actions.className = "actions";

        if (summit.photos && summit.photos.length > 0) {
            const photoButton = document.createElement("button");

            photoButton.className = "photo-button";
            photoButton.textContent = "📷 Gallery";

            photoButton.addEventListener("click", () => {
                openGallery(summit);
            });

            actions.appendChild(photoButton);
        }

        const mapLink = createMapLink(summit.coordinates);

        if (mapLink) {
            actions.appendChild(mapLink);
        }

        row.appendChild(actions);
        li.appendChild(row);
        container.appendChild(li);
    });
}

function updateEuropeanProgress(summits) {
    const completed = summits.filter(summit => summit.completed).length;
    const total = summits.length;

    const progressBar = document.getElementById("european-progress-bar");
    const progressText = document.getElementById("european-progress-text");

    progressBar.max = total;
    progressBar.value = completed;

    const percentage = total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    progressText.textContent =
        `${completed} / ${total} (${percentage}%)`;
}