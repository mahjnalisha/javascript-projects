const colorOne = document.getElementById("color-a");
const colortwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

function setDirections(value, _this) {
    let direction = document.querySelectorAll(".buttons button");
    for (let i of direction) {
        i.classList.remove("active");

    }
    _this.classList.add("active");
    currentDirection = value;
    generateGradient();

}

function generateGradient() {
    outputCode.value = `background: linear-gradient(${currentDirection}, ${colorOne.value}, ${colortwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colortwo.value})!important`;
    console.log(document.getElementsByTagName("BODY")[0].style.backgroundColor);
}

function copyCode() {
    navigator.clipboard.writeText(outputCode.value).then(() => {
        alert('Gradient copied')
    })
}

generateGradient();