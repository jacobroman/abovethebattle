webpackJsonp([0xeea0bc7c2a12],{136:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(2),i=o(c),f=n(10),s=o(f),l=n(3),p=o(l),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.node,t=e.category.toLowerCase();return i.default.createElement("div",{className:"category"},i.default.createElement(s.default,{to:""+t},e.category))},t}(c.Component);t.default=d,d.propTypes={node:p.default.object},e.exports=t.default},145:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.categoryPageQuery=void 0;var c=n(2),i=o(c),f=n(3),s=o(f),l=n(136),p=o(l);n(37);var d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allContentfulCategory.edges;return i.default.createElement("div",{className:"category-list"},t.map(function(e){return i.default.createElement(p.default,{key:e.node.id,node:e.node})}))},t}(c.Component);t.default=d,d.propTypes={data:s.default.object};t.categoryPageQuery="** extracted graphql fragment **"},37:function(e,t){}});
//# sourceMappingURL=component---src-pages-categories-js-eb7132515e33dd3319a3.js.map