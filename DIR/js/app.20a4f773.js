(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-201f0bac":"d6784d60","chunk-bc41f85e":"117923cf"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-201f0bac":1,"chunk-bc41f85e":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-201f0bac":"4efa7c2c","chunk-bc41f85e":"36445dfa"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],d.parentNode.removeChild(d),n(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="DIR/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a64":function(e,t,n){"use strict";n("27ca")},"17e5":function(e,t,n){},"27ca":function(e,t,n){},3262:function(e,t,n){},3597:function(e,t,n){},"387b":function(e,t,n){"use strict";n("17e5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"index"}},[e._m(0),n("div",{staticClass:"top"}),e.winresize?n("Socials",{attrs:{winresize:e.winresize}}):e._e(),e.isMobile?e._e():n("Cursorr"),n("router-view",{attrs:{winresize:e.winresize}})],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"/"}},[r("img",{staticClass:"logo",attrs:{src:n("704e")}})])}],a=(n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cursorouter"},[n("div",{ref:"cursor",staticClass:"cursor"},[n("div",{ref:"eyes",staticClass:"eyes"}),n("div",{ref:"memoji",staticClass:"memoji"}),n("div",{ref:"heart",staticClass:"heart"})])])}),s=[],c=(n("99af"),{name:"Template",props:{},data:function(){return{}},computed:{},components:{},methods:{},mounted:function(){var e=this;window.addEventListener("mousemove",(function(t){e.$refs.cursor.style="transform: translateX(".concat(t.clientX,"px) translateY(").concat(t.clientY,"px)"),"piece"===t.target.className?(e.$refs.cursor.style.background="none",e.$refs.eyes.style.opacity="1",e.$refs.memoji.style.opacity="0",e.$refs.heart.style.opacity="0"):t.target.className.includes("heart")?(e.$refs.memoji.style.opacity="0",e.$refs.heart.style.opacity="1",e.$refs.eyes.style.opacity="0"):(e.$refs.memoji.style.opacity="1",e.$refs.heart.style.opacity="0",e.$refs.eyes.style.opacity="0")}))}}),u=c,l=(n("0a64"),n("2877")),f=Object(l["a"])(u,a,s,!1,null,"c8b520ee",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"socials"},[e.winresize.width>900?n("div",{staticClass:"largenav"},[n("Contact"),e._l(e.$socials.items,(function(t,r){return n("transition",{key:r},[n("div",{staticClass:"socialiconouter heart"},[n("a",{attrs:{href:e.$cms.textField(t.link),target:"_blank"}},[t.icon.url?n("img",{staticClass:"socialicon heart",attrs:{src:t.icon.url}}):e._e()])])])}))],2):n("div",{staticClass:"smallnav"},[e.showMobileNav?n("p",{staticClass:"burger",on:{click:e.navDrawer}},[e._v("✕")]):n("p",{staticClass:"burger",on:{click:e.navDrawer}},[e._v("☰")]),e.showMobileNav?n("div",{staticClass:"mobilenavscreen"},[n("div",{staticClass:"mobilenavscreeninner"},[n("Contact"),n("br"),e._l(e.$socials.items,(function(t,r){return n("transition-group",{key:r},[n("div",{key:"social"+r,staticClass:"socialiconouter heart"},[n("a",{attrs:{href:e.$cms.textField(t.link),target:"_blank"}},[t.icon.url?n("img",{staticClass:"socialicon heart",attrs:{src:t.icon.url}}):e._e()])]),n("br",{key:"br"+r})])}))],2)]):e._e()])])},h=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact heart"},[n("a",{attrs:{href:"mailto:rebjanec@gmail.com"}},[n("p",{staticClass:"heart"},[e._v("Let's get in touch!")])])])}],b={name:"Socials",props:{},data:function(){return{}},computed:{},components:{},methods:{},mounted:function(){}},y=b,g=(n("387b"),Object(l["a"])(y,m,v,!1,null,"f41b40ea",null)),w=g.exports,_={name:"Socials",watch:{winresize:function(e){this.winresize.width>900&&(this.showMobileNav=!1)}},props:{winresize:Object},data:function(){return{showMobileNav:!1}},computed:{},components:{Contact:w},methods:{navDrawer:function(){this.showMobileNav=!this.showMobileNav}},mounted:function(){console.log(this.winresize)}},k=_,C=(n("def9"),Object(l["a"])(k,p,h,!1,null,"458cdb4e",null)),j=C.exports,$={name:"App",props:{},data:function(){return{isMobile:!1,winresize:null}},computed:{},components:{Cursorr:d,Socials:j},methods:{},mounted:function(){var e=this;this.winresize={width:window.innerWidth,height:window.innerHeight},window.addEventListener("resize",(function(t){e.winresize={width:window.innerWidth,height:window.innerHeight}}));var t=[navigator.userAgent.includes("iPhone"),navigator.userAgent.includes("Android"),navigator.userAgent.includes("iPad")];this.isMobile=t.indexOf(!0)>-1}},x=$,O=(n("5f9a"),Object(l["a"])(x,i,o,!1,null,null,null)),E=O.exports,z=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(z["a"]);var P=new z["a"]({base:"",mode:"history",routes:[{path:"",component:function(){return n.e("chunk-201f0bac").then(n.bind(null,"3dfd"))}},{path:"/:slug",component:function(){return n.e("chunk-bc41f85e").then(n.bind(null,"617f"))}}]}),S=P,T=n("d4ec"),M=n("bee2"),N=(n("4de4"),n("4e82"),n("de0c")),A=(n("ea06"),n("36eb")),L="https://rebj2021.cdn.prismic.io/api/v2",R=new(function(){function e(){Object(T["a"])(this,e)}return Object(M["a"])(e,[{key:"prismic",value:function(){return new Promise((function(e){N["a"].api(L).then((function(e){return e.query("",{pageSize:100})})).then((function(t){return new Promise((function(e){r["a"].prototype.$portfolio=[],r["a"].prototype.$portfolio_simplified=[];var n=t.results.filter((function(e){return"work"===e.type}));n=n.sort((function(e,t){return e.data.order-t.data.order}));for(var i=0;i<n.length;i++){r["a"].prototype.$portfolio.push(n[i]);for(var o=0;o<=n[i].data.body.length;o++)n[i].data.body[o]&&r["a"].prototype.$portfolio_simplified.push(n[i].data.body[o])}e()})).then((function(){r["a"].prototype.$intro=t.results.filter((function(e){return"main_page"===e.type}))[0].data,r["a"].prototype.$socials=t.results.filter((function(e){return"menu"===e.type}))[0].data.body.filter((function(e){return"socialmenu"===e.slice_type}))[0],r["a"].prototype.$menu=t.results.filter((function(e){return"menu"===e.type}))[0].data.body.filter((function(e){return"menu"===e.slice_type}))[0],e()}))}))}))}}]),e}());r["a"].prototype.$cms=new(function(){function e(){Object(T["a"])(this,e)}return Object(M["a"])(e,[{key:"text",value:function(e){return A.RichText.asText(this.fields[e])}},{key:"textField",value:function(e){return A.RichText.asText(e)}},{key:"html",value:function(e){return A.RichText.asHtml(this.fields[e])}},{key:"htmlField",value:function(e){return A.RichText.asHtml(e)}}]),e}()),r["a"].config.productionTip=!1,R.prismic().then((function(){new r["a"]({router:S,render:function(e){return e(E)}}).$mount("#index")}))},"5f9a":function(e,t,n){"use strict";n("3597")},"704e":function(e,t,n){e.exports=n.p+"img/DesignByREBJ.cc95339a.svg"},def9:function(e,t,n){"use strict";n("3262")},ea06:function(e,t,n){"use strict";var r=n("d4ec"),i=n("bee2");n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),new(function(){function e(t){return Object(r["a"])(this,e),t}return Object(i["a"])(e,[{key:"blobify",value:function(e){return new Promise((function(t){fetch(e).then((function(n){return n.blob().then((function(n){return e="".concat(URL.createObjectURL(n).toString()),t(e),e}))}))}))}}]),e}())}});
//# sourceMappingURL=app.20a4f773.js.map