function pyramid(n) {
    let str = "";
    const column = Math.floor(2 * n - 1);
    const midpoint = Math.floor(column / 2);
    console.log(midpoint);
    for (let i = 1; i < n; i++) {
        let str = "";

        for (let j = 1; j <= column; j++) {
            if (j <= midpoint) {
                str += "#";
            }
            else {
                str += " ";
            }

        }
        console.log(str);
    }
}

console.log(pyramid(5))