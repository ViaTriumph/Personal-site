(self.webpackChunkgatsby_minimal_simple_blog=self.webpackChunkgatsby_minimal_simple_blog||[]).push([[580],{3265:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/26a15cfd94caded4c1e7fc28188e1485/edb2b/profile-pic.jpg","srcSet":"/static/26a15cfd94caded4c1e7fc28188e1485/edb2b/profile-pic.jpg 80w,\\n/static/26a15cfd94caded4c1e7fc28188e1485/39164/profile-pic.jpg 160w","sizes":"80px"},"sources":[{"srcSet":"/static/26a15cfd94caded4c1e7fc28188e1485/d9027/profile-pic.avif 80w,\\n/static/26a15cfd94caded4c1e7fc28188e1485/8a7fe/profile-pic.avif 160w","type":"image/avif","sizes":"80px"},{"srcSet":"/static/26a15cfd94caded4c1e7fc28188e1485/a5f1e/profile-pic.webp 80w,\\n/static/26a15cfd94caded4c1e7fc28188e1485/36fad/profile-pic.webp 160w","type":"image/webp","sizes":"80px"}]},"width":80,"height":80}')},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),i=r(379),o=r(8206);e.exports=function(e){return n(e)||a(e)||i(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7246:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(5444),i=r(6125),o=function(){var e,t,o=(0,a.useStaticQuery)("3257411868"),l=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../../images/profile-pic.jpeg",width:80,height:80,quality:95,alt:"Profile picture",__imageData:r(3265)}),(null==l?void 0:l.name)&&n.createElement("p",null,"Personal blog by  "," ",n.createElement("a",{href:"https://twitter.com/"+((null==c?void 0:c.twitter)||"")},l.name),n.createElement("br",null),(null==l?void 0:l.summary)||null))}},5945:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5444),i=r(8415);function o(e){var t=e.slug,r=e.title,o=e.date,l=e.timeToRead,c=e.excerpt;return n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:t,itemProp:"url"},n.createElement("span",{itemProp:"headline"},r))),n.createElement("small",null,o," • ",(0,i.formatReadingTime)(l))),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:c},itemProp:"description"})))}o.defaultProps={title:null,excerpt:null};var l=o},7523:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5414),i=r(5444),o=function(e){var t,r,o,l=e.description,c=e.lang,s=e.meta,u=e.title,d=(0,i.useStaticQuery)("2841359383").site,p=l||d.siteMetadata.description,f=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(a.q,{htmlAttributes:{lang:c},title:u,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:p},{property:"og:title",content:u},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=d.siteMetadata)||void 0===r||null===(o=r.social)||void 0===o?void 0:o.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:p}].concat(s)})};o.defaultProps={lang:"en",meta:[],description:""};var l=o},3226:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(7246),i=r(3419),o=r(7523),l=r(5945),c=r(4183),s=r(5512);t.default=function(e){var t=e.pageContext,r=e.data,u=e.location,d=t.tag,p=r.allMarkdownRemark,f=p.edges,m=p.totalCount,g=r.site.siteMetadata.title,v=(0,c.Jr)(),y=v.lang,x=v.homeLink,h=(0,s.w)("tfTagHeader",m,d);return n.createElement(i.Z,{location:u,title:g,breadcrumbs:[{text:(0,s.w)("tTags"),url:x+"tags"},{text:d}]},n.createElement(o.Z,{title:h,description:h}),n.createElement("h1",null,h),n.createElement("main",null,n.createElement("ol",{style:{listStyle:"none",margin:0}},f.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug;return n.createElement(l.Z,{key:t.fields.slug,lang:y,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.fields.readingTime.minutes,title:r,excerpt:t.frontmatter.description||t.excerpt})})))),n.createElement("div",{style:{marginTop:50}}),n.createElement("aside",null,n.createElement(a.Z,null)))}},8415:function(e,t,r){var n=r(319);e.exports={formatReadingTime:function(e){var t=Math.round(e),r=Math.round(e/5);return r>5?new Array(Math.round(r/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(r||1).fill("☕️").join("")+" "+t+" min read"},formatPostDate:function(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))},haveSameItem:function(e,t){if(void 0===e&&(e=[]),void 0===t&&(t=[]),null==e||null==t)return!1;var r=new Set([].concat(n(e),n(t)));return n(r).length<e.length+t.length},getPreviousNextNode:function(e,t){var r,n;return e.length>0&&t>-1&&(r=t<=0?null:e[t-1].node,n=t===e.length-1?null:e[t+1].node),{previous:r,next:n}},kebabCase:function(e){return function(e){return/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(e)}(e)?e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"):e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}},5512:function(e,t,r){"use strict";r.d(t,{w:function(){return a}});var n=r(4183),a=(r(8415),function(e){var t=(0,n.Jr)(),r=t.lang,a=t.messages,i=a[e];if(null==i)return console.error("MessageId ["+e+"] is not exist!!\n    You should add it to config/locales/"+r+".js"),e;if("function"==typeof i){for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];return i.apply(void 0,l)}return i})}}]);
//# sourceMappingURL=component---src-templates-tag-posts-js-284653ee8f076d93c82a.js.map