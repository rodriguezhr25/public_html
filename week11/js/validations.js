let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let credit_card = document.getElementById("credit_card");
let exp_date = document.getElementById("exp_date");
let output =  document.getElementById("outputType");
let validateButton = document.getElementById("validate");
document.getElementById("first_name").addEventListener("input", function () {

    validateFirstName();
});
document.getElementById("last_name").addEventListener("input", function () {

    validateLastName();
});
document.getElementById("address").addEventListener("input", function () {

    validateAddress();
});
document.getElementById("phone").addEventListener("input", function () {

    validatePhone();
});

document.getElementById("credit_card").addEventListener("input", function () {

    validateCreditCard();
});
document.getElementById("exp_date").addEventListener("input", function () {

    validateCreditCardExpDate();
});
let itemsSelected = document.getElementsByClassName('item');

for (let i = 0; i < itemsSelected.length; i++) {
    itemsSelected[i].addEventListener("change", function () {
        getTotal();
    })
}

let typeSelected = document.getElementsByName('card');

for (let i = 0; i < typeSelected.length; i++) {
    typeSelected[i].addEventListener("change", function () {
        output.innerHTML = "";
    })
}
/* document.getElementById("validate").addEventListener("click", function (event) {

    if (validateAll()) {      
       document.getElementById("form").submit();
    }
}); */
//reset button
document.getElementById("reset").addEventListener("click", function () {
    first_name.className = '';
    last_name.className = '';
    address.className = '';
    phone.className = '';
    credit_card.className = '';
    exp_date.className = '';
    first_name.value = "";
    last_name.value = "";
    address.value = "";
    phone.value = "";
    credit_card.value ="";
    exp_date.value ="";
    first_name.focus();
});
function validateAll() {
    validateCreditCardExpDate();
    validateCreditCard();
    let cardTypeValidity = validateCreditCardType();
    validatePhone();
    validateAddress();
    validateLastName();
    validateFirstName();

    let firstNameValidity = first_name.checkValidity();
    let lastNameValidity = last_name.checkValidity();
    let addressValidity = address.checkValidity();
    let phoneValidity = phone.checkValidity();
    let creditCardValidity = credit_card.checkValidity();
    let expDateValidity = exp_date.checkValidity();

    if (firstNameValidity && lastNameValidity && addressValidity&& phoneValidity && creditCardValidity && expDateValidity && cardTypeValidity ) {
       
        return true;

    }

    return false;
}

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && evt.keyCode != 32) {
        return false;
    }
    return true;
}
function onlyNumberDateKey(evt) {
    console.log(evt.which);
    console.log(evt.keyCode);
    // Only ASCII character in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if ((ASCIICode > 31 ) && (ASCIICode < 48 || ASCIICode > 57 ) && evt.keyCode != 47) {
        return false;
    }
    return true;
}
function fnAllowNumeric(evt) {
    if ((evt.keyCode < 48 || evt.keyCode > 57) && evt.keyCode != 8 && evt.keyCode != 45) {
        evt.keyCode = 0;

        return false;
    }
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
function validateFirstName() {

    if (first_name.value == "" || typeof (first_name) == 'undefined') { //
        first_name.focus(); 
        first_name.setCustomValidity("Invalid field.");
        first_name.classList.remove("valid");
        first_name.classList.add("invalid");
        handleErrorMessage(1, "fname_output", "Register the first name" , "f_name");
       
    } else {
        first_name.classList.add("valid");
        first_name.classList.remove("invalid");
        handleErrorMessage(2, "fname_output");
        first_name.setCustomValidity("");
     
    }

}

function validateLastName() {

    if (last_name.value == "" || typeof (last_name) == 'undefined') { //
        last_name.focus(); 
        last_name.setCustomValidity("Invalid field.");
        last_name.classList.remove("valid");
        last_name.classList.add("invalid");
        handleErrorMessage(1, "lname_output", "Register the last name" , "l_name");
       
    } else {
        last_name.classList.add("valid");
        last_name.classList.remove("invalid");
        handleErrorMessage(2, "lname_output");
        last_name.setCustomValidity("");
     
    }
    
}
function validateAddress() {
    if (address.value == "" || typeof (address) == 'undefined') { //
        address.focus();
        address.select();
        address.setCustomValidity("Invalid field.");
        address.classList.remove("valid");
        address.classList.add("invalid");

        let message = document.getElementById("address_output");
        if (message) {
            message.remove();
        }
        var p = document.createElement("p");
        var node = document.createTextNode("Register the address");
        p.appendChild(node);
        p.setAttribute("id", "address_output")
        p.classList.add("p-invalid");
        var element = document.getElementById("address_div");
        element.appendChild(p);
        //validateButton.disabled = true;

    } else {
        let message = document.getElementById("address_output");
        if (message) {
            document.getElementById('address_output').innerText = "";
        }
        address.setCustomValidity("");
        address.classList.add("valid");
        address.classList.remove("invalid");
        //validateButton.disabled = false;

    }
   
}

function validatePhone() {
    let phoneValidity = phone.checkValidity();

    if (!phoneValidity) {
        phone.focus();
        phone.classList.remove("valid");
        phone.classList.add("invalid");
       
        let message = document.getElementById("phone_output");
        if (message) {
            message.remove();
        }
        var p = document.createElement("p");
        var node = document.createTextNode("The phone number must be of the format 555-555-5555");
        p.appendChild(node);
        p.setAttribute("id", "phone_output")
        p.classList.add("p-invalid");
        var element = document.getElementById("phone_div");
        element.appendChild(p);
       // validateButton.disabled = true;
    } else {
        let message = document.getElementById("phone_output");
        if (message) {
            document.getElementById('phone_output').innerText = "";
        }
        phone.setCustomValidity("");
        phone.classList.add("valid");
        phone.classList.remove("invalid");
       // validateButton.disabled = false;

    }

}
function validateCreditCard() {
    let cardValidity = credit_card.checkValidity();

    if (!cardValidity) {
        credit_card.focus();

        credit_card.classList.remove("valid");
        credit_card.classList.add("invalid");
        let message = document.getElementById("credit_card_output");
        if (message) {
            message.remove();
        }
        var p = document.createElement("p");
        var node = document.createTextNode("The credit card number must be of the format 1111 1111 1111 1111");
        p.appendChild(node);
        p.setAttribute("id", "credit_card_output")
        p.classList.add("p-invalid");
        var element = document.getElementById("card_div");
        element.appendChild(p);
/*         validateButton.disabled = true; */
    } else {
        let message = document.getElementById("credit_card_output");
        if (message) {
            document.getElementById('credit_card_output').innerText = "";
        }
        credit_card.setCustomValidity("");
        credit_card.classList.add("valid");
        credit_card.classList.remove("invalid");
        validateButton.disabled = false;


    }

}
function validateCreditCardExpDate() {
    let cardDateValidity = exp_date.checkValidity();

    if (!cardDateValidity) {
        exp_date.focus();
 
        exp_date.classList.remove("valid");
        exp_date.classList.add("invalid");
        let message = document.getElementById("exp_date_output");
        if (message) {
            message.remove();
        }
        var p = document.createElement("p");
        var node = document.createTextNode("The date format must be mm/yyyy and month between 01-12");
        p.appendChild(node);
        p.setAttribute("id", "exp_date_output")
        p.classList.add("p-invalid");
        var element = document.getElementById("exp_div");
        element.appendChild(p);
     /*    validateButton.disabled = true; */
    } else {
        let yearCard = exp_date.value;
        yearCard = yearCard.split("/");
        yearCard = yearCard[1];
        if (yearCard > 2020) {
            let message = document.getElementById("exp_date_output");
            if (message) {
                document.getElementById('exp_date_output').innerText = "";
            }
            exp_date.setCustomValidity("");
            exp_date.classList.add("valid");
            exp_date.classList.remove("invalid");
/*             validateButton.disabled = false; */
        } else {
            exp_date.focus();
         
            let message = document.getElementById("exp_date_output");
            if (message) {
                message.remove();
            }
            
            var p = document.createElement("p");
            var node = document.createTextNode("The  year must be greater than 2020");
            p.appendChild(node);
            p.setAttribute("id", "exp_date_output")
            p.classList.add("p-invalid");
            var element = document.getElementById("exp_div");
            element.appendChild(p);
           /*  validateButton.disabled = true; */
        }


    }

}
function validateCreditCardType() {
    let items = document.getElementsByName("card");
    let typeValidity =  false;
    for (var i = 0; i < items.length; i++) {
        let cardType = items.item(i);
        if(cardType.checked){
            typeValidity = true;
        }
    }   

    if (!typeValidity) {        
        output.innerHTML = "";
        var p = document.createElement("p");
        var node = document.createTextNode("Select type of credit card");
        p.appendChild(node);
        p.setAttribute("id", "outputType");
        p.classList.add("p-invalid");
        
        output.appendChild(p);
        /* validateButton.disabled = true; */
        return false;
    } else {
        output.innerHTML= "";
      /*   validateButton.disabled = false; */
        return true;
    }

}
function getTotal() {
    let items = document.getElementsByClassName("item");
    let total = 0;
    for (var i = 0; i < items.length; i++) {
        let itemStore = items.item(i);

        if (itemStore.checked) {
            total += Number(itemStore.value);
        }


    }
    document.getElementById("total").value = total;
    document.getElementById("total_result").value = total;
}