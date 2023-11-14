function quickSort(array) {
    let pivot = array[0];
    let leftArray = [];
    let rigthArray = [];
    let newArray = [];

    if(array.length < 1) return [];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) leftArray.push(array[i]);
        if(array[i] > pivot) rigthArray.push(array[i]);
    }

    return newArray.concat(quickSort(leftArray), pivot, quickSort(rigthArray));
}

let array = [9, 3, 1, 4, 2, 8, 7, 6, 5];

console.log(quickSort(array));

