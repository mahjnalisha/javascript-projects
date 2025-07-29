const livewordstextEl = document.getElementById("livewordstext");
const livewordcounterEL = document.getElementById("livewordcounter");
const livecharactercounterEL = document.getElementById("livecharactercounter");

livewordstextEl.addEventListener("input", () => {
    const characterCount = livewordstextEl.value.length;
    livecharactercounterEL.textContent = `${characterCount} characters`;

    const txt = livewordstextEl.value.trim();
    const wordArray = txt.split(/\s+/);
    let wordCountValue = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== '') {
            wordCountValue++;
        }
    }
    livewordcounterEL.textContent = `${wordCountValue} words`;

})