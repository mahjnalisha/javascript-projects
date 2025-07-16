const backgroundchangecontainer = document.querySelector('.backgroundcolor-contianer');
const hexcode = document.getElementById("hexcode");
backgroundchangecontainer.addEventListener("click", changeBackground);

function changeBackground() {
    const randomcolor = getRandomColor();
    hexcode.textContent = randomcolor;
    backgroundchangecontainer.style.backgroundColor = randomcolor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];


    }
    return color;
}