

function capitalise(str) {

    const words = str.split(' ');
    const result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
}

function mapCapitalise(str) {
    let result = "";
    const words = str.split(' ');
    result = (words.map((s) => s[0].toUpperCase() + s.slice(1)).join(' '));
    return result;

}

console.log(mapCapitalise("this is the straight line"));