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
let array = [1, 4, 8, 15, 2];

function secondLargest(array) {
    // This is finding the largest number.
    for (let i = 0; i < array.length; i++) {
        if (largest < array[i]) {
            largest = array[i];
        }
    }
    // This is copying over the largest number.
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (largest !== array[i]) {
            newArray.push(array[i]);

        }
    }
    largest = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (largest < newArray[i]) {
            largest = newArray[i];
        }
    }
    return largest;
}
console.log(secondLargest(array));

// let array = [1, 4, 8, 15, 2];
// function secondLargest(array) {
//    let sortedArray = array.sort(); 
//   console.log(sortedArray);
//    return sortedArray[array.length - 2];
//  }
//  console.log(secondLargest(array));


console.log('#5. containsVowel');

// Need to figure out how to compare the letters array to the vowels array

let word = 'dog';
let vowel =  ['a', 'e', 'i', 'o', 'u'];
let letters = word.split("");

function containsVowel(word) {
    
    for (let i = 0; i < vowel.length; i++) {
        if (letters[i] === vowel[i].length) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(containsVowel(word));

console.log('#6. piglatin');

let string = 'cloud'
let cloud = string.split(''); // Makes an array containing letters from variable 'string'.
let newstring = cloud.push([0] + 'ay'); // Pushes characters to end of original string
                                        // Convert position of index into string.
function piglatin(string) {
    if (i = cloud[0]) {
        cloud.splice([0]);
        
    }    
    return newstring;
}
console.log(piglatin(string));


console.log('#7. longestWord');

function longestWord(sentence) {
    // 1. Convert sentence into an array
    // 2. Search through the words for the largest letter count
    // 3. Once we've checked them all, return the longest one
    let words = sentence.split(' ');    // array of strings
    let longest = 0;                    // the length of the longest word so far
    let keeper = null;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
            keeper = words[i];
            console.log('found a new longest: ' + keeper);
        } 
    }
    
    return keeper;
}

let winner = longestWord('how much wood would a woodchuck chuck?');
console.log(winner);
//let sentence = 'how much wood would a woodchuck chuck?';
//let words = sentence.split('.');

//console.log(sentence.split(''))

console.log('#8. divisors');


console.log('#9. weave');

function weave()  // Input: A string and a number.
                  // Output: Every 'x'th character is replaced by 'x'.