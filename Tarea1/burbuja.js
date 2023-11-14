let array = [9, 3, 1, 4, 2, 8, 7, 6, 5];

console.log(array);

let j, i;
let n = array.length;

let current = 0, next = 0;

for(j = 1; j < n; j++) {
    for(i = 0; i < n - 1; i++) {
        current = array[i];
        next = array[i + 1];
        if(current > next) {
            array[i] = next;
            array[i + 1] = current;
        }
    }
}

console.log(array);