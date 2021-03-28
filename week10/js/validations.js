let apr = document.getElementById("apr");
let term = document.getElementById("term");
let amount = document.getElementById("amount");


document.getElementById("apr").addEventListener("input", function () {

    validateApr();
});
document.getElementById("term").addEventListener("input", function () {

    validateTerm();

});
document.getElementById("amount").addEventListener("input", function () {

    validateAmount();

});

document.getElementById("reset").addEventListener("click", function () {
    apr.value = "";
    term.value = "";
    amount.value = "";
    apr.focus();
});
/* document.getElementById("submit").addEventListener("click", function () {

    if (validateAll()) {
      
       
    }
}); */
/* function validateAll() {
    let aprValidity = apr.checkValidity();
    let termValidity = term.checkValidity();
    let amountValidity = amount.checkValidity();

    if(aprValidity && termValidity && amountValidity){
        return true;
    }
    return false;
}
 */
function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        return false;
    }
    return true;
}
function isNumberKey(evt, obj) {

    var charCode = (evt.which) ? evt.which : evt.keyCode
    var value = obj.value;
    var dotcontains = value.indexOf(".") != -1;
    if (dotcontains)
        if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function handleErrorMessage(option, output, text, container){
    let message = document.getElementById(output);
    if(option == 1){// Add error message

        if (message) {
            message.remove();
        }
        var p = document.createElement("p");
        var node = document.createTextNode(text);
        p.appendChild(node);
        p.setAttribute("id", output)
        p.classList.add("p-invalid");
        var element = document.getElementById(container);
        element.appendChild(p);
    }else{      //Remove Error Message
        if (message) {
            message.remove();            
        }
    }
}
function validateApr() {
    if (apr.value < 0 || apr.value > 25 || apr.value == "") { //
        apr.focus(); 
        apr.setCustomValidity("Invalid field.");
        apr.classList.remove("valid");
        apr.classList.add("invalid");
        handleErrorMessage(1, "apr_output", "Enter a valid APR number between 0 and 25%" , "apr_div");
       
    } else {
        apr.classList.add("valid");
        apr.classList.remove("invalid");
        handleErrorMessage(2, "apr_output");
        apr.setCustomValidity("");
     
    }
}
function validateTerm() {
    if (term.value <= 0 || term.value > 40 || term.value == "") { //
        term.focus();    
        term.setCustomValidity("Invalid field.");
        term.classList.remove("valid");
        term.classList.add("invalid");   
        handleErrorMessage(1, "term_output", "The loan term Must be greater than 0 and less than or equal to 40" , "term_div");
    } else {
        term.classList.add("valid");
        term.classList.remove("invalid");
        handleErrorMessage(2, "term_output");
        term.setCustomValidity("");  
    }

}
function validateAmount() {
    if (amount.value <= 0 || amount.value == "") { //
        amount.focus();        
        amount.setCustomValidity("Invalid field.");
        amount.classList.remove("valid");
        amount.classList.add("invalid");   
        handleErrorMessage(1, "amount_output", "Register Loan Amount" , "amount_div");
     
    } else {
        amount.classList.add("valid");
        amount.classList.remove("invalid");
        handleErrorMessage(2, "amount_output");
        amount.setCustomValidity("");
  
    }
}