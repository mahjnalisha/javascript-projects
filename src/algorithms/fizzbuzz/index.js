
function fizzbuzz(numbers) {

    for (let number = 1; number <= numbers; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('fizzBuzz');
        } else if (number % 3 === 0) {
            console.log('fizz')
        } else if (number % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(number);
        }
    }
}

console.log(fizzbuzz(15));