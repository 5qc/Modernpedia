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
