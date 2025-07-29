function stepsString(n) {
    let str = "";
    for (let i = 1; i < n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            if (j <= i) {
                str += "#";
            }
            else {
                str += " ";
            }

        }
        console.log(str);
    }
}

console.log(stepsString(5))