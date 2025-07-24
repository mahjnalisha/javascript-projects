const filterA = document.getElementById("blur");
const filterB = document.getElementById("contrast");
const filterC = document.getElementById("hue-rotate");
const filterD = document.getElementById("sephaia");

const flip = document.getElementById("no-flip");
const flipXbtn = document.getElementById("flipx");
const flipyBtn = document.getElementById("flipy");


const uploadButton = document.getElementById("upload-button");
const image = document.getElementById("chosen-image");
const downloadButton = document.getElementById("download-button");

function resetFilter() {
    filterA.value = "0";
    filterB.value = "0";
    filterC.value = "0";

    flip.checked = true;
    addFilter();
    flipImage();
}


uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";
    const reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }


}
const sliders = document.querySelectorAll(".filter input[type ='range']");
sliders.forEach(slider => {
    slider.addEventListener("input", addFilter);
    slider.addEventListener("input", showRangeValue)
})

function addFilter() {
    console.log(`blur(${filterA.value}px)  contrast(${filterB.value}px)  hue-contrast(${filterC.value}px)  sepia(${filterD.value}px) `);
    image.style.filter = `sepia(1)`;//`blur(${filterA.value}px) contrast(${filterB.value}) sepia(${filterD.value}) `;
}

function flipImage() {
    if (flipXbtn.checked) {
        image.style.transform = "scaleX(-1)";
    } else if (flipXbtn.checked) {
        image.style.transform = "scaleY(-1)";
    } else {
        image.style.transform = "scale(1,1)";
    }
}

const radiobtns = document.querySelectorAll(".flip-option input[type='radio']");
radiobtns.forEach((radio) => {
    radio.addEventListener("click", flipImage)
})

function showRangeValue() {
    const rangeValues = document.querySelectorAll(".range-value");
    sliders.forEach((slider, index) => {
        range[index].textContent = `${slider.value}%`;
    });
}

downloadButton.onclick = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2D");
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = image.style.filter;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if (flipXbtn.checked) {
            ctx.scale(-1, 1)
        } else if (flipyBtn.checked) {
            ctx.scale(1, -1)
        }
        ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        const link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}