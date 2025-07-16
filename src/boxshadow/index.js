
function validateInput() {
    let inputField = document.getElementById("validateInput");
    let inputFieldVal = inputField.value.trim();
    const error = document.getElementById("errorMessage");
    if (inputFieldVal === "") {
        error.style.visibility = "visible";
        setTimeout(function () {
            error.style.visibility = "hidden";
        }, 5000)
    } else {
        alert("Valid input")
    }
}