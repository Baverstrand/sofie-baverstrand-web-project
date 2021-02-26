"use strict";

// Call API and present random Chuck Norris joke
async function randomchuck() {
  let response = await fetch("https://api.icndb.com/jokes/random?escape=javascript");
  if (!response.ok) {   // Catch errors
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {    // Present result
    let tojson = await response.json();
    document.getElementById("randomjoke").innerText = tojson.value.joke;
  }
}

// Call API and present random Chuck Norris joke, but with a name of your choice (or default value)
async function randomjohndoe() {
  let firstName = "";
  if (document.getElementById("firstName").value == "") // Set default value
    firstName = "John";
  else
    firstName = document.getElementById("firstName").value;

  let lastName = "";
  if (document.getElementById("lastName").value == "")  // Set default value
    lastName = "Doe";
  else
    lastName = document.getElementById("lastName").value;

  let nameurl = "https://api.icndb.com/jokes/random?escape=javascript&firstName=" + firstName + "&lastName=" + lastName;
  let response = await fetch(nameurl);
  if (!response.ok) {   // Catch errors
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {    // Present result
    const tojson = await response.json();
    document.getElementById("johndoejoke").innerText = tojson.value.joke;
  }
}
