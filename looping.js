//while loop
/*
var numebr = 0;

while (numebr < 100){
    numebr += 1;
    console.log(numebr);

}
*/

for(let number = 0; number < 100; number++){

    console.log(number);
}

//data type

let yourAge = 18;
let yourName = 'vidura';
let name = {first: 'vidura', last: 'perera'}; //object
let listOfThings = ['apple', 'banana', 'oranges']; // array
let random; //undfined
let nothing = null; // value null


//strings in javaScript
let fruit = 'banana';
let moreFruit = 'banana\napple';
console.log(moreFruit);

console.log(fruit.length);
console.log(fruit.indexOf('z'));
console.log(fruit.slice(2, 4));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toLocaleUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));

//array

let = fruits = ['banana', 'apple', 'oranges', 'pineapple'];
fruits = new Array ('banana', 'apple', 'oranges', 'pineapple');

alert(fruits[3]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits);
console.log(fruits, fruits.push('blackberries'), fruits);
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift(); // remove first element from a list
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

// function return_name(yourname){
//     let result = 'hello' + ' ' + yourname;
//     console.log(result);
// }

// let user_name = prompt('what is your name');
// return_name(user_name);

let vegetables = ['asparages', 'tomato', 'broccoli'];

let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let sumNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5 ,334, 321, 2];
console.log(sumNumbers.sort(function(a, b){return a-b})); // return sorted acsending
console.log(sumNumbers.sort(function(a, b){return b-a})); // return sorted decsending


let emptyArray = new Array();
for(let num = 0; num < 10; num ++){
    emptyArray.push(num);
}

console.log(emptyArray);




// console.log(student.first);
// console.log(student.last);
// console.log(student.height);
// student.first = "notVidura";
// console.log(student.first);
// console.log(student.studentInfor());

// let age = prompt("what is your age");

// if((age >= 18) && (age <= 35)){
//     status = 'target demo';
//     console.log(status);
// }
// else{
//     status = 'not my audience';
//     console.log(status);
// }

// let day = 'monday';

// switch(day){
//     case 'sunday' :
//         text = 'weekend'
//         console.log(text); 
    
//     case 'monday' :
//         text = 'weekday';
//         console.log(text);
// }

// function type(){
//     let result = 'Hello World';
//     console.log(result);
// }

// function type_2(){
//     type();
// }

// type_2();

// let vehicleName;

// let printVehicleName = {
//       vehicle: 'hello',

//      getVehicleName: function(){
         
//      }
//     };
