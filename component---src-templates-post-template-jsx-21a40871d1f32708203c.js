(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),i=n(10),o=n.n(i),s=n(11),l=n.n(s),u=n(12),c=n.n(u),m=n(13),f=n.n(m),p=n(0),d=n.n(p),h=n(171),v=(n(59),n(43)),y=n(224),g=n(80),b=n.n(g),_=(n(193),n(33)),E=n.n(_),k=n(195),w=n.n(k),N=function(e){function t(e){var n;return r()(this,t),(n=l()(this,c()(t).call(this,e))).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(E()(E()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(E()(E()(n))),n}return f()(t,e),o()(t,[{key:"onSnackbarDismiss",value:function(){var e=this.state.toasts;this.setState({toasts:e.slice(1)})}},{key:"notifyAboutComment",value:function(){var e=this.state.toasts;this.setState({toasts:b()(e).concat([{text:"New comment available!!"}])})}},{key:"render",value:function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var a=t.frontmatter,r=n.url+t.fields.slug;return d.a.createElement(w.a,{shortname:n.disqusShortname,identifier:a.title,title:a.title,url:r,category_id:a.category_id,onNewComment:this.notifyAboutComment})}}]),t}(p.Component),C=(n(197),function(e){function t(){return r()(this,t),l()(this,c()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.data,t=e.site.siteMetadata,n=e.markdownRemark,a=n.fields.tagSlugs,r=d.a.createElement("div",null,d.a.createElement(v.Link,{className:"post-single__home-button",to:"/"},"All Articles")),i=d.a.createElement("div",{className:"post-single__tags"},d.a.createElement("ul",{className:"post-single__tags-list"},a&&a.map(function(e,t){return d.a.createElement("li",{className:"post-single__tags-list-item",key:e},d.a.createElement(v.Link,{to:e,className:"post-single__tags-list-item-link"},n.frontmatter.tags[t]))}))),o=d.a.createElement("div",null,d.a.createElement(N,{postNode:n,siteMetadata:t}));return d.a.createElement("div",null,r,d.a.createElement("div",{className:"post-single"},d.a.createElement("div",{className:"post-single__inner"},d.a.createElement("h1",{className:"post-single__title"},n.frontmatter.title),d.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:n.html}}),d.a.createElement("div",{className:"post-single__date"},d.a.createElement("em",null,"Published at"," ",Object(y.a)(n.frontmatter.date,"d MMM yyyy")))),d.a.createElement("div",{className:"post-single__footer"},i,o)))}}]),t}(d.a.Component));n.d(t,"pageQuery",function(){return j});var O=function(e){function t(){return r()(this,t),l()(this,c()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.data,t=e.site.siteMetadata,n=t.title,a=t.subtitle,r=t.menu,i=e.markdownRemark.frontmatter,o=i.title,s=i.description,l={menu:r,title:"".concat(o," - ").concat(n),description:s||a};return d.a.createElement(h.a,{siteMeta:l},d.a.createElement(C,this.props))}}]),t}(d.a.Component),j=(t.default=O,"246057087")},170:function(e,t,n){e.exports=n.p+"static/vm-e0d9ed50fb982761b0f7cdea8b093ae9.png"},171:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(10),o=n.n(i),s=n(11),l=n.n(s),u=n(12),c=n.n(u),m=n(13),f=n.n(m),p=n(0),d=n.n(p),h=n(175),v=n.n(h),y=(n(59),n(43)),g=n(170),b=n.n(g),_=(n(172),function(e){function t(){return r()(this,t),l()(this,c()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.data;return d.a.createElement("nav",{className:"menu clearfix"},d.a.createElement(y.Link,{to:"/",className:"menu__logo"},d.a.createElement("img",{src:b.a})),d.a.createElement("ul",{className:"menu__list"},e.map(function(e){return d.a.createElement("li",{className:"menu__list-item",key:e.path},d.a.createElement(y.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))})))}}]),t}(d.a.Component));n(173);function E(e){var t=e.data;return d.a.createElement("footer",{className:"footer clearfix"},d.a.createElement("div",{className:"footer-copyright"},"Violentmonkey © All rights reserved."),d.a.createElement("div",{className:"footer-list"},t.map(function(e){return d.a.createElement(y.Link,{className:"footer-list-item",key:e.path,to:e.path},e.label)})))}n(174);var k=function(e){function t(){return r()(this,t),l()(this,c()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.siteMeta,a=n.title,r=n.subtitle,i=n.menu,o=n.footer;return d.a.createElement("div",{className:"layout"},d.a.createElement(v.a,null,d.a.createElement("title",null,a),d.a.createElement("meta",{name:"description",content:r})),i&&d.a.createElement(_,{data:i}),t,o&&d.a.createElement(E,{data:o}))}}]),t}(d.a.Component);t.a=k},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},193:function(e,t,n){var a=n(6);a(a.P,"Function",{bind:n(194)})},194:function(e,t,n){"use strict";var a=n(24),r=n(15),i=n(89),o=[].slice,s={};e.exports=Function.bind||function(e){var t=a(this),n=o.call(arguments,1),l=function(){var a=n.concat(o.call(arguments));return this instanceof l?function(e,t,n){if(!(t in s)){for(var a=[],r=0;r<t;r++)a[r]="a["+r+"]";s[t]=Function("F,a","return new F("+a.join(",")+")")}return s[t](e,n)}(t,a.length,a):i(t,a,e)};return r(t.prototype)&&(l.prototype=t.prototype),l}},195:function(e,t,n){"use strict";e.exports=n(196)},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function c(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();m.displayName="DisqusThread",m.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},197:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-21a40871d1f32708203c.js.map