const buttonEl = document.getElementById("getReverseText");
const wordEl = document.getElementById("word");
const descriptionEl = document.getElementById("description");

buttonEl.addEventListener("click", () => {
    let reversed = '';
    const word = wordEl.value;
    for (let char of word) {
        reversed = char + reversed;
    }
    descriptionEl.textContent = reversed;
})


//using the reverse javascript 
function reverse() {
    const strToArray = wordEl.value.split('').reverse();
    const reversevalue = strToArray.join('');
    descriptionEl.textContent = reversevalue;
}

// using for loop 
function buildInReverse() {
    let reversed = '';
    const word = wordEl.value;
    for (let i = 0; i < word; i++) {
        reversed = word[i] + reversed;
    }
    descriptionEl.textContent = reversed;
}

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    descriptionEl.textContent = parseInt(reversed) * Math.sign(n);

}