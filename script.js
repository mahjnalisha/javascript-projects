
const listContainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addTask() {
    if (inputbox.value == '') {
        alert("enter your Data")
    } else {
        let lielement = document.createElement("li");
        lielement.innerHTML = inputbox.value;
        listContainer.appendChild(lielement);
        let span = document.createElement("span");
        // span.innerHTML = "\u00d";
        lielement.append(span);

    }
    saveTask();
    inputbox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tageName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.classList.remove();
        saveTask();
    }
})
function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML)

}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()