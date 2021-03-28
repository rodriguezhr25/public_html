let startCity = document.getElementById("startCity");
let startState = document.getElementById("startState");
let endCity = document.getElementById("endCity");
let endState = document.getElementById("endState");
//let calculateButton = document.getElementById("calculate");
document.getElementById("startCity").addEventListener("input", function () {
  document.getElementById("travelDetails").innerHTML = "";
  validateStartCity();
});
document.getElementById("startState").addEventListener("input", function () {
  document.getElementById("travelDetails").innerHTML = "";
  validateStartState();

});
document.getElementById("endCity").addEventListener("input", function () {
  document.getElementById("travelDetails").innerHTML = "";
  validateEndCity();

});
document.getElementById("endState").addEventListener("input", function () {
  document.getElementById("travelDetails").innerHTML = "";
  validateEndState();

});
document.getElementById("calculate").addEventListener("click", function () {
  if (validateAll()) {
    document.getElementById("travelDetails").innerHTML = "";
    calculateMileAge();
  }
});

function validateAll() {
  validateStartCity();
  validateStartState();
  validateEndCity();
  validateEndState();
  let startCityValidity = startCity.checkValidity();
  let startStateValidity = startState.checkValidity();
  let endCityValidity = endCity.checkValidity();
  let endStateValidity = endState.checkValidity();

  if (startCityValidity && startStateValidity && endCityValidity && endStateValidity) {
    return true;
  }
  return false;
}
function onlyLetterAndSpace(evt) {

  // Only ASCII character in that range allowed 
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
  if (!(ASCIICode >= 65 && ASCIICode <= 122) && (ASCIICode != 32 && ASCIICode != 0)) {
    return false;
  }
  return true;
}

function handleErrorMessage(option, output, text, container) {
  let message = document.getElementById(output);
  if (option == 1) {// Add error message

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

  } else {      //Remove Error Message
    if (message) {
      message.remove();

    }
  }
}
function validateStartCity() {
  if (startCity.value == "") { //
    startCity.focus();
    startCity.setCustomValidity("Invalid field.");
    startCity.classList.remove("valid");
    startCity.classList.add("invalid");
    handleErrorMessage(1, "start_city_output", "Please register a valid start city", "start_city_div");

  } else {
    startCity.classList.add("valid");
    startCity.classList.remove("invalid");
    handleErrorMessage(2, "start_city_output");
    startCity.setCustomValidity("");

  }
}
function validateStartState() {
  if (startState.value == "") { //
    startState.focus();
    startState.setCustomValidity("Invalid field.");
    startState.classList.remove("valid");
    startState.classList.add("invalid");
    handleErrorMessage(1, "start_state_output", "Please register a valid start state", "start_state_div");

  } else {
    startState.classList.add("valid");
    startState.classList.remove("invalid");
    handleErrorMessage(2, "start_state_output");
    startState.setCustomValidity("");

  }
}
function validateEndCity() {
  if (endCity.value == "") { //
    endCity.focus();
    endCity.setCustomValidity("Invalid field.");
    endCity.classList.remove("valid");
    endCity.classList.add("invalid");
    handleErrorMessage(1, "destination_city_output", "Please register a valid destination city", "destination_city_div");

  } else {
    endCity.classList.add("valid");
    endCity.classList.remove("invalid");
    handleErrorMessage(2, "destination_city_output");
    endCity.setCustomValidity("");

  }
}
function validateEndState() {
  if (endState.value == "") { //
    endState.focus();
    endState.setCustomValidity("Invalid field.");
    endState.classList.remove("valid");
    endState.classList.add("invalid");
    handleErrorMessage(1, "destination_state_output", "Please register a valid destination state", "destination_state_div");

  } else {
    endState.classList.add("valid");
    endState.classList.remove("invalid");
    handleErrorMessage(2, "destination_state_output");
    endState.setCustomValidity("");

  }
}

function calculateMileAge() {
  var xhttp = new XMLHttpRequest();

  var url = `/cgi-bin/cs213/mileageAjaxJSON?startCity=${startCity.value}&startState=${startState.value}&endCity=${endCity.value}&endState=${endState.value}`

  //var query = "?startCity=" + startCity + "&startState=" + startState + "&endCity=" + endCity + "&endState=" + endState; 
  //  var url = "/cgi-bin/cs213/mileageAjaxJSON" + query  ; 
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this);
      document.getElementById("outputError").innerHTML = "";
      readFileJSON(this.responseText);
    } else if (this.readyState == 4) {
      document.getElementById("outputError").innerHTML = "The url doesn't exist";
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function readFileJSON(response) {
  let filesJSON = JSON.parse(response);
  let trip = filesJSON.trip;
  let result = trip.miles != "Unknown" ? trip.miles : "Error";
  let start = `${startCity.value}, ${startState.value}`;
  let destination = `${endCity.value}, ${endState.value}`;
  let card = "";
  let classCard = "card-valid";

  if (result == "Error") {
    classCard = "card-error";
    tmode = `The system did not find the distance between <strong>${start}</strong> and <strong>${destination}</strong>, please check the information registered. `;

  } else {
    start = `${trip.startcity}, ${trip.startstate}`;
    destination = `${trip.endcity}, ${trip.endstate}`;
    tmode = `<p>The the distance to travel from <strong>${start}</strong> to <strong>${destination}</strong> is <strong>${result}</strong> miles. </p> `;

    if (trip.hasOwnProperty("tmode")) {

      tmode += "<p>The avalaible transportation to make this trip are these:</p><ul>";
      for (let i = 0; i < trip.tmode.length; i++) {
        tmode += `<li>${trip.tmode[i]}</li>`;
      }
      tmode += "</ul>"
    }

  }
  card = `<div class= "card ${classCard}">${tmode}</dvi>`

  document.getElementById("travelDetails").innerHTML = card;
}
