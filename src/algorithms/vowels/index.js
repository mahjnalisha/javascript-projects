

function vowels(str) {
    const letters = str.split('');
    const vowelsCheck = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let l of letters) {
        if (vowelsCheck.includes(l.toLowerCase())) {
            vowelCount++;
        }
    }
    console.log(letters.length)
    return vowelCount;

}

function regularExpressionVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels('searching vowels in the sentence'));
console.log(regularExpressionVowels('searching vowels in the sentence'));