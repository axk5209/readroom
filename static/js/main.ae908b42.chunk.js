(this.webpackJsonpreadroom=this.webpackJsonpreadroom||[]).push([[0],{113:function(a,e,t){a.exports=t.p+"static/media/AlternateVisual.9a5c5ddb.png"},114:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),l=t(10),c=t(148),s=t(150),u=t(152),m=t(116),d=t(19),g=t(153),E=t(55),p=Object(c.a)((function(a){return{root:{flexGrow:1},menuButton:{},title:{flexGrow:1,fontWeight:"bold"}}}));function S(){var a=p();return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(g.a,{component:d.b,to:"/home"},r.a.createElement("img",{src:E,style:{maxWidth:"60px"},alt:"logo"})),r.a.createElement(m.a,{variant:"h4",className:a.title},"ead Room"))))}var h=t(17),b=t(154),f=t(164),M=t(156),y=t(157),I=t(166),C=t(163),G=t(167),N=t(158),v=t(165),B=t(155),T=t(93),A=t(94),w=Object(c.a)((function(a){return{message:{flexGrow:1,fontWeight:"bold",color:"indigo"},subheading:{flexGrow:1,color:"indigo"},buttons:{color:"indigo"},formControl:{margin:a.spacing(1),minWidth:120},selectEmpty:{marginTop:a.spacing(2)}}})),O=function(){console.log(T),console.log(A);var a=w(),e=r.a.useState("entertainment"),t=Object(h.a)(e,2),n=t[0],i=t[1],o=r.a.useState("us"),l=Object(h.a)(o,2),c=l[0],s=l[1];r.a.useEffect((function(){var a=JSON.parse(window.localStorage.getItem("category")),e=JSON.parse(window.localStorage.getItem("country"));a&&i(a),e&&s(e)}),[]);return r.a.createElement(b.a,{align:"center"},r.a.createElement(f.a,{p:6}),r.a.createElement(m.a,{variant:"h4",className:a.message},"I would like to read about... "),r.a.createElement(f.a,{p:3}),r.a.createElement(v.a,{orientation:"vertical",value:n,exclusive:!0,onChange:function(a,e){i(e),window.localStorage.setItem("category",JSON.stringify(e))},size:"large"},r.a.createElement(B.a,{value:"entertainment","aria-label":"entertainment",className:a.buttons},"Entertainment"),r.a.createElement(B.a,{value:"sports","aria-label":"sports",className:a.buttons},"Sports"),r.a.createElement(B.a,{value:"technology","aria-label":"technology",className:a.buttons},"Technology")),r.a.createElement(f.a,{p:3}),r.a.createElement(M.a,{container:!0,direction:"row",alignItems:"center",justify:"center"},r.a.createElement(M.a,{item:!0},r.a.createElement(m.a,{variant:"h4",className:a.message},"...in the country of")),r.a.createElement(f.a,{pr:4}),r.a.createElement(f.a,{pb:4}),r.a.createElement(M.a,{item:!0},r.a.createElement(y.a,{variant:"outlined",className:a.formControl},r.a.createElement(I.a,{id:"demo-simple-select-outlined-label"},"Country"),r.a.createElement(C.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c,onChange:function(a){var e=a.target.value;s(e),window.localStorage.setItem("country",JSON.stringify(e))},label:"Country"},T.map((function(a){return r.a.createElement(G.a,{value:a},A[a.toUpperCase()])})))))),r.a.createElement(f.a,{p:3}),r.a.createElement(N.a,{component:d.b,to:"/list/".concat(n,"/").concat(c),variant:"outlined",color:"primary",size:"large",style:{textTransform:"none",fontSize:"30px",minWidth:"30%",minHeight:"10%"}},"Make Room!"))},R=t(159),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null),r.a.createElement(S,null),r.a.createElement(O,null))},P=t(55),x=Object(c.a)((function(a){return{root:{flexGrow:1},menuButton:{},title:{flexGrow:1,fontWeight:"bold"}}}));function K(){var a=x();return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(g.a,{component:d.b,to:"/home"},r.a.createElement("img",{src:P,style:{maxWidth:"60px"},alt:"logo"})),r.a.createElement(m.a,{variant:"h4",className:a.title},"ead Room"))))}var k=t(39),F=t.n(k),H=t(47),W=t(67),j=t.n(W),U={getTopHeadlines:function(){var a=Object(H.a)(F.a.mark((function a(e,t){var n,r,i,o,l;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://newsapi.org/v2/top-headlines?",n="category=".concat(e,"&"),r="country=".concat(t,"&"),i="apiKey=".concat("78b9d599c4f94f8fa3afb1a5458928d6"),o="https://newsapi.org/v2/top-headlines?"+r+n+i,a.next=7,j.a.get(o);case 7:return l=a.sent,a.abrupt("return",l.data);case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},V=t(4),D=t(160),J=t(162),z=t(161),Z=t(113);var Y=Object(V.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{marginBottom:16,fontSize:12},pos:{marginBottom:12},media:{height:140},img:{maxHeight:140}})((function(a){var e=a.classes,t=r.a.useState(!1),n=Object(h.a)(t,2),i=n[0],o=n[1],l=r.a.useState(null),c=Object(h.a)(l,2),s=c[0],u=c[1],d=r.a.useState(null),g=Object(h.a)(d,2),E=g[0],p=g[1],S=r.a.useState(null),b=Object(h.a)(S,2),y=b[0],I=b[1],C=r.a.useState(null),G=Object(h.a)(C,2),v=G[0],B=G[1],T=r.a.useState(null),A=Object(h.a)(T,2),w=A[0],O=A[1],R=r.a.useState(null),L=Object(h.a)(R,2),P=L[0],x=L[1];return r.a.useEffect((function(){o(a.data),u(a.data.source.name),p(a.data.title.substr(0,a.data.title.lastIndexOf("-")-1)),I(new Date(a.data.publishedAt).toDateString()),B(a.data.description?"".concat(a.data.description):"\n"),O(a.data.urlToImage?a.data.urlToImage:Z),x(a.data.url)}),[a.data]),r.a.createElement(f.a,{py:5},i&&r.a.createElement(D.a,{className:e.card},r.a.createElement(M.a,{container:!0},r.a.createElement(M.a,{container:!0,md:8,sm:7},r.a.createElement(z.a,null,r.a.createElement(m.a,{className:e.title,color:"textSecondary"}," ",s," "),r.a.createElement(m.a,{variant:"headline",component:"h2"}," ",E," "),r.a.createElement(m.a,{className:e.pos,color:"textSecondary"}," ",y),r.a.createElement(m.a,{component:"p",style:{textTransform:"italic"}},r.a.createElement(f.a,{fontStyle:"italic"},v)))),r.a.createElement(M.a,{container:!0,md:4,sm:5,align:"center",alignItems:"center",justify:"center"},r.a.createElement(f.a,{py:4},r.a.createElement("img",{className:e.img,alt:"Article Visual",src:w}))),r.a.createElement(M.a,{container:!0,xs:12,align:"center",alignItems:"center",justify:"center"},r.a.createElement(J.a,{style:{minWidth:"100%"}},r.a.createElement(N.a,{size:"large",href:P,fullWidth:!0},"Read More"),r.a.createElement(f.a,{py:4}))))))})),Q=function(){var a=Object(l.g)().category,e=Object(l.g)().country,t=r.a.useState(null),n=Object(h.a)(t,2),i=n[0],o=n[1];return r.a.useEffect((function(){function t(){return(t=Object(H.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.getTopHeadlines(a,e);case 2:n=t.sent,o(n.articles);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a,e]),r.a.createElement(b.a,{maxWidth:"md"},r.a.createElement(f.a,{p:6}),r.a.createElement(b.a,{align:"center"}),i&&i.map((function(a){return r.a.createElement(Y,{data:a})})),r.a.createElement(f.a,{p:6}))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null),r.a.createElement(K,null),r.a.createElement(Q,null))},X=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/home"},r.a.createElement(L,null)),r.a.createElement(l.b,{path:"/list/:category/:country"},r.a.createElement(q,null)),r.a.createElement(l.a,{from:"/",to:"/home"}))};var $=function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},55:function(a,e,t){a.exports=t.p+"static/media/HeaderLogo.4175f600.png"},83:function(a,e,t){a.exports=t(114)},93:function(a){a.exports=JSON.parse('["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"]')},94:function(a){a.exports=JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}')}},[[83,1,2]]]);
//# sourceMappingURL=main.ae908b42.chunk.js.map