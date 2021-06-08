let scrollbar = document.getElementsByClassName("mediawiki")[0];
scrollbar.innerHTML += "<div class=\"progress-container\"><div class=\"progress-bar\" id=\"theBar\"></div></div>"
window.onscroll = function() {barScroll()};
  
function barScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("theBar").style.width = scrolled + "%";
}

// Scrollbar styling
GM_addStyle (`
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 10px 0px 30px #ddd;
  z-index: 99 !important;
}

.progress-bar {
  height: 8px;
  background: #2A4B8D;
  width: 0%;
  box-shadow: 10px 0px 30px #ddd;
}
`);
