

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        readFile(this.responseText);
      }
    };
    let country = document.getElementById("countries").value + ".txt";
    xhttp.open("GET", country, true);
    xhttp.send();
  }

  function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         console.log(this);
         document.getElementById("outputError").innerHTML ="";
         readFileJSON(this.responseText);
      }else if(this.readyState == 4){
        document.getElementById("listStudents").innerHTML ="";
          document.getElementById("outputError").innerHTML ="The file doesn't exist";
      }
    };
    let file_name = document.getElementById("file_name").value;
    xhttp.open("GET", file_name, true);
    xhttp.send();
  }
  function readFileJSON(response) {
    let studentJSON = JSON.parse(response);
    console.log(studentJSON);
    let students = studentJSON['students'];
    let table="<tr><th>N°</th><th>First Name</th><th>Last Name</th><th>Address</th><th>GPA</th><th>Major</th></tr>";
    let address = "";
    for (let i = 0; i < students.length; i++) { 
        address = students[i].address.city + ", " + students[i].address.state + ", " + students[i].address.zip;
        table += "<tr><td>" +
        (i+1)+
        "</td><td>" +
        students[i].first+
        "</td><td>" +
        students[i].last +
        "</td><td>" +
        address+
        "</td><td>" +
        students[i].gpa+
        "</td><td>" +
        students[i].gpa+

        "</td></tr>";
    }
    document.getElementById("listStudents").innerHTML = table;
  }
  function readFile(txtFile) {
    let table="<tr><th>N°</th><th>City</th><th>Population</th></tr>";



    // By lines
    let lines = txtFile.split('\n');
    let city = "";
    let poulation ="";
    let lineArray = [];
    let lineData = "";
    let indexSeparator = 0;
    for(var line = 0; line < lines.length-1; line++){
      lineData= lines[line].trim();
      indexSeparator =lineData.lastIndexOf(" ") ;
     // lineArray = lines[line].trim().split(" "); // Eliminate empty spaces in both extremes and create array with the words
      city = lineData.substr(0, indexSeparator + 1 );
      population = lineData.substr(indexSeparator);;
      
      table += "<tr><td>" +
      (line +1 )+
      "</td><td>" +
      city +
      "</td><td>" +
      population+
      "</td></tr>";
    }
    document.getElementById("list").innerHTML = table;
  }