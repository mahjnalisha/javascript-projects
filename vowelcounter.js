const countVowelEl = document.getElementById("countVowel");
const yourtextEle = document.querySelector('.yourtext');
const totalvowelsEl = document.getElementById("totalvowels");

countVowelEl.addEventListener("click", countVowel);

function countVowel() {
    var getYourText = yourtextEle.value;
    var vowelCount = 0;
    getYourText = getYourText.toLowerCase();

    for (let i = 0; i < getYourText.length; i++) {
        var char = getYourText.charAt(i);
        if (isVowel(char) === true) {
            vowelCount++;

        }
    }
    var totalvowelsContent = `Total Vowels ${vowelCount}`;
    totalvowelsEl.textContent = totalvowelsContent;

}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);

}