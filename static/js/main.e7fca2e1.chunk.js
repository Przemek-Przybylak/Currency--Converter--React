(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,u,j,d,l,b,x,p,h=t(1),g=t.n(h),O=t(10),m=t.n(O),f=(t(19),t(4)),w=[{name:"EUR",rate:4.55},{name:"USD",rate:3.79},{name:"CHF",rate:4.13}],v=t(2),y=t(3),k=y.a.section(r||(r=Object(v.a)(["\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    max-width: 300px;\n    background-color: rgb(4, 164, 228);\n    color: white;\n    font-weight: 700;\n    padding: 5px;\n"]))),z=y.a.p(c||(c=Object(v.a)(["\n    padding: 0;\n    margin: 0;\n"]))),S=t(0),F=function(e){var n=e.result;return Object(S.jsx)(k,{children:Object(S.jsxs)(z,{children:[Object(S.jsx)("span",{children:"Wynik to: "}),Object(S.jsx)("strong",{children:n&&Object(S.jsxs)(S.Fragment,{children:[n.sourceAmount?" ".concat(n.sourceAmount.toFixed(2)," PLN = "):"",n.targetAmount?"".concat(n.targetAmount.toFixed(2)," "):"",n.sourceAmount?n.currency:""]})})]})})},A=y.a.div(a||(a=Object(v.a)(["\n    margin: 0px;\n    margin-bottom: 10px;\n    color: rgb(172, 172, 172);\n    font-family: 'Roboto Mono', monospace;\n    font-size: 10px;\n"]))),C=y.a.p(i||(i=Object(v.a)(["\n    margin: 0px;\n    display: flex;\n    justify-content: flex-end;\n"]))),P=function(){var e=function(){var e=Object(h.useState)(new Date),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(h.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[r]),t}();return Object(S.jsx)(A,{children:Object(S.jsxs)(C,{children:["Dzisiaj jest"," ",e.toLocaleString("pl",{weekday:"long",day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})]})})},D=t(8),E=t.n(D),L=t(14),N=function(){var e=Object(h.useState)({state:"loading"}),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(h.useEffect)((function(){setTimeout(function(){var e=Object(L.a)(E.a.mark((function e(){var n,t,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangerate.host/latest?base=PLN");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=9,n.json();case 9:t=e.sent,c=t.rates,a=t.date,r({state:"success",rates:c,date:a}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),r({state:"error"});case 18:case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),1e3)}),[]),t},I=y.a.form(o||(o=Object(v.a)(["\n    margin: 20px auto;\n    max-width: 600px;\n"]))),R=y.a.div(s||(s=Object(v.a)(["\n    padding: 10px 20px 10px 20px;\n    background-color: white;\n    border: 1px solid #ccc;\n"]))),T=y.a.label(u||(u=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n"]))),U=y.a.fieldset(j||(j=Object(v.a)(["\n    padding: 15px;\n    border: none;\n    width: 100%;\n    margin-bottom: 20px;\n"]))),W=y.a.legend(d||(d=Object(v.a)(["\n    margin: auto;\n    background-color: rgb(4, 164, 228);\n    color: white;\n    font-weight: 700;\n"]))),B=y.a.span(l||(l=Object(v.a)(["\n    display: inline-block;\n    width: 100%;\n    max-width: 200px;\n    margin: 5px;\n"]))),J=y.a.input(b||(b=Object(v.a)(["\n    width: 100%;\n    max-width: 300px;\n    padding: 3px;\n    border: 1px solid #ccc;\n    text-align: center;\n    font-weight: 700;\n\n    @media (max-width:836px) {\n        max-width: none;\n    };\n\n    &:invalid {\n        background-color: rgb(255, 180, 180);\n    };\n"]))),M=y.a.button(x||(x=Object(v.a)(["\n    margin: 5px auto;\n    width: 100%;\n    border: none;\n    padding: 3px;\n    background-color: rgb(4, 164, 228);\n    color: white;\n"]))),_=function(){var e=Object(h.useState)(),n=Object(f.a)(e,2),t=n[0],r=n[1],c=N(),a=Object(h.useState)("EUR"),i=Object(f.a)(a,2),o=i[0],s=i[1],u=Object(h.useState)(""),j=Object(f.a)(u,2),d=j[0],l=j[1];return Object(S.jsx)(I,{children:Object(S.jsxs)(R,{children:[Object(S.jsx)(P,{}),Object(S.jsx)(U,{children:"loading"===c.state?Object(S.jsx)("p",{children:"Prosz\u0119 czeka\u0107, trwa pobieranie danych..."}):"error"===c.state?Object(S.jsxs)("p",{children:["Niestety nie uda\u0142o si\u0119 za\u0142adowa\u0107 walut",Object(S.jsx)("br",{}),"Sprawdz czy masz internet, je\u015bli masz to spr\xf3buj p\xf3\u017aniej!"]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W,{children:"Kalkulator walutowy"}),Object(S.jsx)("p",{children:Object(S.jsxs)(T,{children:[w,Object(S.jsx)(B,{children:"Podaj kwot\u0119 w PLN: "}),Object(S.jsx)(J,{type:"number",min:"1",step:"1",placeholder:"Wpisz kwot\u0119...",className:"form__input ",value:d,onChange:function(e){var n=e.target;return l(n.value)}})]})}),Object(S.jsxs)(T,{children:[Object(S.jsx)(B,{children:"Wybierz walut\u0119"}),Object(S.jsxs)(J,{as:"select",value:o,onChange:function(e){var n=e.target;return s(n.value)},children:[Object.keys(c.rates).map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)})),";"]})]})]})}),Object(S.jsx)(M,{onClick:function(e){e.preventDefault(),function(e,n){var t=c.rates[e];r({sourceAmount:+n,targetAmount:n*t,currency:e})}(o,d)},children:"Przelicz"}),Object(S.jsx)(M,{type:"reset",onClick:function(){l(""),r("")},children:"Wyczy\u015b\u0107 formularz"}),Object(S.jsx)(F,{result:t})]})})},H=y.a.main(p||(p=Object(v.a)(['\n    margin: 0px auto;\n    background-image: url("https://cdn.wallpapersafari.com/14/53/1xAB3U.jpg");\n    background-size: cover;\n    height: 100vh;\n    overflow-y: hidden;\n']))),K=function(e){return Object(S.jsx)(H,{children:e.children})};var q=function(e,n){var t=N();return Object(S.jsx)(K,{children:Object(S.jsx)(_,{result:e,currenciess:t,getResult:n})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};m.a.render(Object(S.jsx)(g.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),G()}},[[24,1,2]]]);
//# sourceMappingURL=main.e7fca2e1.chunk.js.map