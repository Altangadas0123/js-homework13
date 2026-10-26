// =======================================================================
// const run = (callback) => callback();

// run(() => console.log(100));
// =======================================================================
// const sendName = (name, callback) => callback(name);

// sendName("Бат", (name) => console.log(`Сайн уу, ${name}!`));
// =======================================================================
// const processNumber = (number, callback) => callback(number);

// processNumber(5, (number) => console.log(number * 2));
// processNumber(4, (number) => console.log(number ** 2));
// processNumber(10, (number) => console.log(number - 3));
// =======================================================================
// const calculate = (a, b, callback) => callback(a, b);

// calculate(8, 3, (a, b) => console.log(a + b));
// calculate(8, 3, (a, b) => console.log(a - b));
// calculate(8, 3, (a, b) => console.log(a * b));
// =======================================================================
// const chooseAction = (condition, onTrue, onFalse) => {
//   if (condition) {
//     onTrue()
//   } else {
//     onFalse()
//   }
// };

// chooseAction(false, 
//   () => console.log("Зөвшөөрсөн"), 
//   () => console.log("Татгалзсан")
// );
// =======================================================================
// const result = (text) => text.replace("cat", (match) => match.toUpperCase());

// console.log(result("cat and cat"));



// const result = (text, callback) => {
//   return callback(text);
// };

// console.log(result("cat and cat", (t) => t.replace("cat", (match) => match.toUpperCase())));
// =======================================================================
// const result = (text) => text.replaceAll("hi", (match) => match.toUpperCase());

// console.log(result("hi hi"));


// const result = (text, callback) => callback(text);

// console.log(result("hi hi hi", (a) => a.replaceAll("hi", (match) => match.toUpperCase())));
// =======================================================================
// const result = (text, price) => text.replaceAll("{price}", price + "₮");

// console.log(result("{price} + {price}", 800));




// const result = (text, price, callback) => callback(text, price);

// console.log(result("{price} + {price}", 800, (a, p) => a.replaceAll("{price}", p + "₮")));
// =======================================================================
// const result = (text) => text.forEach((element, index) => console.log(`${index + 1}. ${element}`)
// );

// result(["Талх", "Сүү"]);



// const result = (text, callback) => callback(text);

// result(["Талх", "Сүү"], (items) => {
//   items.forEach((element, index) => {
//     console.log(`${index + 1}. ${element}`);
//   });
// });
// =======================================================================
// const result = (mins) => mins.map(element => element * 60);

// console.log(result([1, 2, 5]));


// const result = (mins, callback) => callback(mins);

// console.log(
//   result([1, 2, 5], (items) => {
//     return items.map((element) => element * 60); 
//   })
// );
// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

// =======================================================================

