(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53dbb48a"],{"216c":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},[e("div",{staticClass:"navwrapper"},[e("ul",{ref:"nav"},t._l(t.$menu.items,(function(n,i){return e("li",{key:i},[e("a",{attrs:{href:t.$cms.textField(n.link)}},[e("p",{ref:"p",refInFor:!0,staticStyle:{"font-size":"30px"}},[t._v(" "+t._s(t.$cms.textField(n.label))+" ")])])])})),0)])])},s=[],a={name:"Nav",props:{winresize:Object},data:function(){return{nav:[{label:"Album Artwork",link:"#album-artwork"},{label:"Motion Graphics",link:"#motion-graphics"},{label:"Illustration",link:"#illustration"},{label:"Logos",link:"#album-artwork"}]}},watch:{winresize:function(){this.navresize()}},computed:{},components:{},methods:{navresize:function(){for(var t=.8*window.innerWidth,n=0;n<this.$refs.p.length;n++)this.$refs.p[n].style.fontSize="".concat(Math.max(t/34,16),"px")}},mounted:function(){var t=this;this.$nextTick((function(){t.navresize()}))}},r=a,c=(e("c103"),e("2877")),l=Object(c["a"])(r,i,s,!1,null,"25d5d0c2",null);n["a"]=l.exports},3522:function(t,n,e){},7624:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bank-list"}},[e("Nav",{attrs:{winresize:t.winresize}}),e("div",{staticClass:"links"},t._l(t.$bank.banks,(function(t,n){return e("transition",{key:n},[e("div",{staticClass:"link"},[e("img",{attrs:{src:t.logo.url}})])])})),1)],1)},s=[],a=e("216c"),r={name:"App",props:{winresize:Object},data:function(){return{}},computed:{},components:{Nav:a["a"]},methods:{},mounted:function(){}},c=r,l=(e("d616"),e("2877")),o=Object(l["a"])(c,i,s,!1,null,null,null);n["default"]=o.exports},c103:function(t,n,e){"use strict";e("3522")},d616:function(t,n,e){"use strict";e("fd0d")},fd0d:function(t,n,e){}}]);
//# sourceMappingURL=chunk-53dbb48a.9d89be44.js.map