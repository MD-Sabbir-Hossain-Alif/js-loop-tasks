//* Task - 1 Solution: (commitment)
//  TODO: I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

for(let i = 1; i <= 60; i++) {
    console.log(`${i} -> I will invest at least 6 hrs every single day for next 60 days!`);
}

/* ------------------------------ Task Divider ------------------------------ */
//* Task - 2 Solution: (odd even)
//  TODO: 1. Find all the odd numbers from 61 to 100. 2. Find all the even numbers from 78 to 98.

// Subtask - 1:
for (let i = 61; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    };
}

// Subtask - 2:
for(let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* ------------------------------ Task Divider ------------------------------ */
//* Task - 3 Solution: (sum of odd numbers)
//  TODO: 1. Display sum of all the odd numbers from 91 to 129. 2. Display sum of all the even numbers from 51 to 85.

// Subtask - 1:
let sumOdd = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sumOdd += i;
    };
}
console.log(sumOdd); // Output: 2756

// Subtask - 2:
let sumEven = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    };
}
console.log(sumEven); // Output: 13674

/* ------------------------------ Task Divider ------------------------------ */
//* Task - 4 Solution: (multiplication table)
//  TODO:  Generate a multiplication table for number 9

const number = 9;
for (let i = 1; i <= 10; i++) {
    let multTable = i * number;
    console.log(`${i} * ${number} = ${multTable}`);
}

/* ------------------------------ Task Divider ------------------------------ */
//* Task - 5 Solution: (multiplication table)
//  TODO:  Implement a countdown timer that counts down from 81 to 65.

for (let count = 81; 65 <= count; count--) {
    console.log(count);
}
