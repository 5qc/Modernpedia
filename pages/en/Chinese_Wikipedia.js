// ==UserScript==
// @match        https://en.wikipedia.org/wiki/Chinese_Wikipedia
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

// Change favicon
setTimeout(function() {
  var link = document.querySelector("link[rel~=\"icon\"]");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = "https://cdn.glitch.com/eb49ccc8-ffaa-44bb-8f04-39053cb25379%2Fcensored%20wikipedia.ico?v=1623106779852";
}, 0);
