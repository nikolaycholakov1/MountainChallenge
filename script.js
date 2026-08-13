const progressBar = document.getElementById("progress-bar");
const totalPeaks = Number(progressBar.dataset.total);

// Count completed peaks automatically
const completed = document.querySelectorAll("li.completed").length;
const remaining = totalPeaks - completed;
const percentage = Math.round((completed / totalPeaks) * 100);

// Update progress
progressBar.value = completed;

document.getElementById("progress-text").textContent =
    `${completed} / ${totalPeaks} (${percentage}%)`;

document.title = `${completed}/${totalPeaks} • 39 Първенци`;
