
function commandRun() {
  //  loc = document.location;
  //  document.write("Hello");
  //  var nloc  = window.prompt("Enter ur location : ");
  //  alert("Current Location is " + loc + "Proceeding to " + nloc);

   // document.location = "https://www.google.com";
    var cmd = document.getElementById('command_input').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.29.48/cgi-bin/command.py?cmd=" + "sudo " + cmd , true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("command_output").innerHTML = output;
    }
}

