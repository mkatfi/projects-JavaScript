function fibs(n) {
    let array = [];
    if (n >= 1) array.push(0);
    if (n >= 2) array.push(1);
    
    for (let i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2]);
                        //1 + 0 = 1
                        //1 + 1 = 2
                        //2 + 1 = 3
                        //3 + 2 = 5
                        //5 + 3 = 8
                        //8 + 5 = 13
    }
    
    return array;
}

console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let array = fibsRec(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
}

console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]



function mergeSort(array) {
    if (array.length <= 1) return array;
    
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
