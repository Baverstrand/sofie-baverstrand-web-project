"use strict";

// Copy generic HTML from own document to header in page
(async function genericheader() {
  let response = await fetch("generic/genericheader.html"); 
  let tohtml = await response.text();
  document.getElementById("genericheader").innerHTML = tohtml;
})();