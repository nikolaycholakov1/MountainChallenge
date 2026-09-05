import {
    createMapLink,
    createPhotoButton
} from "./helpers.js";

export function renderInternationalSummits(summits) {

    const container =
        document.getElementById("international-list");

    summits.forEach(summit => {

        const card =
            document.createElement("div");

        card.className = "summit-card";

        const info =
            document.createElement("div");

        info.className = "summit-info";

        const title =
            document.createElement("h3");

        title.textContent =
            `${summit.range} – ${summit.peak}`;

        const meta =
            document.createElement("div");

        meta.className = "summit-meta";

        meta.innerHTML = `
            <span>${summit.flag} ${summit.country}</span>
            <span class="summit-badge">${summit.height} м</span>
            ${summit.completed && summit.date
                ? `<span>${summit.date}</span>`
                : ""}
        `;

        info.append(title, meta);

        const actions =
            document.createElement("div");

        actions.className = "summit-actions";

        const mapLink =
            createMapLink(summit.coordinates);

        if (mapLink) {
            actions.appendChild(mapLink);
        }

        const photoButton =
            createPhotoButton(summit);

        if (photoButton) {
            actions.appendChild(photoButton);
        }

        card.append(info, actions);

        container.appendChild(card);
    });
}