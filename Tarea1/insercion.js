let array = [9, 3, 1, 4, 2, 8, 7, 6, 5];

let j, i;
let n = array.length;
let temp;

for (j = 1; j < n; j++) {
    temp = array[j];
    i = j - 1;
    while((array[i] > temp) && (i >= 0)) {
        array[i+1] = array[i];
        i--;
    }
    array[i+1] = temp;
}