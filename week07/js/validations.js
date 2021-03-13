let apr = document.getElementById("apr");
let term = document.getElementById("term");
let amount = document.getElementById("amount");
let submit = document.getElementById("submit");
let m = document.getElementById('payment');
document.getElementById("apr").addEventListener("input", function () {

    validateApr();
});
document.getElementById("term").addEventListener("input", function () {

    validateTerm();

});
document.getElementById("amount").addEventListener("input", function () {

    validateAmount();

});
document.getElementById("apr").addEventListener("change", function () {
    if (validateAll() && m.dataset.status == 1) {
        submit.click();
    }
});
document.getElementById("term").addEventListener("change", function () {
    if (validateAll() && m.dataset.status == 1) {
        submit.click();
    }
});
document.getElementById("amount").addEventListener("change", function () {
    if (validateAll() && m.dataset.status == 1) {
        submit.click();
    }
});
document.getElementById("reset").addEventListener("click", function () {
    apr.value = "";
    term.value = "";
    amount.value = "";
    apr.focus();
});
document.getElementById("submit").addEventListener("click", function () {

    if (validateAll()) {
        m.setAttribute("data-status", 1);//indicate that the data is correct
        calculatePayment();
    }
});
function validateAll() {
    let aprValidity = apr.checkValidity();
    let termValidity = term.checkValidity();
    let amountValidity = amount.checkValidity();

    if(aprValidity && termValidity && amountValidity){
        return true;
    }
    return false;
}
function calculatePayment() {
    let p = amount.value; //pirncipal
    let i = apr.value / 100 / 12; //monthly interest rate
    let n = term.value * 12; //number of payments
   
    let monthlyPaymenths = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    m.value = monthlyPaymenths.toFixed(2);


}
function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        return false;
    }
    return true;
}

function validateApr() {
    if (apr.value < 0 || apr.value > 25) { //
        apr.focus();
        apr.select();
        apr.setCustomValidity("Invalid field.");
        document.getElementById('output').innerHTML = "Enter a valid APR number between 0 and 25%";       
    } else {
        document.getElementById('output').innerHTML = "";
        apr.setCustomValidity("");
     
    }
}
function validateTerm() {
    if (term.value <= 0 || term.value > 40) { //
        term.focus();
        term.select();
        term.setCustomValidity("Invalid field.");
        document.getElementById('output').innerHTML = "The loan term Must be greater than 0 and less than or equal to 40";     
    } else {
        document.getElementById('output').innerHTML = "";
        term.setCustomValidity("");
  
    }

}
function validateAmount() {
    if (amount.value < 0) { //
        amount.focus();
        amount.select();
        amount.setCustomValidity("Invalid field.");
        document.getElementById('output').innerHTML = "Enter a number greater than 0";
    } else {
        document.getElementById('output').innerHTML = "";
        amount.setCustomValidity("");
  
    }
}