let outputCode = document.getElementById("css-code");
let sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function (slider) {
    slider.addEventListener("input", createBlob);
})

let inputs = document.querySelectorAll("input[type='number']");

inputs.forEach(function (inp) {
    inp.addEventListener("change", createBlob);
})
function createBlob() {
    let radiusOne = sliders[0].value;
    let radiustwo = sliders[1].value;
    let radiusthree = sliders[2].value;
    let radiusfour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWeight = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiustwo}% ${100 - radiusthree}% / ${radiusOne}% ${100 - radiusOne}% ${100 - radiustwo}% ${100 - radiusthree}%`;

    let blobStyle = `border-radius: ${borderRadius}; height:${blobHeight}px; weight:${blobWeight}px; width:${blobWeight}`;

    // const outputCode = document.getElementById("")
    outputCode.value = blobStyle;
}

document.getElementById("copy").addEventListener("click", copyCode);

function copyCode() {
    navigator.clipboard.writeText(outputCode.value).then(function () {
        alert("copied")
    })
}