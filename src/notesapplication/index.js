const btnaddEl = document.getElementById("btn");
const app = document.getElementById("app");

let notes = [];

getNotes().forEach(note => {
    const noteEl = createNote(note.id, note.content);
    app.insertBefore(noteEl, btnaddEl);
});
function createNote(noteid, noteContent) {
    const el = document.createElement("textarea");
    el.classList.add("note");
    el.placeholder = "Empty Note";
    el.value = noteContent;

    el.addEventListener("dblclick", () => {
        const warning = confirm("do you want to delete this note?");
        if (warning) {
            deleteNote(noteid, el)
        }
    })
    el.addEventListener("input", () => {
        updateNote(noteid, el)
    })
    return el;


}
function deleteNote(id, ele) {
    notes = notes.filter((note) => note.id != id);
    app.removeChild(ele);
    saveNote(notes);
}
function updateNote(id, el) {
    //use this as for the local storage functionality
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = el.value;
    saveNote(notes);
}
function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }
    const noteEl = createNote(noteObj.id, noteObj.content);
    app.insertBefore(noteEl, btnaddEl);
    notes.push(noteObj);
    saveNote(notes);
}
function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnaddEl.addEventListener("click", addNote);