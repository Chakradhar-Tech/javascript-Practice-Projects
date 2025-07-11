const switchEl = document.querySelector("#switchButton");
const dropdown = document.querySelector("#dropdown-el");
const date = document.querySelector("#date");
const nameEl = document.querySelector("#name-el");

const formEl = document.querySelector("#form-el");
const showData = document.querySelector("#form-data");

const clickEl = document.querySelector("#click-el");

const nameData = document.querySelector("#output-name");
const statusData = document.querySelector("#output-status");
const radioData = document.querySelector("#output-radio");
const switchData = document.querySelector("#output-switch");
const dateData = document.querySelector("#output-date");

clickEl.addEventListener("click", function(){
    formEl.style.display = "block";
})

formEl.addEventListener("submit", function(e){
    e.preventDefault();
    // showData.style.display = "block";
    render();
})

const render = ()=>{
    
   let nameVal = nameEl.value;
    // nameData.innerHTML = "Name : " + `<span class="fw-bold">${nameVal}</span>`;
    console.log("Name: " + nameVal);
   let dropVal = dropdown.value;
    // statusData.innerHTML = "Status : " + `<span class="fw-bold">${dropVal}</span>`;
    console.log("Status: " + dropVal);


    const radioEl = document.querySelector('input[name="option"]:checked');
    if(radioEl){
        radioVal = radioEl.value;
        console.log("Radio: " + radioVal)
        // radioData.innerHTML = "Radio : " + `<span class="fw-bold">${radioVal}</span>`;
    }else{
        console.log("No radio is selected.");
    }


    // switchVal = switchData.innerHTML =
    console.log( "Switch : " + `${(switchEl.checked ? "On": "Off")}`);

    dateVal = date.value;
    // dateData.innerHTML = "Date : " + `<span class="fw-bold">${dateVal}</span>`;
    console.log("Date: " + dateVal);
}
