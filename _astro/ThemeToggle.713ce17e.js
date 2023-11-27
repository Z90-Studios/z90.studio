import{r as m}from"./index.ed373d49.js";var a={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=m,f=Symbol.for("react.element"),d=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,o){var r,n={},l=null,i=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)p.call(e,r)&&!h.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:t,key:l,ref:i,props:n,_owner:_.current}}s.Fragment=d;s.jsx=c;s.jsxs=c;a.exports=s;var x=a.exports;function y(){const[t,e]=m.useState(localStorage.getItem("theme")??"light"),o=()=>{e(t==="light"?"dark":"light")};return m.useEffect(()=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t)},[t]),x.jsx("button",{onClick:o,children:t==="light"?"🌙":"🌞"})}export{y as default};
