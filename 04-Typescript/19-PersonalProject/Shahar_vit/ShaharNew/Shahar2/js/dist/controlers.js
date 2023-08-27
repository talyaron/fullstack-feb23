var notes = getNotes();
var users = [];
renderAllNotes(notes, document.querySelector("#rootNotes"));
// handleAddNoteButton(document.querySelector("#addNoteButton"));
function getUsers() {
    try {
        //get users from locastorage (string)
        var usersString = localStorage.getItem("users");
        if (!usersString)
            return [];
        //convert string to array of objects
        var usersArray = JSON.parse(usersString);
        //convert array of objects to array of users
        // const users: User[] = usersArray.map((user: User) => {
        // return new User(user.name);
        // })
        return usersArray;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function getNotes() {
    try {
        var notesString = localStorage.getItem("notes");
        if (!notesString)
            return [];
        var notesArray = JSON.parse(notesString);
        return notesArray;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function handleAddNote() {
    try {
        var input = document.getElementById("note-input");
        var userString = localStorage.getItem("users") || "[]";
        var users_1 = JSON.parse(userString);
        var user = users_1[users_1.length - 1];
        var text = input.value;
        console.log(user);
        var newNote = new Note(user.name, text);
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderAllNotes(notes, document.querySelector("#rootNotes"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllNotes(notes, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No Element");
        var html = notes.map(function (note) { return renderNote(note); }).join(" ");
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderNote(note) {
    try {
        if (note.isEdit) {
            return " <div class=\"note\">   \n      <div>" + note.color + "</div>\n      <form onsubmit=\"handleSetEditNote(event)\" id=\"" + note.id + "\">\n      <input type=\"text\" name=\"text\" placeholder=\"text\" value=\"" + note.text + "\">\n      <input type=\"submit\" value=\"Save\">\n      </form>\n      </div>";
        }
        else {
            return "<div class=\"note\">\n      <div>" + note.color + "</div>\n      <div>" + note.text + "</div>\n            <button onclick=\"handleDeleteNote('" + note.id + "')\">Delete</button>\n            <button onclick=\"handleEditNote('" + note.id + "')\">Edit</button>\n            </div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
// Delete
function handleDeleteNote(noteId) {
    try {
        var index = notes.findIndex(function (note) { return note.id === noteId; });
        if (index === -1)
            throw new Error("Could not find note");
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderAllNotes(notes, document.querySelector("#rootNotes"));
    }
    catch (error) {
        console.error(error);
    }
}
// Edit Note
function handleEditNote(noteId) {
    try {
        var note = notes.find(function (note) { return note.id === noteId; });
        if (!note)
            throw new Error("Could not find note");
        note.isEdit = true;
        renderAllNotes(notes, document.querySelector("#rootNotes"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditNote(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var text = ev.target.text.value;
        var noteId_1 = ev.target.id;
        var note = notes.find(function (note) { return note.id === noteId_1; });
        if (!note)
            throw new Error("Could not find note");
        note.text = text;
        note.isEdit = false;
        localStorage.setItem("notes", JSON.stringify(notes));
        renderAllNotes(notes, document.querySelector("#rootNotes"));
    }
    catch (error) {
        console.error(error);
    }
}
