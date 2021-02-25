"use strict";

// fetch generic footer
(async function genericfooter() {
  let response = await fetch("generic/genericfooter.html"); 
  let tohtml = await response.text();
  //console.log(tohtml);
  document.getElementById("genericfooter").innerHTML = tohtml;
})();