let scrollbar = document.getElementsByClassName("mediawiki")[0];
scrollbar.innerHTML += "<div class=\"progress-container\"><div class=\"progress-bar\" id=\"theBar\"></div></div>"
window.onscroll = function() {barScroll()};
  
function barScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("theBar").style.width = scrolled + "%";
}
