(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-201f0bac"],{"0240":function(t,e,n){"use strict";n("e835")},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),a=n("e330"),o=n("d784"),c=n("44e7"),s=n("825a"),l=n("1d80"),u=n("4840"),f=n("8aa5"),d=n("50c4"),p=n("577e"),v=n("dc4a"),x=n("f36a"),h=n("14c3"),g=n("9263"),m=n("9f7f"),b=n("d039"),w=m.UNSUPPORTED_Y,I=4294967295,y=Math.min,E=[].push,$=a(/./.exec),_=a(E),k=a("".slice),R=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=p(l(this)),o=void 0===n?I:n>>>0;if(0===o)return[];if(void 0===t)return[a];if(!c(t))return i(e,a,t,o);var s,u,f,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,v+"g");while(s=i(g,m,a)){if(u=m.lastIndex,u>h&&(_(d,k(a,h,s.index)),s.length>1&&s.index<a.length&&r(E,d,x(s,1)),f=s[0].length,h=u,d.length>=o))break;m.lastIndex===s.index&&m.lastIndex++}return h===a.length?!f&&$(m,"")||_(d,""):_(d,k(a,h)),d.length>o?x(d,0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=l(this),o=void 0==e?void 0:v(e,t);return o?i(o,e,r,n):i(a,p(r),e,n)},function(t,r){var i=s(this),o=p(t),c=n(a,i,o,r,a!==e);if(c.done)return c.value;var l=u(i,RegExp),v=i.unicode,x=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),g=new l(w?"^(?:"+i.source+")":i,x),m=void 0===r?I:r>>>0;if(0===m)return[];if(0===o.length)return null===h(g,o)?[o]:[];var b=0,E=0,$=[];while(E<o.length){g.lastIndex=w?0:E;var R,z=h(g,w?k(o,E):o);if(null===z||(R=y(d(g.lastIndex+(w?E:0)),o.length))===b)E=f(o,E,v);else{if(_($,k(o,b,E)),$.length===m)return $;for(var C=1;C<=z.length-1;C++)if(_($,z[C]),$.length===m)return $;E=b=R}}return _($,k(o,b)),$}]}),!R,w)},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),a=n("825a"),o=n("1626"),c=n("c6b6"),s=n("9263"),l=r.TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var r=i(n,t,e);return null!==r&&a(r),r}if("RegExp"===c(t))return i(s,t,e);throw l("RegExp#exec called on incompatible receiver")}},"216c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"navwrapper"},[n("ul",{ref:"nav"},t._l(t.$menu.items,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:t.$cms.textField(e.link)}},[n("p",{ref:"p",refInFor:!0,staticStyle:{"font-size":"30px"}},[t._v(" "+t._s(t.$cms.textField(e.label))+" ")])])])})),0)])])},i=[],a={name:"Nav",props:{winresize:Object},data:function(){return{nav:[{label:"Album Artwork",link:"#album-artwork"},{label:"Motion Graphics",link:"#motion-graphics"},{label:"Illustration",link:"#illustration"},{label:"Logos",link:"#album-artwork"}]}},watch:{winresize:function(){this.navresize()}},computed:{},components:{},methods:{navresize:function(){for(var t=.8*window.innerWidth,e=0;e<this.$refs.p.length;e++)this.$refs.p[e].style.fontSize="".concat(Math.max(t/34,16),"px")}},mounted:function(){var t=this;this.$nextTick((function(){t.navresize()}))}},o=a,c=(n("c103"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"25d5d0c2",null);e["a"]=s.exports},3522:function(t,e,n){},"3dfd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Intro"),n("Nav",{attrs:{winresize:t.winresize}}),n("Portfolio",{attrs:{winresize:t.winresize}})],1)},i=[],a=n("216c"),o=n("a380"),c=n("ef5f"),s={name:"App",props:{winresize:Object},data:function(){return{}},computed:{},components:{Nav:a["a"],Portfolio:c["a"],Intro:o["a"]},methods:{},mounted:function(){}},l=s,u=(n("5c0b"),n("2877")),f=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=f.exports},"5c0b":function(t,e,n){"use strict";n("9c0c")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),a=n("577e"),o=n("ad6d"),c=n("9f7f"),s=n("5692"),l=n("7c73"),u=n("69f3").get,f=n("fce3"),d=n("107c"),p=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,x=v,h=i("".charAt),g=i("".indexOf),m=i("".replace),b=i("".slice),w=function(){var t=/a/,e=/b*/g;return r(v,t,"a"),r(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),I=c.UNSUPPORTED_Y||c.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],E=w||y||I||f||d;E&&(x=function(t){var e,n,i,c,s,f,d,E=this,$=u(E),_=a(t),k=$.raw;if(k)return k.lastIndex=E.lastIndex,e=r(x,k,_),E.lastIndex=k.lastIndex,e;var R=$.groups,z=I&&E.sticky,C=r(o,E),O=E.source,T=0,P=_;if(z&&(C=m(C,"y",""),-1===g(C,"g")&&(C+="g"),P=b(_,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==h(_,E.lastIndex-1))&&(O="(?: "+O+")",P=" "+P,T++),n=new RegExp("^(?:"+O+")",C)),y&&(n=new RegExp("^"+O+"$(?!\\s)",C)),w&&(i=E.lastIndex),c=r(v,z?n:E,P),z?c?(c.input=b(c.input,T),c[0]=b(c[0],T),c.index=E.lastIndex,E.lastIndex+=c[0].length):E.lastIndex=0:w&&c&&(E.lastIndex=E.global?c.index+c[0].length:i),y&&c&&c.length>1&&r(p,c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&R)for(c.groups=f=l(null),s=0;s<R.length;s++)d=R[s],f[d[0]]=c[d[1]];return c}),t.exports=x},"9c0c":function(t,e,n){},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a380:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("h1",{ref:"intro"})])},i=[],a=(n("ac1f"),n("1276"),{name:"Intro",props:{},data:function(){return{count:0}},computed:{},components:{},methods:{},mounted:function(){var t=this,e=this.$cms.textField(this.$intro.my_description).split(""),n=setInterval((function(){t.$refs.intro.innerHTML+=e[t.count],t.count+=1,e[t.count]||clearInterval(n)}),100*Math.random()+100)}}),o=a,c=(n("f944"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"ebaebd34",null);e["a"]=s.exports},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b133:function(t,e,n){},c103:function(t,e,n){"use strict";n("3522")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),a=n("9263"),o=n("d039"),c=n("b622"),s=n("9112"),l=c("species"),u=RegExp.prototype;t.exports=function(t,e,n,f){var d=c(t),p=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=p&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!p||!v||n){var x=r(/./[d]),h=e(d,""[t],(function(t,e,n,i,o){var c=r(t),s=e.exec;return s===a||s===u.exec?p&&!o?{done:!0,value:x(e,n,i)}:{done:!0,value:c(n,e,i)}:{done:!1}}));i(String.prototype,t,h[0]),i(u,d,h[1])}f&&s(u[d],"sham",!0)}},e835:function(t,e,n){},ef5f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"portfolio"}},[n("div",{staticClass:"portfolio-inner"},[n("div",{staticClass:"images"},t._l(t.$portfolio,(function(e,r){return n("div",{key:r},[n("h2",{attrs:{id:t.id(t.$cms.textField(e.data.id))}},[t._v(" "+t._s(t.$cms.textField(e.data.id))+" ")]),n("div",{staticClass:"piecewrapper"},t._l(e.data.body,(function(e,i){return n("transition",{key:i},[n("a",{attrs:{href:t.$cms.textField(e.primary.url)}},[n("div",{ref:r+"_"+i,refInFor:!0,staticClass:"piece",style:"background-image:url("+e.primary.image.url+")"})])])})),1)])})),0)])])},i=[],a=(n("ea06"),{name:"Portfolio",props:{winresize:Object},watch:{winresize:function(){}},data:function(){return{img:null,portfolio:[]}},computed:{},components:{},methods:{id:function(t){return t.toLowerCase()},lazyLoad:function(t,e){var n=this;this.$nextTick((function(){n.$nextTick((function(){var t=n.$refs[e][0].getBoundingClientRect().top;console.log(t)}))}));var r=1;return 2===r?t:""}},mounted:function(){}}),o=a,c=(n("0240"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,null,null);e["a"]=s.exports},f944:function(t,e,n){"use strict";n("b133")},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-201f0bac.d6784d60.js.map