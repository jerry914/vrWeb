(function(e){function t(t){for(var a,u,l=t[0],c=t[1],i=t[2],s=0,d=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43f12850"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var i=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,r[1](i)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="vrWeb/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var b=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23");r("ac1f"),r("00b4");function o(e,t,r,o,n,u){var l=Object(a["u"])("a-box"),c=Object(a["u"])("a-sphere"),i=Object(a["u"])("a-sky"),s=Object(a["u"])("a-scene");return Object(a["o"])(),Object(a["c"])("div",null,[Object(a["d"])("button",{onClick:t[0]||(t[0]=function(){return u.test&&u.test.apply(u,arguments)})},"Change sphere color"),Object(a["f"])(s,null,{default:Object(a["z"])((function(){return[Object(a["f"])(l,{position:"-1 0.5 -3",rotation:"0 45 0",color:"#4CC3D9"}),Object(a["f"])(c,{position:"0 1.25 -5",radius:"1.25",color:"blue"}),Object(a["f"])(i,{color:"#ECECEC"})]})),_:1})])}var n={methods:{test:function(){var e=document.querySelector("a-sphere"),t=e.getAttribute("color");e.setAttribute("color","blue"===t?"green":"blue")}}},u=(r("d11a"),r("6b0d")),l=r.n(u);const c=l()(n,[["render",o]]);var i=c,s=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),b=r("cf05"),d=r.n(b),v={class:"home"},p=Object(a["d"])("img",{alt:"Vue logo",src:d.a},null,-1);function f(e,t,r,o,n,u){var l=Object(a["u"])("HelloWorld");return Object(a["o"])(),Object(a["c"])("div",v,[p,Object(a["f"])(l,{msg:"Welcome to Your Vue.js App"})])}var h={class:"hello"},g=Object(a["e"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function j(e,t,r,o,n,u){return Object(a["o"])(),Object(a["c"])("div",h,[Object(a["d"])("h1",null,Object(a["w"])(r.msg),1),g])}var m={name:"HelloWorld",props:{msg:String}};r("8497");const O=l()(m,[["render",j],["__scopeId","data-v-b9167eee"]]);var y=O,k={name:"Home",components:{HelloWorld:y}};const _=l()(k,[["render",f]]);var w=_,C=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],x=Object(s["a"])({history:Object(s["b"])(),routes:C}),P=x;r("b048"),Object(a["b"])(i).use(P).mount("#app")},8497:function(e,t,r){"use strict";r("c45a")},c45a:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d11a:function(e,t,r){"use strict";r("f51d")},f51d:function(e,t,r){}});
//# sourceMappingURL=app.f3e62d07.js.map