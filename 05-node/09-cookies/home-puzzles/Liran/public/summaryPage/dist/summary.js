var summaryId = getSummaryIdFromQuery();
var summary = getSummaryFromDB(summaryId).then(function (summary) {
    renderSummary(summary, document.querySelector("#root"));
});
function renderSummary(summary, root) {
    try {
        if (!summary)
            throw new Error("No summary");
        if (!root)
            throw new Error("No root");
        root.innerHTML = "<h1>Summary</h1>\n        <div id=\"summary\">\n        <p>" + summary + "</p>\n        </div>\n        <button onclick=\"window.close()\">Close</button>";
    }
    catch (error) {
        console.error(error);
    }
}
