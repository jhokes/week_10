const numbers = [1, 4, 7];

const getAverage = arr => {
    const reducer = (total, currentValue) => total +currentValue;
    const sum = arr.reduce(reducer);
    
    return sum / arr.length;
} 
const average = getAverage(numbers);

console.log (average);
