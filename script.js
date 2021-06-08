// ==UserScript==
// @name         Modernpedia
// @namespace    https://github.com/5qc/Modernpedia
// @version      0.1
// @description  Makes Wikipedia look more modern
// @author       5qc
// @match        https://en.wikipedia.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-start

// @grant        GM_addStyle
// ==/UserScript==

// Add JavaScript
setTimeout(function() {

}, 0);

// Start the main styling
GM_addStyle (`
body {
  font-family: 'Roboto', sans-serif !important;
  background: #fff !important;
}
code {
  font-size: 13px;
}

.mw-footer {
  width: 75% !important;
  margin: auto !important;
}
h1.firstHeading {
  font-family: 'Roboto Slab', serif !important;
  font-weight: 400 !important;
}
#contentSub, .mw-headline, #siteSub, .hatnote, .infobox-above, .infobox-title, .infobox-header, .reference, h2, h3, h4, h5, h6,
td.infobox-full-data .mw-collapsible tr:first-child {
  font-family: 'Roboto Slab', serif !important;
}
.monospaced, code {
  font-family: 'Roboto Mono', monospace;
}
.mw-collapsible-toggle, .mw-editsection {
  font-family: 'Rubik' sans-serif !important;
}
h2.mw-toc-heading {
  font-size: 20px;
  font-family: 'Roboto Slab', serif !important;
}

/* Top */
.vector-menu-content-list {
  border-bottom: none !important;
  margin-top: 0px !important;
  margin-right: 80px !important;
}
.noprint {
  background: rgba(0,0,0,0) !important;
}
nav.vector-menu-tabs {
  border-radius: 15px 15px 0px 0px !important;
}
div#p-personal {
  margin: auto !important;
}
nav#p-namespaces {
  margin-right: 75px !important;
}
#searchInput {
  color: #000 !important;
  background: #fff !important;
  border-radius: 5px !important;
}
#simpleSearch {
  position: absolute !important;
  top: 7px !important;
  left: 420px !important;
}
#searchButton {
  bottom: 53px !important;
}
.suggestions {
  position: absolute !important;
  top: 35px !important;
}

#ca-nstab-user, #ca-view, #ca-talk, #ca-unwatch, #ca-nstab-image, #ca-view-foreign, #ca-edit, #ca-watch, #ca-nstab-main, #ca-history, #ca-viewsource, #ca-nstab-project,
#ca-nstab-special, #ca-nstab-template, #ca-nstab-help, #ca-addsection {
  background: #fff !important;
  border-top: 1px solid #ccc !important;
  line-height: 11px !important;
}
#ca-nstab-user, #ca-view, #ca-nstab-image, #ca-nstab-main, #ca-nstab-project, #ca-nstab-special, #ca-edit:first-child, #ca-nstab-template, #ca-nstab-help {
  border-left: 1px solid #ccc !important;
}
#ca-nstab-special {
  border-right: 1px solid #ccc !important;
}
#ca-talk, #ca-unwatch, #ca-watch {
  border-right: 1px solid #ccc !important;
} #ca-watch #text {display:none !important;}
.vector-menu-tabs, .vector-menu-tabs a, #mw-head .vector-menu-dropdown h3 {
  background-image: none !important;
}
#p-cactions {
  margin-right: 75px !important;
}
#p-variants, #p-namespaces {
  margin-right: 50px !important;
}
#left-navigation {
  margin-left: 81px !important;
}
#p-personal {
  background: #fff !important;
  border: 1px solid #ccc !important;
}

.box-Current, .box-Current_election, .box-Multiple_issues {
  border-radius: 0px 15px 15px 0px !important;
}
.mw-normal-catlinks {
  padding-left: 5px;
}

/* Infobox style */
.infobox-title, .infobox-above {
  font-size: 20px !important;
}
table.infobox, .toc, .mwe-popups, .mbox-small, #mw-sharedupload, .licensetpl_wrapper, .licensetpl, .catlinks, .warningbox, #noarticletext, #sisterproject {
  border-radius: 10px;
}
.thumbinner {
  border-radius: 0px 0px 10px 10px;
}
.infobox-above {
  background-color: rgba(0,0,0,0) !important;
  color: #000 !important;
}
.infobox-header, td.infobox-full-data .mw-collapsible tr:first-child {
  font-size: 15px !important;
}

.mw-body {
  margin: auto;
  width: 86%;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 0px 0px 15px 15px;
}

/* Editing an Article */
.ve-ui-toolbar-group-save {
  border-radius: 15px !important;
}
`)

// Hide stuff
GM_addStyle (`
#p-interaction, #p-tb, #p-coll-print_export, #p-wikibase-otherprojects, #p-lang, #p-logo, #n-contents, #n-currentevents, #n-randompage, #n-aboutsite, #n-contactpage,
#n-sitesupport, #n-mainpage-description {
  display: none !important;
}
`)

// Hide the scrollbar
GM_addStyle (`
::-webkit-scrollbar {
  width: 1px !important;
}
/* Track */
::-webkit-scrollbar-track {
  background: #fff !important;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #fff !important;
}
`)

/* Some secrets */
// WikiWikiWeb
GM_addStyle (`
.page-WikiWikiWeb {
  background: #fff !important;
}

.page-WikiWikiWeb #firstHeading {
  font-weight: 600 !important;
  border-bottom: 0px solid #000 !important;
}
.page-WikiWikiWeb a:link {
  color: blue !important;
  text-decoration: none !important;
}
.page-WikiWikiWeb a:hover {
  color: blue !important;
  text-decoration: none !important;
}
.page-WikiWikiWeb a:visited {
  color: #551A8B !important;
  text-decoration: none !important;
}
.page-WikiWikiWeb a:active {
  color: #FF0000 !important;
  text-decoration: none !important;
}

.page-WikiWikiWeb .mw-body {
  font-size: 18px !important;
  width: 33% !important;
  margin: 0 !important;
  border: 1px solid #fff !important;
  box-shadow: 0px 0px 1px #fff !important;
  line-height: normal !important;
}
.page-WikiWikiWeb .content {
  position: relative !important;
  bottom: 50px !important;
}

.page-WikiWikiWeb .mw-headline {
  font-weight: 600 !important;
}
.page-WikiWikiWeb h2 {
  border: 1px solid #fff !important;
}

.page-WikiWikiWeb .catlinks {
  background: rgba(0,0,0,0) !important;
  border: 1px solid #fff !important;
}

.page-WikiWikiWeb table, .page-WikiWikiWeb .thumb.tright, .page-WikiWikiWeb .mw-indicators, .page-WikiWikiWeb #mw-head, .page-WikiWikiWeb #siteSub, .page-WikiWikiWeb #toc,
.page-WikiWikiWeb .mwe-popups, .page-WikiWikiWeb .navbox, .page-WikiWikiWeb a[title="Help:Category"], .page-WikiWikiWeb .noprint {
  display: none !important;
}
.page-WikiWikiWeb, .page-WikiWikiWeb #firstHeading, .page-WikiWikiWeb .mw-headline, .page-WikiWikiWeb .mw-editsection, .page-WikiWikiWeb .reference {
  font-family: 'Times New Roman', serif !important;
}
`)

// Custom Titles
GM_addStyle (`
/* Interstate */
[class^="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject mw-editable page-Interstate_"] h1,
[class^="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Interstate_"] h1 {
  font-family: 'Overpass', sans-serif !important;
}
`)

// Custom Backgrounds
GM_addStyle (`
/** LGBT **/
.page-LGBT {
  background-image: linear-gradient(red, orange, yellow, lime, blue, purple) !important;
  background-attachment: fixed !important;
}
.page-Asexuality {
  background-image: linear-gradient(black, gray, white, purple) !important;
  background-attachment: fixed !important;
}
.page-Pansexuality {
  background-image: linear-gradient(pink, pink, yellow, lightblue, lightblue) !important;
  background-attachment: fixed !important;
}
.page-Transgender {
  background-image: linear-gradient(lightblue, pink, white, pink, lightblue) !important;
  background-attachment: fixed !important;
}

/** Wikipedia Languages **/
/* Philippines */
.page-Cebuano_Wikipedia, .page-Waray_Wikipedia, .page-Tagalog_Wikipedia {
  background-image: linear-gradient(blue, red) !important;
  background-attachment: fixed !important;
}

/* Indonesia & Monaco */
.page-Javanese_Wikipedia {
  background-image: linear-gradient(red, white, white) !important;
  background-attachment: fixed !important;
}

/* Spain */
.page-Spanish_Wikipedia {
  background-image: linear-gradient(red, orange, orange, red) !important;
  background-attachment: fixed !important;
}

/* South Africa */
.page-Afrikaans_Wikipedia {
  background-image: linear-gradient(red, red, red, red, red, white, green, green, white, blue, blue, blue, blue, blue) !important;
  background-attachment: fixed !important;
}

/* India */
.page-Hindi_Wikipedia {
  background-image: linear-gradient(orange, white, green) !important;
  background-attachment: fixed !important;
}

/** TikTok **/
.page-TikTok, .page-List_of_most-followed_TikTok_accounts, .page-Censorship_of_TikTok, .page-Donald_Trump–TikTok_controversy {
  background-image: linear-gradient(90deg, rgba(0,242,234,1) 0%, rgba(0,0,0,1) 50%, rgba(255,0,79,1) 100%) !important;
}
`)

// Blocked Article
GM_addStyle (`
.page-Murder_of_George_Floyd {
  background: #ff0000 !important;
}
.page-Murder_of_George_Floyd #mw-content-text {
  content: "This article has been blocked by Modernpedia due to it's graphic nature. If you want to read it, disable Modernpedia.";
}
.page-Murder_of_George Floyd .catlinks {
  display: none !important;
}
`)

// Add the fonts
GM_addStyle (`
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRjRdE.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RjRdE.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RjRdE.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRjRdE.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRjRdE.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjRdE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rj.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SeW4Ep0.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_QOW4Ep0.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_R-W4Ep0.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_S-W4Ep0.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SuW4Ep0.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v12/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWkU1Z4Y.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v12/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFU0U1Z4Y.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v12/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUU1Z4Y.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v12/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v12/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overpass/v5/qFdH35WCmI96Ajtm81GrU9vyww.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/overpass/v5/qFdH35WCmI96Ajtm81GlU9s.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`);

// ==UserScript==
// @namespace    https://github.com/5qc/Modernpedia
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
