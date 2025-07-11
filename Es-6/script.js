// This is destructuring of objects
// const personalInformation ={
//     firstName:"userfirstname",
//     lastName:"default",
//     city:"hyderabad",
//     state:"telengana",
//     zipCode:"numbers"
// }

// //   The column is used to re-assign the value firstName as fn.
// const {firstName: fn, lastName: ln} = personalInformation;

// console.log(`${fn} ${ln}`)

// Destructuring of arrays

// let [firstName, middleName, lastName] = ["jolly", "molly", "dolly"]

// middleName = "tolly";
// console.log(middleName);


//      Object literal if the both key and value passing are the same the don't need to specify or write duplicate code.


// const addressMaker =(country, state)=>{
//    const newAddress = {country, state};
//    return newAddress
// }

// let address = addressMaker("India", "Telangana");
// console.log(address);


// example of object literal, template literals and Destructuring.

// const addressMaker =(address)=>{
//     const {country, state} = address;
//     const newAddress = {
//         country,
//         state,
//         city:"Hyderabad"
//     }
//     console.log(`${newAddress.country}, ${newAddress.state}, ${newAddress.city}`);
// }

// addressMaker({country:"India",state:"Telangana"});



//         The for of loop  and this is only used to iterate in a loop you can't assign or change the values with it.

// let fullName =[6000, 5464, 8569];

// for( const letter of fullName){
//     console.log(incomes);
// }


// example of changing the values this does not work.
// let incomes =[6000, 5464, 8569];

// for( let income of incomes){
//     income += 5000;
// }
//    console.log(incomes);


//    This is spread operator


// let example1 = [1,2,3,4,5,6,7,8,9];
// let example2 =[...example1];
// // This spread opertor creates a new array based on the given array, that is why the true is not passed to the example1.
// example2.push(true);
// console.log(example1);
// console.log(example2);

// spread operator with objects

// let obj1 = {
//     firstName:"usename",
//     address:"user address"
// }

// let obj2 ={
//     ...obj1
// }

// console.log(obj2);

// Rest operator used to pass multiple arguments.

// with rest operator
// const add =(...nums)=>{
//     console.log(nums);
// }

// add(1,2,5,8,8,5)

// // without the rest operator

// const subtract=(nums)=>{
//     console.log(nums);
// }

// subtract(3,5,5,6);


// Arrow function:- using the arrow function in the reduce method.

// const add =(...nums)=>{
//     let total = nums.reduce((x, y)=>x+y);
//     console.log(total);
// }

// add(1,2,5,8,8,5)

// default param
// explanation:- in this if there is no array is given an empty array wil be taken and the total is set to zero 
//               num.Array.forEach((elememt)) gets a single value and temperoraly stores it in element then it is
//               added to the total and saved into the total and then it gets another value in the array and repeats the process again.


// const add=(numArray= [])=>{
//     let total = 0;
//     numArray.forEach((element)=>{
//         total += element;
//     });
//     console.log(total);
// }

// add();

//     Includes method it similar to the indexOf method but, it gives the boolean value.

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(4));

    //  this the export method used to send data to another file.(need type="module" in html file script tag to work);
    // export const data = [1,23,3];

//  The padStart() and  padEnd() i think it is about the fixed length.
    // let example = "Dylan walker";
    // let test = "Dylan";
    // console.log(example.padStart(10, "a"));
    // console.log(example.padEnd(10, "b"));
    // console.log(test.padStart(10, "a"));
    // console.log(test.padEnd(10, "b"));
    // console.log(example.padStart(100).length);


    // The classes in javaScript


    // export class Animal{
    //     constructor(type, color){
    //         this.type=type;
    //         this.color=color;
    //     }
    //     sound(noise= "sound" ){
    //         return `It is a ${this.type} and it's ${this.color} color, making a ${noise}`;
    //     }
    //     get data(){
    //         return `The Data is
    //         type =  ${this.type} and color = ${this.color}`;
    //     }
    //     static default(){
    //         return "Enter an animal information.";
    //     }
    // }

    // export class Cat extends Animal{
    //     sound(noise= "meow"){
    //         return `It is a ${this.type} and it's ${this.color} color, making a ${noise} sound.`;
    //     }
    // }

//  This only works if you give an valid api key or url not the random url like youtube i gave.

    // const apUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=VIDEO_ID&key=YOUR_API_KEY";
    // function getData(){
    //     fetch(apUrl)
    //     .then((r)=> r.json())
    //     .then((json) => {
    //         console.log(json[0])
    //     }).catch((error) => {
    //      console.log("failed", error.message); });
    // }
    // getData();

//  This is async function we use the promise to tell the code that i will give value wait
//  then resolve will send a value after some process then the value is sent to the callback
//  function .then and it is stored in the function parameter and logged out.
    // function resolveAfter3Seconds() {
    //     return new Promise(resolve=>{
    //         setTimeout(()=>{
    //             resolve('resolved');
    //         }, 3000);
    //     });
    // }

    // // resolveAfter3Seconds().then((data) => {
    // //         console.log(data);
    // // });

    // // Getting data using the ajax now 
    // async function getAsyncData(){
    //     const result  = await resolveAfter3Seconds();
    //     console.log(result);
    // }
    // getAsyncData();

//  sets only use the unique values like in a array of [1,1,1,3,3] the set take it as [1,3] it ignores the extra values
// methods
// size- gives length
// add- adds a value to the set 
// delete - deletes a value in the set and returns a Boolean 
// clear- deletes all the values in the set

// const example = new Set([1,1,1,3,3,3]);
// example.add(5);
// console.log(example.delete(1));
// example.clear();
// console.log(example.size)

//  Now learning the asynchronous javascript from the net ninjas course.
//  start-------->

// const getTodos = (response) =>{
// return new Promise((resolve, reject) =>{

//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', ()=>{
//             if(request.readyState === 4 && request.status ===200){
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             }else if(request.readyState === 4){
//                 reject("getting a error in the resource");
//             }
//         });
//         request.open('GET', response);
//         request.send();
//     });
// }

// getTodos("todos.json").then(data =>{
//     console.log("promise resolved: ", data);
//     return getTodos("todos2.json");
// }).then(data =>{
//     console.log("promise 2 resolved: ", data);
//     return getTodos("todos3.json");
// }).then((data) =>{
//     console.log("promise 3 resolved: ", data);
// }).catch(err =>{
//     console.log("promise rejected: ", err);
// })

// getTodos("todos.json").then(data =>{
//     console.log(data);
// });


//         This is a experiment by don't know full details but know how it works.
// const getTodos = (response) =>{
//       return fetch(response)
//         .then((r) =>r.json())
// }


// promise examples

// const getSomething = () =>{
//     return new Promise((resolve, reject) =>{
//         // fetch some data.
//         resolve("some data");
//         // reject("some error");
//     });
// };

// a bit confusing if you use this for chaining.

// getSomething().then((data) =>{
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// so, we use this method

// getSomething().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });


// The fetch api method

// fetch("todos.json").then((response) =>response.json())
// .then((data)=>{
//     console.log("Data: ", data);
// }).catch((err)=>{
//     console.log("error: ", err)
// });

// fetch("todos2.json").then((response) => {
//     console.log("resolved", response);
//     return response.json();
// }).then((data)=>{
//     console.log("Data2: ",data);
// }).catch((err) =>{
//     console.log("error: ",err);
// });

// async and await.

const getTodos = async () =>{
    const response = await fetch("todos.json");
    if(response.status !== 200){
        throw new Error("cannot fetch the data");
    }
    const data = await response.json();
    return data;
}
getTodos()
    .then(data =>console.log("resolved: ", data))
    .catch(err => console.log("error: ", err));
    
