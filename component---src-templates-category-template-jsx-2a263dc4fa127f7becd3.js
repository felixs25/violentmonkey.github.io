(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),i=a(10),s=a.n(i),c=a(11),l=a.n(c),o=a(12),m=a.n(o),u=a(13),p=a.n(u),d=a(0),f=a.n(d),h=a(171),E=(a(87),a(88),a(176)),_=function(e){function t(){return r()(this,t),l()(this,m()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.pathContext.category,a=e.data.allMarkdownRemark.edges,n=[];return a.forEach(function(e){n.push(f.a.createElement(E.a,{data:e,key:e.node.fields.slug}))}),f.a.createElement("div",{className:"content"},f.a.createElement("div",{className:"content__inner"},f.a.createElement("div",{className:"page"},f.a.createElement("h1",{className:"page__title"},t),f.a.createElement("div",{className:"page__body"},n))))}}]),t}(f.a.Component);a.d(t,"pageQuery",function(){return v});var y=function(e){function t(){return r()(this,t),l()(this,m()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.data.site.siteMetadata,a=t.title,n=t.menu,r=t.footer,i=e.pathContext.category,s={title:"".concat(i," - ").concat(a),menu:n,footer:r};return f.a.createElement(h.a,{siteMeta:s},f.a.createElement(_,this.props))}}]),t}(f.a.Component),v=(t.default=y,"3999958820")},170:function(e,t,a){e.exports=a.p+"static/vm-e0d9ed50fb982761b0f7cdea8b093ae9.png"},171:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(10),s=a.n(i),c=a(11),l=a.n(c),o=a(12),m=a.n(o),u=a(13),p=a.n(u),d=a(0),f=a.n(d),h=a(175),E=a.n(h),_=(a(59),a(43)),y=a(170),v=a.n(y),k=(a(172),function(e){function t(){return r()(this,t),l()(this,m()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props.data;return f.a.createElement("nav",{className:"menu clearfix"},f.a.createElement(_.Link,{to:"/",className:"menu__logo"},f.a.createElement("img",{src:v.a})),f.a.createElement("ul",{className:"menu__list"},e.map(function(e){return f.a.createElement("li",{className:"menu__list-item",key:e.path},f.a.createElement(_.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))})))}}]),t}(f.a.Component));a(173);function N(e){var t=e.data;return f.a.createElement("footer",{className:"footer clearfix"},f.a.createElement("div",{className:"footer-copyright"},"Violentmonkey © All rights reserved."),f.a.createElement("div",{className:"footer-list"},t.map(function(e){return f.a.createElement(_.Link,{className:"footer-list-item",key:e.path,to:e.path},e.label)})))}a(174);var g=function(e){function t(){return r()(this,t),l()(this,m()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.siteMeta,n=a.title,r=a.subtitle,i=a.menu,s=a.footer;return f.a.createElement("div",{className:"layout"},f.a.createElement(E.a,null,f.a.createElement("title",null,n),f.a.createElement("meta",{name:"description",content:r}),f.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:v.a})),i&&f.a.createElement(k,{data:i}),t,s&&f.a.createElement(N,{data:s}))}}]),t}(f.a.Component);t.a=g},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(10),s=a.n(i),c=a(11),l=a.n(c),o=a(12),m=a.n(o),u=a(13),p=a.n(u),d=a(0),f=a.n(d),h=a(43),E=a(224),_=(a(177),function(e){function t(){return r()(this,t),l()(this,m()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props.data.node,t=e.frontmatter,a=t.title,n=t.date,r=t.category,i=t.description,s=e.fields,c=s.slug,l=s.categorySlug;return f.a.createElement("div",{className:"post"},f.a.createElement("div",{className:"post__meta"},f.a.createElement("time",{className:"post__meta-time",dateTime:Object(E.a)(n,"MMMM d, yyyy")},Object(E.a)(n,"MMMM yyyy")),f.a.createElement("span",{className:"post__meta-divider"}),f.a.createElement("span",{className:"post__meta-category",key:l},f.a.createElement(h.Link,{to:l,className:"post__meta-category-link"},r))),f.a.createElement("h2",{className:"post__title"},f.a.createElement(h.Link,{className:"post__title-link",to:c},a)),f.a.createElement("p",{className:"post__description"},i),f.a.createElement(h.Link,{className:"post__readmore",to:c},"Read"))}}]),t}(f.a.Component));t.a=_},177:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-2a263dc4fa127f7becd3.js.map