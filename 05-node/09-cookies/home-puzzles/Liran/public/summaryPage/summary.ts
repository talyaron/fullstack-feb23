const summaryId = getSummaryIdFromQuery();
const summary = getSummaryFromDB(summaryId).then(summary => {
    renderSummary(summary, document.querySelector("#root"));
});

function renderSummary(summary, root) {
    try {
        if (!summary) throw new Error("No summary");
        if (!root) throw new Error("No root");
        root.innerHTML = `<h1>Summary</h1>
        <div id="summary">
        <p>${summary}</p>
        </div>
        <button onclick="window.close()">Close</button>`;
    } catch (error) {
        console.error(error);
    }
}
