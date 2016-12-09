console.log('#1. sum');

function sum(one, two) {
    return one + two;
}
console.log(sum(9, 8));


console.log('#2. avg');

function average(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum / nums.length;
}
console.log(average([7, 8, 10, 33]));


console.log('#3. greaterThan');

function great(first, second) {
    if (first < second) {
        return true;
    } else {
        return false;
    }
}
console.log(great(1,1000));


console.log('#4. secondLargest');

let largest = 0;

function secondLargest(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
}
console.log(secondLargest([1, 2, 3, 4]));


