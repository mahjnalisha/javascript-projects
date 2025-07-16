const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("password_in");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("specialcharacters");
const generateButton = document.getElementById("generateButton");
const copyPassword = document.getElementById("submitButton");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVwXYZ";
const numbers = "0123456789";
const symbols = "@!#$%^&*()_?><}{;";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});


generateButton.addEventListener("click", function () {
    passBox.value = generatePassword();
})

function generatePassword() {
    const totalcharlength = inputSlider.value;
    let characters = "";
    let passwordValue = "";

    characters += lowerCaseEl.checked ? lowercaseLetters : "";
    characters += upperCaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < totalcharlength; i++) {
        passwordValue += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return passwordValue;
}
copyPassword.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 10) {
        navigator.clipboard.writeText(passBox.value);
        copyPassword.textContent = "copied";
        copyPassword.value = "copied";
        setTimeout(() => {
            copyPassword.textContent = "Copy";
            copyPassword.value = "copy";
        }, 5000);

    }
})

