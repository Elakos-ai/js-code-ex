let num = parseInt(prompt("Enter a number:"));

// 14
let divisors = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i);
  }
}
console.log("Divisors:", divisors);

// 15
console.log("Number of divisors:", divisors.length);

// 16
let sumDiv = 0;
for (let i = 0; i < divisors.length; i++) {
  sumDiv += divisors[i];
}
console.log("Sum of divisors:", sumDiv);

// 17
let prodDiv = 1;
for (let i = 0; i < divisors.length; i++) {
  prodDiv *= divisors[i];
}
console.log("Product of divisors:", prodDiv);

// 18
let strNum = String(num);
console.log("Number of digits:", strNum.length);

// 19
let sumDigits = 0;
for (let i = 0; i < strNum.length; i++) {
  sumDigits += Number(strNum[i]);
}
console.log("Sum of digits:", sumDigits);

// 20
let prodDigits = 1;
for (let i = 0; i < strNum.length; i++) {
  prodDigits *= Number(strNum[i]);
}
console.log("Product of digits:", prodDigits);