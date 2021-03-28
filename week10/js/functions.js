


  function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         console.log(this);
         document.getElementById("outputError").innerHTML ="";
         readFileJSON(this.responseText);
      }else if(this.readyState == 4){     
        document.getElementById("outputError").innerHTML ="The file doesn't exist";
      }
    };
    xhttp.open("GET", "assign10.php", true);    
    xhttp.send();
  }
  function readFileJSON(response) {
    let filesJSON = JSON.parse(response);
    console.log(filesJSON);
   
    let table="<tr><th>Filename</th><th>Type</th><th>CWD</th><th>Action</th></tr>";
 
    for (let i = 0; i < filesJSON.length; i++) { 
      let button = "";
      if(filesJSON[i].fileType == "file"){
        button = `<a class="button" target="_blank" href=${filesJSON[i].fileName}>View File</a>`
      }
        table += "<tr><td>" +
        filesJSON[i].fileName+
        "</td><td>" +
        filesJSON[i].fileType+
        "</td><td>" +
        filesJSON[i].cwd +
        "</td><td>" +        
      //  `<button type="button" onclick= window.location="${filesJSON[i].fileName}">Open File</button>`
         button +
        "</td></tr>";
    }
    document.getElementById("listFiles").innerHTML = table;
  }
  