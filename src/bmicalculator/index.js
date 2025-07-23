// const height = document.getElementById("height");
// const weight = document.getElementById("weight");
// const age = document.getElementById("age");
const heightValue = document.getElementById("height-value");
const weightValue = document.getElementById("weight-value");

function updateWeight(value) {
    weightValue.textContent = `${value}kg`;
}

function updateHeight(value) {
    heightValue.textContent = `${value}cm`;
}


function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector("input[name='gender']:checked");
    if (!age || !gender) {
        alert("please fill the required fields");
    }
    const bmit = (weight / (height / 100) ** 2).toFixed(2);
    document.getElementById("calbmivalue").textContent = bmit;
    let cat = "";
    if (bmit < 18.5) {
        cat = "underweight";
    } else if (bmi < 29.4) {
        cat = "Normal weight";
    } else {
        cat = "Overweight";
    }

    document.getElementById("bmidefinition").textContent = cat;
}