webpackJsonp([0xe20b3ff6b383],{10:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){j.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var i=o(11),r=a(i),s=o(14),l=a(s),u=o(13),d=a(u),c=o(29),f=a(c),p=o(28),y=a(p),h=o(2),b=a(h),g=o(3),m=a(g),v=function(e){var t=(0,y.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),o=t.sizes?t.sizes.src:t.resolutions.src;return!!w[o]||(w[o]=!0,!1)},S=void 0,j=[],L=function(e,t){n().observe(e),j.push([e,t])},_=null,O=function(){if(null!==_)return _;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return _=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.opacity,o=void 0===t?"1":t,a=e.src,n=e.srcSet,i=e.sizes,r=void 0===i?"":i,s=e.title,l=void 0===s?"":s,u=e.alt,d=void 0===u?"":u,c=e.width,f=void 0===c?"":c,p=e.height,y=void 0===p?"":p,h=e.transitionDelay,b=void 0===h?"0.5s":h;return'<img width="'+f+'" height="'+y+'" src="'+a+'" srcset="'+n+'" alt="'+d+'" title="'+l+'" sizes="'+r+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+b+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},z=function(e){var t=e.style,o=e.onLoad,a=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,y.default)({},a,{onLoad:o,style:(0,y.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};z.propTypes={style:m.default.object,onLoad:m.default.func};var T=function(e){function t(o){(0,r.default)(this,t);var a=(0,l.default)(this,e.call(this,o)),n=!0,i=!0,s=!1,u=E(o);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,s=!0),"undefined"==typeof window&&(n=!1,i=!1),a.state={isVisible:n,imgLoaded:i,IOSupported:s},a.handleRef=a.handleRef.bind(a),a}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),o=t.title,a=t.alt,n=t.className,i=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,u=void 0===l?{}:l,d=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var g=(0,y.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),m=(0,y.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&O()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),b.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},b.default.createElement(p,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,y.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},b.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&b.default.createElement(z,{alt:a,title:o,src:w.base64,style:g}),w.tracedSVG&&b.default.createElement(z,{alt:a,title:o,src:w.tracedSVG,style:g}),h&&b.default.createElement(p,{title:o,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(z,{alt:a,title:o,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:m,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,y.default)({alt:a,title:o},w))}})))}if(c){var E=c,S=(0,y.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},s);return"inherit"===s.display&&delete S.display,E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),b.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},b.default.createElement(p,{className:(n?n:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},E.base64&&b.default.createElement(z,{alt:a,title:o,src:E.base64,style:g}),E.tracedSVG&&b.default.createElement(z,{alt:a,title:o,src:E.tracedSVG,style:g}),h&&b.default.createElement(p,{title:o,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&b.default.createElement(z,{alt:a,title:o,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:m,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,y.default)({alt:a,title:o,width:E.width,height:E.height},E))}})))}return null},t}(b.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=T},49:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=o(2),l=a(s),u=o(7),d=a(u),c=o(10),f=a(c),p=o(3),y=a(p),h=function(e){function t(){return n(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.post,o=e.defaultImage,a=t.featuredImage?l.default.createElement(f.default,{sizes:t.featuredImage.sizes}):l.default.createElement(f.default,{sizes:o}),n=t.category&&t.category.map(function(e,t){var o=0===t?"":" | ";return l.default.createElement(d.default,{key:e.id,to:"categories/"+e.category.toLowerCase()},""+o+e.category)});return l.default.createElement("div",{className:"post other"},a,l.default.createElement("div",{className:"wrap"},n&&l.default.createElement("div",{className:"categories"},n),l.default.createElement("h3",null,t.title),l.default.createElement(d.default,{to:t.slug,className:"read-more"},"READ ARTICLE"),l.default.createElement("p",null,t.createdAt)))},t}(s.Component);t.default=h,h.propTypes={post:y.default.object,defaultImage:y.default.object},e.exports=t.default},150:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.categoryQuery=void 0;var s=o(2),l=a(s),u=o(3),d=a(u),c=o(49),f=a(c),p=function(e){function t(){return n(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data,t=e.contentfulCategory.blogpost;return l.default.createElement("div",{className:"blog-list"},t.map(function(t){return l.default.createElement(f.default,{key:t.id,post:t,defaultImage:e.imageDefault.sizes})}))},t}(s.Component);t.default=p,p.PropTypes={data:d.default.object};t.categoryQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-template-category-js-6f89cfb54b9cf52e812a.js.map