"use strict";

// Copy generic HTML from own document to footer in page
(async function genericfooter() {
  let response = await fetch("generic/genericfooter.html"); 
  let tohtml = await response.text();
  document.getElementById("genericfooter").innerHTML = tohtml;
})();