
// let lapsCompleted = 0;

// const increment = ()=>{
//     lapsCompleted += 1;
//     console.log(lapsCompleted);
// }

// increment();
// increment();
// increment();


// let lapsCompleted = 0;

// const increment = ()=>{
//     lapsCompleted += 1;
// }

// increment();
// increment();
// increment();

//   console.log(lapsCompleted);


// let myFood = "chocolate cake";

// if(myFood === "Banana" || myFood === "Apple"){
//     console.log("Eat fruits everyday to keep your health.");
// }
// if(myFood === "chocolate cake"){
//     console.log("Enjoy the sweet treat.");
// // }

// switch(myFood){
//     case "Banana":
//     case "Apple":
//         console.log("Eat fruits everyday to keep your health.");
//         break;
//     case "chocolate cake":
//         console.log("Enjoy the sweet treat.");
//         break;
// }


// let grade = "A";

// if(grade === "A"){
//     console.log("you got an A, so here's a chocolate for you!.");
// }
// else if(grade === "B"){
//     console.log("you got an B, so here's a cookie for you!.");
// }
// else if(grade === "c"){
//     console.log("There is room for improvement, so you will get an candy!.");
// }
// else{
//     console.log("No reward to give!.");
// }


// switch(grade){
//     case "A":
//         console.log("you got an A, so a chocolate ");
//         break;
//     case "B":
//         console.log("you got an B,so a cookie for you");
//         break
//     case "C":
//         console.log("you got an C, so a candy for you ");
//         break;
//     default:
//         console.log("No rewards to give");
// }


// for(let x = 0; x < 10; x++){
//     console.log(x);
// }

// let heads = 0;
// let tails = 0;

// for(x = 1; x <= 10; x++) {
//     if(Math.random() < 0.5){
//         tails++;
//     } else{
//         heads++;
//     }
// }

// console.log("Coin is tossed 10 times.");
// console.log(`Number of heads ${heads}`);
// console.log(`Number og tails ${tails}`);

// let i = 0;

// while (i < 6) {
//   console.log(`The value of i = ${i}`);
//   i++;
// }

// in this the isheads is false in the variable and in the while loop,
// it becomes true by this [!], if the isHeads in the loop returns true and the isHeads is updated to true,
// the in the condition it becomes false and the loop is not executed.

// let flips = 0;
// let isHeads = false;

// while(!isHeads){
//     flips++;
//     isHeads = Math.random() < 0.5;
// }

// console.log(`It tool ${flips} flips land on the heads.`);

//           Loops

// for( i = 1; i <= 5; i++){
//     let star = "";
//     for(j = 1; j <= i; j++){
//         star += " *";
//     }
//     console.log(star);
// }


// for( i = 1; i <= 5; i++){
//     let star = "";
//     for(j = 5; j >= i; j--){
//         star += " *";
//     }
//     console.log(star);
// }


//               Arrow Functions

// const calculateSquare = (side) =>{

//     console.log("The square side is " + side);
//     let area = side * side;
//     console.log("The area of the square is " + area);
//     let peri = 4 * side;
//     console.log("The perimeter of square is " + peri);
// }

// calculateSquare(8);



//            Objects in javaScript

// let person = {
//     name: "jhonDoe",
//     age:25,
//     greet: function(){
//         console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// person.greet();
// // add a property
// person.category = "student";

// // prints with the new property
// console.log("After adding a property ")
// console.log(person);

// // modify a property

// person.name = "Nathen";

// console.log("After modifying a property")
// console.log(person);

// // delete a property

// delete person.category;


// console.log("After deleting an property ");
// console.log(person);


// var arr = [];
//  for(var i = 0; i < 5; i++){
//     if(i>2) break;
//     arr.push(i);
//  }
//  console.log(arr);

// The gets the property key and through the key we get the value by the person[x] and place it in the text.

// let person = {name:"hi", age:20,cat:"student"};

// let text = "";

// for(let x in person){
//     text +=person[x];
//     console.log(x);
// };
// console.log(text);

// let cards = [2,3,4,5];


// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }

// let person ={
//     name: "hello",
//     age: 30,
//     country: "india",
//     logData: function(){
//         console.log(`My name is ${this.name} age is ${this.age} and i am from ${this.country}`);
//     }
// }


// person.logData();

// just use the lessthan than the and(&&) logical operator 

// let age = 20;

// if(age < 6){
//     console.log("free");
// }else if(age >= 6 && age <= 17){
//     console.log("children discount");
// }else if(age >= 18 && age <= 26){
//     console.log("student discount");
// }else if(age >= 27 && age <= 66){
//     console.log("full price");
// }else{
//     console.log("senior discount");

// }


//  let age = 68;

// if(age < 6){
//     console.log("free");
// }else if(age < 18){
//     console.log("children discount");
// }else if(age < 27){
//     console.log("student discount");
// }else if(age < 67){
//     console.log("full price");
// }else{
//     console.log("senior discount");

// }

// Game of Rock Paper scissors.

// let rpcGame = ["Rock","Paper","scissors"];

// const random =()=>{
//    randomEl = Math.floor(Math.random()*3);
//     return rpcGame[randomEl];
// }

// console.log(random());


// let fruits = ["apple", "orange", "apple", "apple", "orange"];
// let apple ="Apple Box = ";
// let orange ="Orange Box = ";

// const sort =()=>{


// for(let i = 0; i < fruits.length; i++){
//      result = fruits[i];

//     if(result === "apple"){
//         apple +=  result + " ";
//     }else{
//         orange += result + " ";
//     }
// }

// console.log(apple);
// console.log(orange);

// }


// sort();





// const player = "person";
// const opponent = "nick";
// const game = "AF";
// let points = 0;
// let hasWon = false;


// points += 100;
// hasWon = true;

// if(hasWon){
//     console.log(`the winner is ${player}`);
// }else{
//     console.log(`the loser is${opponent}`)
// }



// function generateSenetence(dsk,arr){
//     let arrData = "";
//     const lastIndex = arr.length - 1;
//     for(let i=0; i < arr.length; i++){
//         if(i === lastIndex){
//             arrData += arr[i];
//         }else{
//              arrData += arr[i] + ", ";
//         }
//     }

//     return `The ${arr.length} ${dsk} are ${arrData}.`;
// }


// const sentence = generateSenetence("largest Countries", ["china", "India", "USA"]);
// console.log(sentence);



//  reduce() and map() in the javascript.

// reduce method in this it takes two prameters(i think these are parameters)
// const fruits = ['apple', 'orange', 'banana', 'apple', 'banana'];


// const fruitCount =
//     fruits.reduce((acc, curr)=>{
//         acc[curr] = (acc[curr] || 0) + 1;

//         return acc;
//     },{});

//     console.log(fruitCount);


// const num =[1,2,3,4,5,6];
// const square = num.map((data)=>data*data);
// console.log(square);