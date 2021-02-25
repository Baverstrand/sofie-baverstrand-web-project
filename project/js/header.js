"use strict";

// fetch generic header
(async function genericheader() {
  let response = await fetch("generic/genericheader.html"); 
  let tohtml = await response.text();
  //console.log(tohtml);
  document.getElementById("genericheader").innerHTML = tohtml;
})();