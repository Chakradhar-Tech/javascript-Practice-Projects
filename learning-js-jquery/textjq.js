// const submitEl = $("#submit-el");
const formEl = $("#form-el");
const nameEl = $("#name-el");
const dropEl = $("#dropdown-el");
const switchEl = $("#switchButton");
const dateEl = $("#date");
const clickEl =$("#click-el");
const formDataEl = $("#form-data");

const nameData = $("#output-name span");
const statusData = $("#output-status span");
const radioData = $("#output-radio span");
const switchData = $("#output-switch span");
const dateData = $("#output-date span");

clickEl.on("click", function(){
    formEl.css({display: "block"});
});
   
clickEl.on("dblclick", function(){
    formEl.css({display:"none"})
});

formEl.on("submit", function(event){
    event.preventDefault();
    formDataEl.css({display:"block"});  
    let name = nameEl.val();
    nameData.text(name);

    let drop = dropEl.val();
    statusData.text(drop);

    const radioEl =$("input[name = 'option']:checked");
    let radio = radioEl.val();
    radioData.text(radio);

    let switchButton = switchEl.prop("checked") ? "on" : "off";
    switchData.text(switchButton);

    let date = dateEl.val();
    dateData.text(date);

})