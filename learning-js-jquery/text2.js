$(document).ready(function(){

//  let istrue = false;











//      This is an animation  using the slidetoggle.
// const items = $("#points-of-sale li")
// $(items).on("click", function(){
//    $(this).find("p").slideToggle(500);
    
// })




//                     This is an animation done using  the  fadeIn and fadeOut to make a quote appear every three seconds.

// const allQuotes = $("blockquote");
// let currentQuote = 0;

// function changeQuote(){

//     $(allQuotes[currentQuote]).fadeOut(200, function(){
//         if(currentQuote == allQuotes.length - 1){
//             currentQuote = 0;
//         }else{
//             currentQuote++;
//         }

//         $(allQuotes[currentQuote]).fadeIn();
//         });

// }

// let quoreTimer = setInterval(changeQuote, "3000");

//                  This is about sliding elements, slideup and slidedown like the fadein and fadeout.
//                    slideup - reduces the height to 0 and animates.(like hiding the element)
//                    slidedown - returns the slide to it's normal length.(this  does the opposite shows the hidden element)

// $(".slideUp").on("click", function(){
//     $("#lead-banner").slideUp();
// })

// $(".slideDown").on("click", function(){
//     $("#lead-banner").slideDown();
// })

// $(".slideToggle").on("click", function(){
//     $("#lead-banner").slideToggle();
// })



//               This is about the toggle method for animations it uses the hide and show methods of animate
//                depending on the current state of the element.

// $("section > h2").on("click", function(){

//         $("img[alt=map").toggle(1000);

// })



//     //                This animate method and the fadeTO methods
// let isTrue = false;
// function activated(){
//             alert("The animation is Activated.");
//          }

// function deActivated(){
//             alert("The animation is De-Activated.");
//          }


// $("section > h2").on("click", function(){
//     if(isTrue === false){
//         $(this).fadeTo(200, 0.2)
//                .fadeTo(200, 0.8)
//                .fadeTo(200, 0.2)
//                .fadeTo(200, 0.8)
//                .fadeTo(200, 0.2)
//                .fadeTo(200, 0.8);
//         $(this).animate({"width":"600px", "height":"100px", "opacity":"1"}, 1000, "swing", activated );
//         isTrue=true;
//     }else{
//         $(this).fadeTo(200, 0.2)
//                .fadeTo(200, 0.8)
//                .fadeTo(200, 0.2)
//                .fadeTo(200, 0.8)
//                .fadeTo(200, 0.2)
//                .fadeTo(200, 0.8);
//         $(this).animate({"width":"250px", "height":"16px", "opacity":"1"}, 1000, deActivated);
//         isTrue = false;
//     }
// })



    // This is the event objects that are provided with js. useful for the development and how the event is handled.

// $("*").on("click", function(e){
//     console.log(e.target);
//     console.log("The event type is: " + e.type);
//     console.log("X co-ordinate of the event is: " + e.pageX);
//     console.log("Y co-ordinate of the event is: " + e.pageY);
//     e.stopPropagation();

// })




//                    Events binding (on) and unbinding (off)
// const myLis = $("#points-of-sale li");

// myLis.on("click",function(){

//     $(this).css({"background":"pink"});
//     myLis.off("click");
// })


//                 With event helpers click and dblclick etc,.. as this click() is the same as the  on("click")

// const myLis = $("#points-of-sale li");

// myLis.click(function(){

//     $(this).css({"background":"pink"});
//     myLis.off("click");
// })




//                            This is the css method in jquery
// $("header nav li:first").css({border:"1px solid red", padding:"3px"});

// $("header nav li:last").css({border:"1px solid blue", padding:"3px"});


//                            This is the wrap and wrapAll methods.
// const wrapper = "<div class='wrapper'>";
// const button = $(".button");
// let wrapped = true;
// const defaultStyle = button.attr("style");

// button[0].onclick = function(){

// if(wrapped){
//     $("section").unwrap();
//     wrapped = false;
//     button.text("Wrap").attr("style","background-color:green; padding: 10px; text-align:center; color:white");
// }else{
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("unWrap").attr("style", defaultStyle);
// }

// }

//                               This is the toggleclass method

// const buttonBanner = $("#lead-banner a");

// buttonBanner[0].onclick = function(){

//         $("#points-of-sale").toggleClass("open");
//         return false;

// }
//                              RemoveClass and the addClass methods.
// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");

//                               To get the value of a style.
// console.log($("#social-nav").css("position"));

});