//Унарні оператори//
let x = 3;
console.log(+x);
console.log(-x);
x++;
console.log(x);
x--;
console.log(x);
let isTrue = false;
console.log(!isTrue);
let y = 1;
console.log(~y);
//Бінарні оператори//
let a = 5;
let b = 3;
console.log(a + b);
console.log(a - b); 
console.log(a * b); 
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let c = 5;
let d = '5';
console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c !== d);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

let isOnline = true;
let isAdmin = false;
console.log(isOnline && isAdmin); 
console.log(isOnline || isAdmin);

let e = 5;
let f = 3;
console.log(e & f);
console.log(e | f);
console.log(e ^ f);
console.log(e << 1); 
console.log(e >> 1);

let g = 8;
g += 6;
console.log(g);
g -= 3;
console.log(g);
g *= 4;
console.log(g);
g /= 2;
console.log(g);
g %= 3;
console.log(g);
//Тернарні оператори//
let age = 15;
let isTeenager = (age >= 13 && age <= 19) ? "Yes" : "No";
console.log(isTeenager);

let num = -3;
let numberType = (num > 0) ? "Positive" : (num < 0 ? "Negative" : "Zero");
console.log(numberType);

let temperature = 10;
let weatherCondition = (temperature > 30) ? "Hot" : (temperature < 10 ? "Cold" : "Pleasant");
console.log(weatherCondition);
