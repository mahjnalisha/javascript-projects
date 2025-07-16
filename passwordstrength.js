const password = document.querySelector("#password_in");
const message = document.querySelector(".message");
const strength = document.querySelector("#strength");
const submitButton = document.querySelector(".submitButton");

password.addEventListener("input", function () {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;


    let strengthValue = '';

    if (password === 0) {
        strengthValue = '';
    } else if (passwordLength < 5) {
        strengthValue = 'Weak';
    } else if (passwordLength < 8) {
        strengthValue = 'Medium';
    } else {
        strengthValue = 'Strong';
    }
    strength.textContent = strengthValue;
    message.style.display = 'block';

})

submitButton.addEventListener("click", function () {
    const passwordType = password.getAttribute('type');
    if (passwordType === "password") {
        password.setAttribute('type', 'text');
        submitButton.value = 'Hide';
        submitButton.textContent = 'Hide';
    } else {
        password.setAttribute('type', 'password');
        submitButton.value = 'Show';
        submitButton.textContent = 'Show';
    }
})



