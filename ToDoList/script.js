$(window).on("load", function(){


const formEl =$("#form-el");
const inputEl = $("#input-el");
const todoListEl = $("#todoList-el");
const errorEl = $("#error-el");
let hasError = false;
let data = JSON.parse(localStorage.getItem("listData")) || [];

data.forEach(listItem=>{
    render(listItem);
});



function render(item){

    todoListEl.append(`
        <div class="bg-dark text-white p-2 mb-3 rounded-3 d-flex justify-content-between align-items-center item">
           <span class="text-item"> ${item}</span>
            <span>
                <button class="btn btn-link text-white p-0 delete-el">
                        <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn btn-link text-white p-0 edit-el">
                    <i class="fas fa-edit"></i>
                </button>
            </span>
        </div>
         <div class="d-none">
                <form class="d-flex gap-2">
                <input type="text" class="form-control form-control-sm update-el w-auto" name="update" data-item="${item}" placeholder="Enter new value">
                    <button type="submit" class="btn btn-sm btn-primary my-2  rounded-3 update-btn">update</button>
                    <button type="button" class="btn btn-sm btn-danger my-2 rounded-3 close-btn">Close</button>
                </form>
            </div>
        `);
    }

    function deleteItem(delItem){
       data = data.filter(item=>item !== delItem);  // updating the array with the filtered new array.
        localStorage.setItem("listData", JSON.stringify(data));
    }

formEl.on("submit",function(e){
    e.preventDefault();
    const value = inputEl.val().trim();
    if(value != ""){
        data.push(value);
        localStorage.setItem("listData",JSON.stringify(data));
        render(value);
    }else{
            errorEl.text("!! please enter some data.");
            hasError=true;
        }
        inputEl.val("");
})

inputEl.on("keyup",function(){
    if(hasError === true){
        errorEl.text("");
        hasError =false;
        }
})

todoListEl.on("click", ".delete-el", (e) =>{
    const parentP =  $(e.target).closest("div.item")
    const delValue = parentP.clone().find(".text-item").text().trim();
    parentP.next("div").remove();
    parentP.remove();
    deleteItem(delValue);
})


//search

    $("#search").on("keyup",function(){
   const searchItem = $(this).val().toLowerCase().trim();
        todoListEl.empty();
    if(searchItem != ""){

    const filtered =data.filter(item=>item.toLowerCase().includes(searchItem));

        if(filtered.length === 0) {
        todoListEl.append(`
            <p class="text-center fw-bold">No Data Found.</p>`)
        }else{
            filtered.forEach(item=> render(item));
        }
    }else{
        data.forEach(listItem=>{
        render(listItem);
    });
    }
});

    todoListEl.on("click", ".edit-el",function(){
      const updateField = $(this).closest("div");
      updateField.next().removeClass("d-none");

      const inputField =updateField.next().find(".update-el");
       const currentValue =inputField.attr("data-item");
         inputField.val(currentValue);

         });
         

          todoListEl.on("click",".update-btn",function(e){
            e.preventDefault();
            const  formDiv = $(this).closest("form").parent();
            const oldValue = formDiv.find(".update-el").attr("data-item").trim();
            const newValue = formDiv.find(".update-el").val().trim();

           const index = data.findIndex((item)=>{
               return item === oldValue;
            });
            if(index !== -1){
                data[index] = newValue;

                localStorage.setItem("listData", JSON.stringify(data));

                todoListEl.empty();
                data.forEach(item=>render(item));
            }
            formDiv.addClass("d-none");
        });

       todoListEl.on("click", ".close-btn",function(){
        $(this).closest("div").addClass("d-none");
       });




});