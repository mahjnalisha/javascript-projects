const characterEl = document.getElementById("character");
const totalCountEl = document.getElementById("total_character_count");
characterEl.addEventListener("input", characterCount);

function characterCount() {

    let charCount = characterEl.value.length;
    totalCountEl.textContent = `${charCount} input Character`;

}