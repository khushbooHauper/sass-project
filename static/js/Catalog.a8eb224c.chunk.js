"use strict";(self.webpackChunkreact_shop=self.webpackChunkreact_shop||[]).push([[478],{8092:function(e,a,t){t.r(a);var c=t(2982),s=t(9236),r=t(4165),n=t(5861),i=t(885),l=t(2791),o=t(9434),u=t(5095),d=t.n(u),h=t(3824),f=t(6160),g=t(6630),v=t(7461),x=t(184);a.default=function(){var e=(0,h.T)(),a=(0,o.v9)((function(e){return e.catalog})),t=a.status,u=a.items,m=(0,o.v9)((function(e){return e.favorite})),j=m.errorFavModal,_=m.successFavModal,p=(0,o.v9)((function(e){return e.filters})),y=p.categoryId,C=p.searchValue,N=p.sort,k=p.currentPage,w=N.sortProperty,Z=l.useState(""),P=(0,i.Z)(Z,2),T=P[0],b=P[1],F=function(){var a=(0,n.Z)((0,r.Z)().mark((function a(){var t,c,s,n;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=y>0?"category=".concat(y):"",c=C?"&search=".concat(C):"",s=w.replace("-",""),n=w.includes("-")?"desc":"asc",e((0,g.D)({category:t,search:c,sortBy:s,order:n,currentPage:k})),window.scrollTo(0,0);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),A=l.useCallback(d()((function(a){e((0,f.gI)(a))}),150),[]);l.useEffect((function(){F()}),[y,C,w,k]);var D=u.map((function(e){return(0,x.jsx)(v.xC,(0,s.Z)({},e),e.id)})),E=(0,c.Z)(Array(6)).map((function(e,a){return(0,x.jsx)(v.Od,{},a)}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v.h4,{}),(0,x.jsx)("section",{className:"catalog",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h3",{className:"catalog__title",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),(0,x.jsxs)("div",{className:"catalog__filter-items",children:[(0,x.jsx)("div",{className:"catalog__filter-item",children:(0,x.jsx)(v._v,{category:y,onClickChangeCategory:function(a){e((0,f.uA)(a))}})}),(0,x.jsxs)("div",{className:"catalog__filter-item",children:[(0,x.jsx)("div",{className:"catalog__search",children:(0,x.jsx)("input",{value:T,onChange:function(e){b(e.target.value),A(e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u0437\u0430\u043f\u0438\u0442"})}),(0,x.jsx)(v.PE,{value:N})]})]}),(0,x.jsx)("div",{className:"catalog__items",children:0===D.length?(0,x.jsx)("div",{className:"catalog__item item",children:"pending"===t?E:(0,x.jsx)(v.TX,{})}):(0,x.jsx)("div",{className:"catalog__item item",children:D})}),(0,x.jsx)(v.tl,{onClickPageChange:function(a){e((0,f.D4)(a)),window.scrollTo(0,0)}})]})}),_&&(0,x.jsx)(v.qz,{}),j&&(0,x.jsx)(v.sy,{}),(0,x.jsx)(v.$_,{})]})}}}]);
//# sourceMappingURL=Catalog.a8eb224c.chunk.js.map