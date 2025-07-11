let myLeads = [];

const tabBtn = document.querySelector("#tab-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");
const inputEl = document.querySelector("#input-el");
const inputBtn  = document.querySelector("#input-btn");
const hideEl = document.querySelector("#hide-el");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    hideEl.style.display = "block";
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
   let listItems = "";
for(let i = 0; i < leads.length; i++){

    listItems += `
        <li>
            <a target= "_blank" href= "${leads[i]}">
                ${leads[i]}
            </a>
        </li>`;
}
ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function(){
    hideEl.style.display = "block";
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        const tab = tabs[0].url;
        myLeads.push(tab);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads =[];
    render(myLeads);
})

inputBtn.addEventListener("click", function() {
    hideEl.style.display = "block";
   myLeads.push(inputEl.value);
   inputEl.value = "";
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   render(myLeads);

   console.log(localStorage.getItem("myLeads"));
})











//learning the localstorage

// myLeads = JSON.parse(myLeads); this converts it into array
// myLeads.push("www.hi.com");
// myLeads = JSON.stringify(myLeads); this converts it into strings
// console.log(typeof myLeads);



// const div = document.querySelector("#div-el");



        // div.addEventListener("click", function(){
        //     div.innerHTML =`<div>
        //                     <p class="text-white">Opened the greeting.</p>
        //                     <button class ="btn btn-danger" id = "hi-el">hi</button>
        //                     </div>`

        //     const hi = document.querySelector("#hi-el");
        // // this is an experimental code for this rather than the event listener it is best to use the onclick 
        // // because that will help you to  write the function outside this event listener.
        //     hi.addEventListener("click", function(){
        //         console.log("it works like this too, this is awesome man!!.")
        //     })
        // })

