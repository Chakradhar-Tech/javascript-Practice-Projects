$(window).on("load", function(){

const inputsEl =$("input");
const nameError =$("#name-error");
const emailError =$("#email-error");
const passwordError =$("#password-error");
const numError =$("#num-error");

    const patterns = {
        number: /^\d{11}$/,
        name:/^[a-z\d\s?]{5,12}$/i,
        email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password:/^[\w@-]{8,20}$/
    }

    function validation(field, regex){
        const $field =$(field);
        const value = $field.val().trim();
        if(value === ""){
          $field.removeClass("is-valid is-invalid");
          return;
        }
        const isValid =regex.test(value);
        $field.removeClass("is-valid is-invalid")
            .addClass(isValid ? "is-valid" : "is-invalid");
    }

  inputsEl.each(function(){
    $(this).on("keyup", function(e){
        const id = e.target.id;
        const pattern = patterns[id];
        validation(e.target, pattern)
    })
  })


})  