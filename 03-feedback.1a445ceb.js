!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,o,u,f,a,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function O(e){return c=e,a=setTimeout(T,t),d?b(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function h(e){return a=void 0,m&&r?b(e):(r=o=void 0,f)}function w(){var e=p(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return O(l);if(s)return a=setTimeout(T,t),b(l)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O={form:document.querySelector(".feedback-form")},S="feedback-form-state",T={};T=JSON.parse(localStorage.getItem(S)),function(){if(!T)return T={};void 0!==T.email&&(O.form.email.value=T.email.trim());void 0!==T.message&&(O.form.message.value=T.message.trim())}(),O.form.addEventListener("input",e(t)((function(e){if(e.preventDefault(),!T)return T={};T[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(T))}),500)),O.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Submit Form",T),e.currentTarget.reset(),localStorage.removeItem(S),T={}}))}();
//# sourceMappingURL=03-feedback.1a445ceb.js.map
