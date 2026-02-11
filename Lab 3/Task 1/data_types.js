


// 5.1
// let str = "Hello";

// str.test = 5; // (*)

// alert(str.test);


// 5.2
// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );

// alert( 1.35.toFixed(20) ); // 1.35000000000000008882

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Read: ${readNumber()}`);

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }


// 5.3
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("john") ); 


// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }


// 5.4
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// alert( fruits.length );


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();


// 5.5
// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now sorted is: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// 5.9
// function sumSalaries(salaries) {

//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//   return Object.keys(obj).length;
// }


// 5.10
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// function topSalary(salaries) {

//   let maxSalary = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }



// 5.11
// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 Jan 2014
// alert( getWeekDay(date) );


// 5.12
// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));


