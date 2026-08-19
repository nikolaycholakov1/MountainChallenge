import { mountains } from "./mountains.js";

// ==========================
// GENERATE MOUNTAIN LIST
// ==========================

const leftList = document.getElementById("mountains-left");
const rightList = document.getElementById("mountains-right");

mountains.forEach((mountain, index) => {

    // Create the <li>
    const li = document.createElement("li");

    // Add completed class if the mountain is completed
    if (mountain.completed) {
        li.classList.add("completed");
    }

    // Create row
    const row = document.createElement("div");
    row.classList.add("row");

    // Create mountain name
    const peak = document.createElement("span");
    peak.classList.add("peak");

    peak.textContent =
        `${mountain.completed ? "✅ " : ""}${mountain.range} - ${mountain.peak}`;

    // Create height
    const height = document.createElement("span");
    height.classList.add("height");
    height.textContent = `${mountain.height} м`;

    peak.appendChild(height);

    // Add peak to row
    row.appendChild(peak);

    // Add date if completed
    if (mountain.completed && mountain.date) {

        const date = document.createElement("span");
        date.classList.add("date");
        date.textContent = mountain.date;

        row.appendChild(date);
    }

    // Add row to li
    li.appendChild(row);

    // First 20 mountains → left column
    if (index < 20) {
        leftList.appendChild(li);
    }

    // Remaining mountains → right column
    else {
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