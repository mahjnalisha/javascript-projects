// chunk the arrays
// chunk([1,2,3], 2) --> [1,2], [3]
// [ [ 1, 2, 3 ], [ 4 ] ]


function chunkarray1(array, size) {
    const result = [];

    for (let i = 1; i <= size + 1; i++) {
        result.push(array.slice(0, i));
    }

    return result;
}


function chunkarray(array, size) {
    const result = []
    let index = 0
    while (index < array.length) {
        result.push(array.slice(index, index + size))
        index += size;
    }
    return result;
}

console.log(chunkarray([1, 2, 3, 4], 3));