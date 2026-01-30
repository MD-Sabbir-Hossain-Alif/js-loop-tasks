//* Task - 1 Solution: (commitment)
//  TODO: I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

let i = 1
while (i <= 60) {
    console.log(`${i} -> I will invest at least 6 hrs every single day for next 60 days!`);
    i++
}

/* ------------------------------ Task Divider ------------------------------ */
//* Task - 2 Solution: (odd even)
//  TODO: 1. Find all the odd numbers from 61 to 100. 2. Find all the even numbers from 78 to 98.

// Subtask - 1:
let n = 61;
while (n <= 100) {
    if (n % 2 === 1) {
        console.log(n);
    };
    n++;
}

// Subtask - 2:
let p = 78;
while (p <= 98) {
    if (p % 2 === 0) {
        console.log(p);
    }
    p++;
}


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 3 Solution: (sum of odd numbers)
//  TODO: 1. Display sum of all the odd numbers from 81 to 131. 2. Display sum of all the even numbers from 206 to 311.

// Subtask - 1:
let q = 81;
let sumOdd = 0;
while (q <= 131) {
    if (q % 2 === 1) {
        sumOdd += q;
    };
    q++;
}
console.log(sumOdd); // Output: 2756

// Subtask - 2:
let r = 206;
let sumEven = 0;
while (r <= 311) {
    if (r % 2 === 0) {
        sumEven += r;
    };
    r++;
}
console.log(sumEven); // Output: 13674


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 4 Solution: (multiplication table)
//  TODO:  As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

const number = 5;
let m = 1;
while (m <= 10) {
    let multTable = m * number;
    console.log(`${m} * ${number} = ${multTable}`);
    m++;
}


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 5 Solution: (multiplication table)
//  TODO:  Implement a countdown timer that counts down from 21 to 15.


let count = 21;
while(15 <= count) {
    console.log(count);
    count--;
}
