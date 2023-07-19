const notes: Note[] = getNotes();
const users: User[] = [];
renderAllNotes(notes, document.querySelector("#rootNotes"));
// handleAddNoteButton(document.querySelector("#addNoteButton"));
function getUsers(): User[] {
  try {
    //get users from locastorage (string)
    const usersString = localStorage.getItem("users");
    if (!usersString) return [];

    //convert string to array of objects
    const usersArray: User[] = JSON.parse(usersString);

    //convert array of objects to array of users
    // const users: User[] = usersArray.map((user: User) => {
    // return new User(user.name);
    // })

    return usersArray;
  } catch (error) {
    console.error(error);
    return [];
  }
}
function getNotes(): Note[] {
  try {
    const notesString = localStorage.getItem("notes");
    if (!notesString) return [];

    const notesArray: Note[] = JSON.parse(notesString);

    return notesArray;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function handleAddNote() {
  try {
    const input: any = document.getElementById("note-input");
    const userString = localStorage.getItem("users") || "[]";
    const users: User[] = JSON.parse(userString);
    const user = users[users.length - 1];
    const text = input.value;
    console.log(user);

    const newNote = new Note(user.name, text);

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    renderAllNotes(notes, document.querySelector("#rootNotes"));
  } catch (error) {
    console.error(error);
  }
}

function renderAllNotes(notes: Note[], htmlElement: HTMLElement | null) {
  try {
    if (!htmlElement) throw new Error("No Element");
    const html = notes.map((note) => renderNote(note)).join(" ");
    htmlElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderNote(note: Note) {
  try {
    if (note.isEdit) {
      return ` <div class="note">   
      <div>${note.color}</div>
      <form onsubmit="handleSetEditNote(event)" id="${note.id}">
      <input type="text" name="text" placeholder="text" value="${note.text}">
      <input type="submit" value="Save">
      </form>
      </div>`;
    } else {
      return `<div class="note">
      <div>${note.color}</div>
      <div>${note.text}</div>
            <button onclick="handleDeleteNote('${note.id}')">Delete</button>
            <button onclick="handleEditNote('${note.id}')">Edit</button>
            </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

// Delete
function handleDeleteNote(noteId: string) {
  try {
    const index = notes.findIndex((note) => note.id === noteId);
    if (index === -1) throw new Error("Could not find note");

    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderAllNotes(notes, document.querySelector("#rootNotes"));
  } catch (error) {
    console.error(error);
  }
}

// Edit Note

function handleEditNote(noteId: string) {
  try {
    const note = notes.find((note) => note.id === noteId);
    if (!note) throw new Error("Could not find note");

    note.isEdit = true;
    renderAllNotes(notes, document.querySelector("#rootNotes"));
  } catch (error) {
    console.error(error);
  }
}

function handleSetEditNote(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev);
    const text = ev.target.text.value;
    const noteId: string = ev.target.id;
    const note: Note | undefined = notes.find((note) => note.id === noteId);
    if (!note) throw new Error("Could not find note");
    note.text = text;
    note.isEdit = false;
    localStorage.setItem("notes", JSON.stringify(notes));
    renderAllNotes(notes, document.querySelector("#rootNotes"));
  } catch (error) {
    console.error(error);
  }
}

