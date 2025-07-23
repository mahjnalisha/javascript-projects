const ele = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".slider-wrapper input");
sliders.forEach((slider) => slider.addEventListener("input", generateBoxShadow))
function generateBoxShadow() {
    const shadowParams = getShadowParams();
    const boxShadow = createBoxShadow(...shadowParams);
    console.log(boxShadow);
    applyShadow(ele, boxShadow)
    upadateCode(boxShadow);
}

function getShadowParams() {
    const hShadow = parseInt(document.getElementById("h-shadow").value);
    const vShadow = parseInt(document.getElementById("v-shadow").value);
    const blur = parseInt(document.getElementById("blur-radius").value);
    const spread = parseInt(document.getElementById("spread-radius").value);
    const shadowcolor = document.getElementById("shadow-color").value;
    const shadowcoloropacity = parseFloat(document.getElementById("shadow-color--opacity").value).toFixed(1);

    const shadowInset = document.getElementById("shadow-inset").checked;
    return [hShadow, vShadow, blur, spread, shadowcolor, shadowcoloropacity, shadowInset]
}

function createBoxShadow(hShadow, vShadow, blur, spread, shadowcolor, shadowcoloropacity, shadowInset) {
    const shadow = shadowInset ? "inset" : "";
    const rgbaColor = hexToRgba(shadowcolor, shadowcoloropacity);
    return `${shadow} ${hShadow}px ${blur}px ${spread}px ${rgbaColor}`


}

function hexToRgba(shadowcolor, shadowcoloropacity) {
    const r = parseInt(shadowcolor.substr(1, 2), 16);
    const g = parseInt(shadowcolor.substr(3, 2), 16);
    const b = parseInt(shadowcolor.substr(5, 2), 16);
    return `rgba(${r},${g},${b}, ${shadowcoloropacity})`
}


function upadateCode(text) {
    code.textContent = `box-shadow: ${text}`;
}

function copyCode() {
    const codeText = code.textContent;
    navigator.clipboard.writeText(codeText)
        .then(() => {
            alert("Code Copied to Clipboard");
        });
}

function applyShadow(ele, boxShadow) {
    element.style.boxShadow = boxShadow;
}