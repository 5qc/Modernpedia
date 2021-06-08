// ==UserScript==
// @name         Modernpedia
// @namespace    https://github.com/5qc/Modernpedia
// @version      0.1
// @description  Makes Wikipedia look more modern
// @author       5qc
// @match        https://en.wikipedia.org/wiki/Chinese_Wikipedia
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-start

// @grant        GM_addStyle
// ==/UserScript==

// Change favicon
var link = document.querySelector("link[rel~="icon"]");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = "https://cdn.glitch.com/eb49ccc8-ffaa-44bb-8f04-39053cb25379%2Fcensored%20wikipedia.ico?v=1623106779852";
