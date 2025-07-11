// intialize  the count as 0.


// listen for clicks on the increment button. done by creating an onclick in the html in the button and
// there giving this function name.
// increment the count variable when the button is clicked  below code does that
// change the count in the HTML to reflect the new count



let count = 0;
const countElement = document.querySelector("#counter");
const saveElement = document.querySelector("#saveEl");
const increment = () =>{
    count += 1;
   countElement.textContent = count;
   //console.log("incrementedBy  " + count);
}

const decrement =()=>{
    count -= 1;
    countElement.textContent = count;
    //console.log("decrementedTo  " + count);
}



const save =()=>{
    if(count <= 0){
    document.querySelector("#error").textContent = "!!Zero and Negative values are not valid.";
    } else{
    document.querySelector("#error").style.display = "none";
    document.querySelector("#hide").style.display = "block";
    let save = count + " - ";
    saveElement.textContent += save;
    count = 0;
    countElement.textContent = 0;
    }
}

// calculator
const hide = $("#hide2");
const value1= $("#value1");
const value2= $("#value2");
const results = $("#result");
const addBtn = $("#add-btn");
const subBtn = $("#subtract-btn");
const multiplyBtn = $("#multiply-btn");
const divisionBtn = $("#division-btn");
const errorEl =$("#error-el");



addBtn.on("click", function(){  
  const addV1 = value1.val().trim();
  const addV2 = value2.val().trim();
  hide.addClass("d-none");
    errorEl.empty();
  if(addV1 !== "" && addV2 !== ""){
    const solution = Number(addV1) + Number(addV2);
    results.text(solution);
    hide.removeClass("d-none");
    value1.val("");
    value2.val("");
}else{
    hide.removeClass("d-none");
    results.empty();
     errorEl.append(`
        <p class="text-center text-danger">Please enter some data</p>`)
}
});

subBtn.on("click",function(){
    const subV1 = value1.val().trim();
    const subV2 = value2.val().trim();
    hide.addClass("d-none");
    errorEl.empty();
  if(subV1 !== "" && subV2 !== ""){
    const solution = Number(subV1) - Number(subV2);
    results.text(solution);
    hide.removeClass("d-none");
    value1.val("");
    value2.val("");
}else{
    hide.removeClass("d-none");
    results.empty();
     errorEl.append(`
        <p class="text-center text-danger">Please enter some data</p>`)
}
});

multiplyBtn.on("click", function(){
    const mulV1 = value1.val().trim();
    const mulV2 = value2.val().trim();
    hide.addClass("d-none");
    errorEl.empty();
  if(mulV1 !== "" && mulV2 !== ""){
    const solution = Number(mulV1) * Number(mulV2);
    results.text(solution);
    hide.removeClass("d-none");
    value1.val("");
    value2.val("");
}else{
    hide.removeClass("d-none");
    results.empty();
     errorEl.append(`
        <p class="text-center text-danger">Please enter some data</p>`)
}
})

divisionBtn.on("click", function(){
    const diviV1 = value1.val().trim();
    const diviV2 = value2.val().trim();
    hide.addClass("d-none");
    errorEl.empty();
  if(diviV1 !== "" && diviV2 !== ""){
    if(Number(diviV2) === 0){
        hide.removeClass("d-none");
        results.empty();
        errorEl.append(`
        <p class="text-center text-danger">Division by '0' is not possible.</p>`)
    }else{
    const solution = Number(diviV1) / Number(diviV2);
    results.text(solution);
    hide.removeClass("d-none");
    value1.val("");
    value2.val("");
}
}else{
    hide.removeClass("d-none");
    results.empty();
     errorEl.append(`
        <p class="text-center text-danger">Please enter some data</p>`);
}
})


// end


const imageEl = document.querySelector("#image-el");


const images = [
    "icon.svg",
    "icon.svg",
    "icon.svg"
];

let image = "";

for(let i=0; i< images.length; i++){
  image += `<img src = "${images[i]}" alt ="image" >`;
}

imageEl.innerHTML= image;

