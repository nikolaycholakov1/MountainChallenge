import { mountains } from "./mountains.js";

// ==========================
// GENERATE MOUNTAIN LIST
// ==========================

const leftList = document.getElementById("mountains-left");
const rightList = document.getElementById("mountains-right");

mountains.forEach((mountain, index) => {

    // Create the <li>
    const li = document.createElement("li");

    if (mountain.completed) {
        li.classList.add("completed");
    }

    // Create row
    const row = document.createElement("div");
    row.classList.add("row");

    // ==========================
    // LEFT SIDE
    // ==========================

    const peakInfo = document.createElement("div");
    peakInfo.classList.add("peak-info");

    // Mountain name
    const peak = document.createElement("span");
    peak.classList.add("peak");

    peak.textContent =
        `${mountain.completed ? "✅ " : ""}${mountain.range} - ${mountain.peak}`;

    // Height
    const height = document.createElement("span");
    height.classList.add("height");

    height.textContent = `${mountain.height} м`;

    peak.appendChild(height);

    peakInfo.appendChild(peak);

    // ==========================
    // CLIMB DATE
    // ==========================

    if (mountain.completed && mountain.date) {

        const date = document.createElement("span");

        date.classList.add("date");

        date.textContent = mountain.date;

        peakInfo.appendChild(date);
    }

    // Add the peak information to row
    row.appendChild(peakInfo);

    // ==========================
    // GOOGLE MAPS
    // ==========================

    if (
        mountain.coordinates &&
        typeof mountain.coordinates.lat === "number" &&
        typeof mountain.coordinates.lng === "number"
    ) {

        const mapLink = document.createElement("a");

        const { lat, lng } = mountain.coordinates;

        mapLink.href =
            `https://www.google.com/maps?q=${lat},${lng}`;

        mapLink.target = "_blank";
        mapLink.rel = "noopener noreferrer";

        mapLink.textContent = "📍 Google Maps";

        mapLink.classList.add("map-link");

        mapLink.title = "Отвори в Google Maps";

        row.appendChild(mapLink);
    }

    // Add row to list item
    li.appendChild(row);

    // ==========================
    // ADD TO COLUMN
    // ==========================

    if (index < 20) {
        leftList.appendChild(li);
    } else {
        rightList.appendChild(li);
    }
});


// ==========================
// PROGRESS
// ==========================

const progressBar = document.getElementById("progress-bar");

// Get total mountains automatically
const totalPeaks = mountains.length;

// Count completed mountains
const completed = mountains.filter(
    mountain => mountain.completed
).length;

const remaining = totalPeaks - completed;

const percentage = Math.round(
    (completed / totalPeaks) * 100
);

// Update progress bar
progressBar.max = totalPeaks;
progressBar.value = completed;

// Update progress text
document.getElementById("progress-text").textContent =
    `${completed} / ${totalPeaks} (${percentage}%)`;

// Update browser tab title
document.title =
    `${completed}/${totalPeaks} • 39 Първенци`;