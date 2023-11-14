//! Opción 1

let array = [9, 3, 1, 4, 2, 8, 7, 6, 5];

console.log(array);

let min_pos, temp;
let i;
let n = array.length;

function Minor(list, length, position) {
    let new_list = list.slice(position, length);
    let minor = Math.min(...new_list);
    let min_position = list.indexOf(minor);
    return min_position;
}

for(i = 0; i < n - 1; i++) {
    min_pos = Minor(array, n, i);
    temp = array[i];
    array[i] = array[min_pos];
    array[min_pos] = temp;
}

console.log(array);

//! Opción 2

// let array = [9, 3, 1, 4, 2, 8, 7, 6, 5];

// console.log(array);

// let min_pos, temp;
// let i;
// let size = array.length;

// for(i = 0; i < size - 1; i++) {
//     let min = Math.min(...array.slice(i));
//     min_pos = array.indexOf(min)
//     temp = array[i];
//     array[i] = min;
//     array[min_pos] = temp;
// }

// console.log(array);