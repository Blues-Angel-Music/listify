(this.webpackJsonplistify=this.webpackJsonplistify||[]).push([[0],{199:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(49),c=t.n(i),o=t(4),u=t(39),l=t(12),d=t(5);function s(){var n=Object(o.a)(["\n  background: white;\n  color: #001659;\n  border: 1px solid #001659;\n  padding: 0.5em 1em;\n"]);return s=function(){return n},n}var b=d.a.button(s());function f(){var n=Object(o.a)(["\n  font-size: 1rem;\n  margin: 1rem;\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)([""]);return m=function(){return n},n}var v=d.a.div(m()),p=Object(d.a)(b)(f()),g=function(n){return r.a.createElement(v,null,r.a.createElement("h2",null,"Select a Tab"),n.tabs.map((function(e){return r.a.createElement(p,{key:e.id,onClick:function(){return n.select(e.id)}},e.name)})),r.a.createElement(p,{onClick:n.create},"Create"))},h=t(94),E=t(20);function O(){var n=Object(o.a)(["\n  font-size: 1rem;\n  padding: 0.5em 1em;\n  background: ",";\n  color: ",";\n  border: ",";\n"]);return O=function(){return n},n}function w(){var n=Object(o.a)(["\n  display: flex;\n\n  & > * {\n    margin-right: 1rem;\n  }\n"]);return w=function(){return n},n}var j=d.a.div(w()),k=Object(d.a)(b)(O(),(function(n){return n.disabled?"#eee":n.secondary?"white":"#001659"}),(function(n){return n.disabled?"#777":n.secondary?"#001659":"white"}),(function(n){return n.disabled?"#eee":n.secondary?"1px solid #001659":"none"})),y=function(n){return r.a.createElement(j,null,r.a.createElement(k,{onClick:n.save,disabled:!n.isModified},"Save"),r.a.createElement(k,{onClick:n.reset,disabled:!n.isModified,secondary:!0},"Reset"),r.a.createElement(k,{onClick:n.delete,secondary:!0},"Delete"))},x=t(95),S=t.n(x),C=t(96),T=t.n(C);t(198);function L(){var n=Object(o.a)(["\n  font-size: 1.2rem;\n  padding: 0.3em 0.8em;\n"]);return L=function(){return n},n}function A(){var n=Object(o.a)(["\n  width: 100%;\n\n  & > * {\n    margin: 1rem;\n  }\n"]);return A=function(){return n},n}var B=d.a.div(A()),I=d.a.input(L());function M(n){var e=T()(n);if(e){var t=E.ContentState.createFromBlockArray(e.contentBlocks);return E.EditorState.createWithContent(t)}return null}function N(n){var e=Object(E.convertToRaw)(n.getCurrentContent());return S()(e).replace(/[\r\n]$/,"")}var z=function(n){var e=Object(a.useState)(E.EditorState.createEmpty()),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(a.useState)(n.tab.name),u=Object(l.a)(o,2),d=u[0],s=u[1],f=Object(a.useState)("init"),m=Object(l.a)(f,2),v=m[0],p=m[1];Object(a.useEffect)((function(){s(n.tab.name);var e=M(n.tab.content);e&&c(e)}),[n.tab]),Object(a.useEffect)((function(){var e=N(i);"modified"===v?e===n.tab.content&&d===n.tab.name&&p("ready"):e===n.tab.content&&d===n.tab.name||p("modified")}),[i,d]);return r.a.createElement(B,null,r.a.createElement(b,{style:{display:"block"},onClick:function(){if("modified"!==v||window.confirm("Changes you have made will be lost. Continue?")){var e=M(n.tab.content);c(e),s(n.tab.name),p("init"),n.back()}}},"Back"),r.a.createElement(I,{value:d,placeholder:"Tab name",onChange:function(n){return s(n.target.value)}}),r.a.createElement(h.Editor,{editorState:i,onEditorStateChange:c,editorStyle:{border:"1px solid #f1f1ff",padding:"0 1rem",height:"10rem",overflow:"auto"}}),r.a.createElement(y,{isModified:"modified"===v,save:function(){if(d){var e=N(i);n.updateTab({id:n.tab.id,name:d,content:e}),n.back()}else window.alert("Tab name must not be blank.")},reset:function(){s(n.tab.name);var e=M(n.tab.content);e&&c(e)},delete:function(){window.confirm("Are you sure you want to delete this tab? This action cannot be undone.")&&(n.deleteTab(n.tab.id),n.back())}}))},P=t(97);function J(){var n=Object(o.a)(["\n  margin: 1rem auto;\n"]);return J=function(){return n},n}function R(){var n=Object(o.a)(["\n  background: #f0f0ff;\n  font-family: 'Courier New', Courier, monospace;\n  max-height: 10em;\n  overflow: auto;\n  display: block;\n  padding: 1rem;\n"]);return R=function(){return n},n}function D(){var n=Object(o.a)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 400px;\n  background: white;\n  box-shadow: 0 7px 10px #777;\n  padding: 2rem;\n"]);return D=function(){return n},n}function H(){var n=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n"]);return H=function(){return n},n}var F=d.a.div(H()),G=d.a.div(D()),W=d.a.code(R()),X=Object(d.a)(b)(J()),$=function(n){return r.a.createElement(F,{onClick:n.dismiss},r.a.createElement(G,{onClick:function(n){return n.stopPropagation()}},r.a.createElement(W,null,n.children),r.a.createElement("form",{action:"https://codepen.io/pen/define",method:"POST",target:"_blank"},r.a.createElement("input",{type:"hidden",name:"data",value:JSON.stringify({title:"Listify Preview",html:n.children})}),r.a.createElement(X,null,"Preview on CodePen"))))},_=t(201);function q(){var n=Object(o.a)(["\n  font-size: 1rem;\n  color: white;\n  background: #001659;\n  margin-top: 3rem;\n"]);return q=function(){return n},n}function K(){var n=Object(o.a)(["\n  width: 100%;\n"]);return K=function(){return n},n}function Q(){var n=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  width: calc(100% * ",");\n  transform: translateX(\n    calc(\n      -100% * ","\n    )\n  );\n  transition: transform 0.2s ease-in-out;\n"]);return Q=function(){return n},n}function U(){var n=Object(o.a)(["\n  width: 100%;\n  overflow-x: hidden;\n"]);return U=function(){return n},n}function V(){var n=Object(o.a)(["\n  width: 90%;\n  max-width: 800px;\n  margin: auto;\n  padding: 2rem;\n  background: white;\n  box-shadow: 0 3px 4px #ccc;\n  margin-top: 5rem;\n"]);return V=function(){return n},n}var Y=d.a.div(V()),Z=d.a.div(U()),nn=d.a.div(Q(),(function(n){return n.children.length||1}),(function(n){return n.children.length||1}),(function(n){return(n.activeIndex||0)/(n.children.length||1)})),en=d.a.div(K()),tn=Object(d.a)(b)(q());var an=function(){var n=Object(a.useState)(P.map((function(n){return n.id=Object(_.a)(),n}))),e=Object(l.a)(n,2),t=e[0],i=e[1],c=Object(a.useState)(null),o=Object(l.a)(c,2),d=o[0],s=o[1],b=Object(a.useState)(0),f=Object(l.a)(b,2),m=f[0],v=f[1],p=Object(a.useState)(""),h=Object(l.a)(p,2),E=h[0],O=h[1],w=Object(a.useState)(!1),j=Object(l.a)(w,2),k=j[0],y=j[1];return r.a.createElement(Y,null,r.a.createElement(Z,null,r.a.createElement(nn,{activeIndex:m},r.a.createElement(en,null,r.a.createElement(g,{tabs:t,select:function(n){var e=t.find((function(e){return e.id===n}));e&&(s(e),v(1))},create:function(){var n={id:Object(_.a)(),name:"New Tab",content:""};i([].concat(Object(u.a)(t),[n])),s(n),v(1)}}),r.a.createElement(tn,{onClick:function(){O(function(n){var e=' <div id="tab-area" class="tab-area">\n    '.concat(n.map((function(n){return'<div class="tab-selector" data-target="#'.concat(n.id,'">').concat(n.name,"</div>")})).join(""),"\n  </div>"),t=' <div class="tab-content-area">\n    '.concat(n.map((function(n){return'<div id="'.concat(n.id,'" class="tab-content">').concat(n.content,"</div>")})).join(""),"\n  </div>");return"".concat("<style>\n  :root {\n    font-family: Helvetica, Arial, sans-serif;\n    box-sizing: border-box;\n  }\n\n  .tab-wrapper {\n    width: 100%;\n    max-width: 768px;\n    margin: auto;\n  }\n\n  .tab-area {\n    display: flex;\n  }\n\n  .tab-selector {\n    padding: 0.5em 1.5em;\n  }\n\n  .tab-selector.active {\n    font-weight: bold;\n  }\n\n  .tab-content-area {\n    position: relative;\n  }\n\n  .tab-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: white;\n    border: 1px solid #ccc;\n    padding: 2rem;\n    width: 100%;\n    display: none;\n  }\n\n  .tab-content.active {\n    display: block;\n  }\n\n  dl {\n    width: 100%;\n  }\n\n  dt {\n    font-weight: bold;\n    float: left;\n    margin-right: 0.3rem;\n  }\n</style>",'\n<div class="tab-wrapper">\n  ').concat(e,"\n  ").concat(t,"\n</div>\n").concat("<script>\n  window.addEventListener('DOMContentLoaded', function () {\n    var tabRow = document.getElementById('tab-area');\n    onLoad();\n    tabRow.addEventListener('click', function (e) {\n      var clickedElement = e.target;\n      var clickedElementTarget = clickedElement.getAttribute('data-target');\n      setActiveTab(clickedElementTarget);\n    });\n  });\n  function onLoad() {\n    var firstSelector = document.getElementsByClassName('tab-selector')[0];\n    var target = firstSelector.getAttribute('data-target');\n    setActiveTab(target);\n  }\n  function setActiveTab(id) {\n    var tabSelectors = document.getElementsByClassName('tab-selector');\n    for (var i = 0; i < tabSelectors.length; i++) {\n      var selector = tabSelectors[i];\n      var target = selector.getAttribute('data-target');\n      var targetElement = document.getElementById(target.replace(/^#/, ''));\n      if (target === id) {\n        selector.classList.add('active');\n        targetElement.classList.add('active');\n      } else {\n        selector.classList.remove('active');\n        targetElement.classList.remove('active');\n      }\n    }\n  }\n<\/script>")}(t)),y(!0)}},"Generate HTML")),r.a.createElement(en,null,d&&r.a.createElement(z,{tab:d,updateTab:function(n){var e=Object(u.a)(t),a=e.findIndex((function(e){return n.id===e.id}));null!==a&&(e.splice(a,1,n),i(e))},deleteTab:function(n){var e=Object(u.a)(t),a=e.findIndex((function(e){return e.id===n}));e.splice(a,1),i(e)},back:function(){return v(0)}})))),k&&r.a.createElement($,{dismiss:function(){return y(!1)}},E))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(an,null)),document.getElementById("root"))},97:function(n){n.exports=JSON.parse('[{"name":"Description","content":""},{"name":"Specs","content":""},{"name":"Shipping","content":""}]')},98:function(n,e,t){n.exports=t(199)}},[[98,1,2]]]);
//# sourceMappingURL=main.81464abf.chunk.js.map