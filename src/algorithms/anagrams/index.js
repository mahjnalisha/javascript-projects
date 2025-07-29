//anagrams ('coding money', 'money coding');

function anagrams(stringA, stringB) {
    const charmapA = charMap(stringA)
    const charMapB = charMap(stringB);
    if (Object.keys(charmapA).length !== Object.keys(charMapB).length) return false;

    for (let key in charmapA) {
        if (charmapA[key] != charMapB[key]) return false
    }
    return true;
}
function anagramsMethod2(stringA, stringB) {
    const charMapA = sortAlphabetical(stringA);
    const charMapB = sortAlphabetical(stringB);
    return (charMapA === charMapB)
}
function sortAlphabetical(string) {
    return string.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}
function charMap(str) {
    const charmap = {}
    str = str.toLowerCase().replace(/[\W]/g, '')
    for (let char of str) {
        charmap[char] = ++charmap[char] || 1
    }
    return charmap;
}


console.log(anagramsMethod2('coding mowerweney', 'monwerweey coding'))