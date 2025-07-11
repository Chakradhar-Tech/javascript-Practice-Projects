$(window).on("load", function(){



const flipEl = $("#flip-el");
const imgEl = $(".image");
const coinName =$("#coin-name");


flipEl.on("click", function(e){
    imgEl.addClass("spin");
    flipEl.prop("disabled", true);

    setTimeout(()=>{

    const isHeads = Math.random() > 0.5;
    imgEl.attr("src", isHeads ? "heads.png":"tails.png");
    coinName.html(`<p class="fw-bold text-center">${isHeads?"Heads":"Tails"}</p>`);
    imgEl.removeClass("spin");
    flipEl.prop("disabled", false);

    }, 1000);
});



});