(this["webpackJsonpreact-currency-converter"]=this["webpackJsonpreact-currency-converter"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),s=c.n(r),i=(c(12),c(13),c(0));function o(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"main-header",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"wallet-icon",width:"52",height:"52",fill:"currentColor",alt:"wallet-icon",className:"bi bi-wallet",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"})}),Object(i.jsx)("h1",{children:"Conversor de moedas"})]}),Object(i.jsx)("h2",{children:"Selecione as moedas"})]})}var l=c(4),d=c.n(l),j=c(7),A=c(2),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAMAAAAkyw3kAAAAh1BMVEX+3wDu0we+sB0hpDE3qi1KrygInjgAmzoAJ3YToDUPMW8fQIaPjzTn2QU/VFgtTI47WpX43QGuyRKZxBfR0wqov8uNwRl8vB5efqUgPmff1gcQNH4BmzpjtiPBzg2jxhXW7eAfPWeSubggQoetzL/v2gNKbZljdHhLc4ycr2+14cXC4NI6VHmUxPVgAAAA9UlEQVQ4y73UyRKCMAwA0CCLLQUKKvsiuG///31mKIsjIPVCDj1k3kxImgJryYBFoKZJQSMACIx5qCeAkegzkO6hiT39AbP8DIrlmKZjKWDn2RRUC4BVTOqIVwCFOgqN0ENHukDphcYQajv8MCXuYaxgYqd9QbqtO7g/yvLgHy6pi9KqU1v6CXVbtHplhBzdyC99lI7I2XoH1U07E7Mp60Yn/2i22Q0dhUzY6HnroDoo7fAUTX0QfhqU7puxUhI11bk71kw3nopwThjD8uw1Op7vgbPpgbdXWAlZTV/hH0uxzjLJNUMqu7jiKXgyT0H+cS32A3gD3OAiYEPQ1/8AAAAASUVORK5CYII=",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAVBAMAAADGNLEtAAAALVBMVEXGWWb////YkZo8O27ZkJmyIjRUU4BIR3fsyMzsyM21nbBzcpdgX4mUlLCFhKRMRAwAAAAAiklEQVQY02MwMy5ONjM3Tg5FAgzWZembQdgFCTCYX6+1OX691lgQCTDYmSU/BmEGZGB8vcrmMFAliqCtzeHHIIyi3RhoJkilEhJgsE5L2wzCKE4y25adlrYtOxlFuznYldbFM5EAgx3QEhBG0b4KCjqQAIMgFsAQigUwuGAB2LUTD7BqV8ICsDoJABuIZ60LUleQAAAAAElFTkSuQmCC",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbBAMAAAD8PtBdAAAAMFBMVEUAM5kQPI/rwQpZaWI8V3QuTn1+fkwfRYb4yAJKX2yfkjkuTnzathSxni1wdVWakDtqSfnJAAAAd0lEQVQoz2NgoBLgDsAQYmEoUmdwQBO0eMBswNeMJhg/gYGB8yuqmACEYkQW41KB0E4LkATZFCA0UwKyUqi+AoIOF4MxEpE0n4D6hrVHACE6GcawJGgoTRzvCwxLzitoNkUYcAcwt6IJCm4oUucWxHAVswG1YhsApc8QsWtXDHMAAAAASUVORK5CYII=";function g(){var e=Object(n.useState)("Moeda de entrada"),t=Object(A.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("Moeda de sa\xedda"),s=Object(A.a)(r,2),o=s[0],l=s[1],g=Object(n.useState)("Resultado"),x=Object(A.a)(g,2),O=x[0],m=x[1],p=Object(n.useState)(""),w=Object(A.a)(p,2),f=w[0],v=w[1];function U(e){a(e)}function C(e){l(e)}var B=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://free.currconv.com/api/v7/convert?q=".concat(o,"_").concat(c,"&compact=ultra&apiKey=").concat("acca559398e7c910f2a5"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,m((t/a["".concat(o,"_").concat(c)]).toFixed(2)),e.abrupt("return",t/a["".concat(o,"_").concat(c)]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(O),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"all",children:[Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"entrada","data-bs-toggle":"dropdown","aria-expanded":"false",children:c}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:b,alt:"brl-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"BRL1",onClick:function(){return U("BRL")},children:"BRL"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:h,alt:"usd-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"USD1",onClick:function(){return U("USD")},children:"USD"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:u,alt:"eur-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"EUR1",onClick:function(){return U("EUR")},children:"EUR"})]})]}),Object(i.jsx)("svg",{id:"arrow-icon",alt:"arrow-icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-left-right",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{fillRule:"evenodd",d:"M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"})}),Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"saida","data-bs-toggle":"dropdown","aria-expanded":"false",children:o}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:b,alt:"brl-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"BRL2",onClick:function(){return C("BRL")},children:"BRL"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:h,alt:"usd-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"USD2",onClick:function(){return C("USD")},children:"USD"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:u,alt:"eur-flag"}),Object(i.jsx)("button",{className:"dropdown-item",href:"#",id:"EUR2",onClick:function(){return C("EUR")},children:"EUR"})]})]})]}),Object(i.jsx)("h2",{children:"Digite o valor desejado"}),Object(i.jsx)("input",{type:"input",placeholde:"Valor a ser convertido",onChange:function(e){v(e.target.value)},id:"val-input"}),Object(i.jsx)("button",{className:"converter",id:"converter",onClick:function(){return B(f)},children:"Converter"}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"result",id:"result",children:O})}),Object(i.jsxs)("h3",{children:["Feito com ",Object(i.jsx)("span",{children:"bootstrap"})]}),Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://github.com/fmagesty",children:"github.com/fmagesty"})}),Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-person-circle",id:"github-icon",alt:"github-icon",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(i.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})]})]})})}c(16).config();var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(g,{})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fe007df2.chunk.js.map