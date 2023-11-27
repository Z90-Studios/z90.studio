import{r as x}from"./index.ed373d49.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x,m=Symbol.for("react.element"),_=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,v=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,a){var r,n={},o=null,l=null;a!==void 0&&(o=""+a),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)d.call(e,r)&&!u.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:m,type:t,key:o,ref:l,props:n,_owner:v.current}}s.Fragment=_;s.jsx=c;s.jsxs=c;p.exports=s;var i=p.exports;function g(){return i.jsxs("div",{className:"relative w-[500px] h-[500px]",children:[i.jsx("img",{src:"/01011010 ring.png",className:"invert dark:invert-0 animate-custom-spin fixed center-xy",alt:"01011010 ring"}),i.jsx("img",{src:"/circle.png",className:"invert dark:invert-0 animate-[spin_90s_linear_infinite] fixed center-xy direction-reverse",alt:"Circle"}),i.jsx("img",{src:"/z90 text.png",className:"invert dark:invert-0 fixed center-xy",alt:"Z90"})]})}export{g as default};
