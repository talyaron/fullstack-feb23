//render page

import { uid } from "./counter";

function renderPage() {
    try {
        let content = document.querySelector("#root");
        if (!content) throw new Error("No root element");
        content.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Second Page: Uid: ${uid()}</h1>
                    <a href="./index.html">First Page</a>
                </div>
            </div>
        </div>
        `;
    } catch (error) {
        console.error(error);
    }

}
renderPage();