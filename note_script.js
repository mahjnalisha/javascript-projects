const buttonAdd = document.getElementById("addBtn");
const mainContainer = document.querySelector("#main");

buttonAdd.addEventListener("click", addNote);


function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <textarea></textarea>
        <div class="tool">
            <button class="save">Save</button>
            <button class="trash">Trash</button>
        </div>
    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const notearea = note.querySelector("textarea");
    save.addEventListener("click", saveNotes);
    notearea.addEventListener("input", saveNotes);
    trash.addEventListener("click", () => {

        note.remove();
        saveNotes();

    });
    mainContainer.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    // localStorage.setItem("data", mainContainer.innerHTML);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }


}

function loadNotes() {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes !== null) {
        lsNotes.forEach(noteText => {
            addNote();
            const notetextarea = document.querySelectorAll(".note textarea");
            const lastNote = notetextarea[notetextarea.length - 1];
            lastNote.value = noteText;
        });
    }
}


loadNotes();
