const unicodetextEl = document.getElementById("unicodetext");
const unicodetext = unicodetextEl.ariaValueMax;
const countUnicodeEl = document.getElementById("count-unicode");
const textInformationEl = document.getElementById("text-information");

countUnicodeEl.addEventListener("click", countUnicode);
function countUnicode() {
    let unicode = 0;
    let countcodeVal = unicodetextEl.value;
    if (countcodeVal) {
        unicode = countcodeVal.charCodeAt();

    }
    textInformationEl.textContent = `Unicode value of ${unicodetext} is ${unicode}`;
}