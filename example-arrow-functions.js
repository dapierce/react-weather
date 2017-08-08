// var names = ['David', 'Tisha', 'Tom'];
// //
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrow', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('David'));
//
// var person = {
//   name: 'David',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(2, 2));
console.log(addStatement(2, 2));
console.log(addExpression(2, 2));
