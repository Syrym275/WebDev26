// 2.1
// alert( "I'm JavaScript!" );

// alert(3 +
// 1
// + 2);

// 2.4
// let admin = 'John';

// let name = admin;
// alert(name);

// 2.5
// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

// let name = prompt('whats your name', '');

// alert(`You are ${name}!`); // You are 100 years old!

// 2.8
// let a = 1, b = 1;

// alert( ++a ); // 2, prefix form returns the new value
// alert( b++ ); // 1, postfix form returns the old value

// alert( a ); // 2, incremented once
// alert( b ); // 2, incremented once


// 2.9
// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false


//2.10
// if ("0") {
//   alert( 'Hello' );
// }

// let value = prompt('What is the "official" name of JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Right!');
//     } else {
//       alert("You don't know? ECMAScript!");
//     }

// 2.11
// alert( null || 2 || undefined );


// 2.13
// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (++i < 5) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }


// 2.14
// if(browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//   case 1:
//     alert( 1 );
//     break;

//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }


// 2.15
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//   alert( pow(x, n) );
// }
