function palindrome(words) {
    let reverseValue = "";
    for (let char of words) {
        reverseValue = char + reverseValue
    }
    if (reverseValue === words) {
        return 'palindrome';
    } else {
        return 'nonpalindrome';
    }
}

console.log(palindrome('cbc'));

function palindromearray(word) {
    let reversed = "";
    reversed = word.split('').reverse().join('');
    return reversed === word;

}

console.log(palindromearray('kayak word'));

function isPalindromeTwoPointer(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromeTwoPointer('kayak'));