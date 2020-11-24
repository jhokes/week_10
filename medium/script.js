const numbers = [4, 5, 6, 7, 0, 1, 2];

const getIndex = (arr, target) => {
    const index = arr.indexOf(target);
    return index;
} 

const index = getIndex(numbers, 0);

console.log (index);