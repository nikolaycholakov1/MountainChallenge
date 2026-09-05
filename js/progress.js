export function updateProgress(mountains) {

    const progressBar =
        document.getElementById("progress-bar");

    const progressText =
        document.getElementById("progress-text");

    const total = mountains.length;

    const completed =
        mountains.filter(m => m.completed).length;

    const percentage =
        Math.round((completed / total) * 100);

    progressBar.max = total;
    progressBar.value = completed;

    progressText.textContent =
        `${completed} / ${total} (${percentage}%)`;

    document.title =
        `${completed}/${total} • 39 Първенци`;
}