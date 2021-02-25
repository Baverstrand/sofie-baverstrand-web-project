"use strict;"

// fetch a random Chuck joke
async function randomchuck() {
  const response = await fetch("https://api.icndb.com/jokes/random?escape=javascript"); // with quotation mark fix
  const tojson = await response.json();
  console.log(tojson);
  document.getElementById("randomjoke").innerText = tojson.value.joke;
}

async function randomchuck2() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const tojson = await response.json();
  console.log(tojson);
  document.getElementById("randomjoke").innerText = tojson.value;
}

// fetch a random John Doe Chuck joke
async function randomjohndoe() {
  let firstName = "";
  if (document.getElementById("firstName").value == "")
    firstName = "John";
  else
    firstName = document.getElementById("firstName").value;

  let lastName = "";
  if (document.getElementById("lastName").value == "")
    lastName = "Doe";
  else
    lastName = document.getElementById("lastName").value;

  let nameurl = "https://api.icndb.com/jokes/random?escape=javascript&firstName=" + firstName + "&lastName=" + lastName;
  let response = await fetch(nameurl); // with quotation mark fix

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const tojson = await response.json();
    console.log(tojson);
    document.getElementById("johndoejoke").innerText = tojson.value.joke;
  }
}

// fetch generic header
(async function genericheader() {
  let response = await fetch("genericheader.html"); 
  let tohtml = await response.text();
  //console.log(tohtml);
  document.getElementById("genericheader").innerHTML = tohtml;
})();

// fetch generic footer
(async function genericfooter() {
  let response = await fetch("genericfooter.html"); 
  let tohtml = await response.text();
  //console.log(tohtml);
  document.getElementById("genericfooter").innerHTML = tohtml;
})();