(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-14090cee":"c17990f8","chunk-3dcfab4a":"a595713b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-14090cee":1,"chunk-3dcfab4a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-14090cee":"84004212","chunk-3dcfab4a":"568f601a"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="DIR/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a64":function(e,t,n){"use strict";n("27ca")},"0d21":function(e,t,n){"use strict";n("f6da")},"17e5":function(e,t,n){},"27ca":function(e,t,n){},3597:function(e,t,n){},"387b":function(e,t,n){"use strict";n("17e5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"index"}},[e._m(0),n("div",{staticClass:"top"}),n("Socials"),e.isMobile?e._e():n("Cursorr"),n("router-view")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"/"}},[r("img",{staticClass:"logo",attrs:{src:n("704e")}})])}],i=(n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cursorouter"},[n("div",{ref:"cursor",staticClass:"cursor"},[n("div",{ref:"eyes",staticClass:"eyes"}),n("div",{ref:"memoji",staticClass:"memoji"}),n("div",{ref:"heart",staticClass:"heart"})])])}),c=[],s=(n("99af"),{name:"Template",props:{},data:function(){return{}},computed:{},components:{},methods:{},mounted:function(){var e=this;window.addEventListener("mousemove",(function(t){e.$refs.cursor.style="transform: translateX(".concat(t.clientX,"px) translateY(").concat(t.clientY,"px)"),"piece"===t.target.className?(e.$refs.cursor.style.background="none",e.$refs.eyes.style.opacity="1",e.$refs.memoji.style.opacity="0",e.$refs.heart.style.opacity="0"):t.target.className.includes("heart")?(e.$refs.memoji.style.opacity="0",e.$refs.heart.style.opacity="1",e.$refs.eyes.style.opacity="0"):(e.$refs.memoji.style.opacity="1",e.$refs.heart.style.opacity="0",e.$refs.eyes.style.opacity="0")}))}}),u=s,l=(n("0a64"),n("2877")),f=Object(l["a"])(u,i,c,!1,null,"c8b520ee",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"socials"},[n("Contact"),e._l(e.$socials.items,(function(t,r){return n("transition",{key:r},[n("div",{staticClass:"socialiconouter heart"},[n("a",{attrs:{href:e.$cms.textField(t.link),target:"_blank"}},[t.icon.url?n("img",{staticClass:"socialicon heart",attrs:{src:t.icon.url}}):e._e()])])])}))],2)},m=[],h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact heart"},[n("a",{attrs:{href:"mailto:rebjanec@gmail.com"}},[n("p",{staticClass:"heart"},[e._v("Let's get in touch!")])])])}],v={name:"Socials",props:{},data:function(){return{}},computed:{},components:{},methods:{},mounted:function(){}},b=v,g=(n("387b"),Object(l["a"])(b,h,y,!1,null,"f41b40ea",null)),_=g.exports,j={name:"Socials",props:{},data:function(){return{}},computed:{},components:{Contact:_},methods:{},mounted:function(){}},$=j,k=(n("0d21"),Object(l["a"])($,p,m,!1,null,"44f7fd21",null)),w=k.exports,x={name:"App",props:{},data:function(){return{isMobile:!1}},computed:{},components:{Cursorr:d,Socials:w},methods:{},mounted:function(){var e=[navigator.userAgent.includes("iPhone"),navigator.userAgent.includes("Android"),navigator.userAgent.includes("iPad")];this.isMobile=e.indexOf(!0)>-1}},O=x,C=(n("5f9a"),Object(l["a"])(O,o,a,!1,null,null,null)),E=C.exports,P=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(P["a"]);var S=new P["a"]({base:"",mode:"history",routes:[{path:"",component:function(){return n.e("chunk-14090cee").then(n.bind(null,"3dfd"))}},{path:"/:slug",component:function(){return n.e("chunk-3dcfab4a").then(n.bind(null,"617f"))}}]}),T=S,A=n("d4ec"),L=n("bee2"),R=(n("4de4"),n("4e82"),n("de0c")),M=(n("ea06"),n("36eb")),N="https://rebj2021.cdn.prismic.io/api/v2",B=new(function(){function e(){Object(A["a"])(this,e)}return Object(L["a"])(e,[{key:"prismic",value:function(){return new Promise((function(e){R["a"].api(N).then((function(e){return e.query("",{pageSize:100})})).then((function(t){return new Promise((function(e){r["a"].prototype.$portfolio=[],r["a"].prototype.$portfolio_simplified=[];var n=t.results.filter((function(e){return"work"===e.type}));n=n.sort((function(e,t){return e.data.order-t.data.order}));for(var o=0;o<n.length;o++){r["a"].prototype.$portfolio.push(n[o]);for(var a=0;a<=n[o].data.body.length;a++)n[o].data.body[a]&&r["a"].prototype.$portfolio_simplified.push(n[o].data.body[a])}e()})).then((function(){r["a"].prototype.$intro=t.results.filter((function(e){return"main_page"===e.type}))[0].data,r["a"].prototype.$socials=t.results.filter((function(e){return"menu"===e.type}))[0].data.body.filter((function(e){return"socialmenu"===e.slice_type}))[0],r["a"].prototype.$menu=t.results.filter((function(e){return"menu"===e.type}))[0].data.body.filter((function(e){return"menu"===e.slice_type}))[0],e()}))}))}))}}]),e}());r["a"].prototype.$cms=new(function(){function e(){Object(A["a"])(this,e)}return Object(L["a"])(e,[{key:"text",value:function(e){return M.RichText.asText(this.fields[e])}},{key:"textField",value:function(e){return M.RichText.asText(e)}},{key:"html",value:function(e){return M.RichText.asHtml(this.fields[e])}},{key:"htmlField",value:function(e){return M.RichText.asHtml(e)}}]),e}()),r["a"].config.productionTip=!1,B.prismic().then((function(){new r["a"]({router:T,render:function(e){return e(E)}}).$mount("#index")}))},"5f9a":function(e,t,n){"use strict";n("3597")},"704e":function(e,t,n){e.exports=n.p+"img/DesignByREBJ.cc95339a.svg"},ea06:function(e,t,n){"use strict";var r=n("d4ec"),o=n("bee2");n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),new(function(){function e(t){return Object(r["a"])(this,e),t}return Object(o["a"])(e,[{key:"blobify",value:function(e){return new Promise((function(t){fetch(e).then((function(n){return n.blob().then((function(n){return e="".concat(URL.createObjectURL(n).toString()),t(e),e}))}))}))}}]),e}())},f6da:function(e,t,n){}});
//# sourceMappingURL=app.0ba55c11.js.map