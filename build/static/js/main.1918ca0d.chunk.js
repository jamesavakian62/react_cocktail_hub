(this["webpackJsonpfood-order"]=this["webpackJsonpfood-order"]||[]).push([[0],{22:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(14),r=c.n(a),i=(c(22),c(5)),o=c(2),l=c(17),j=c(0);function d(e){var t=e.image,c=e.name,s=e.id,n=e.info,a=e.glass;return Object(j.jsxs)("article",{className:"cocktail",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:t,alt:c})}),Object(j.jsxs)("div",{className:"cocktail-footer",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("h4",{children:a}),Object(j.jsx)("p",{children:n}),Object(j.jsx)(i.b,{to:"/cocktail/".concat(s),className:"btn btn-primary btn-details",children:"details"})]})]})}var b=function(){return Object(j.jsx)("div",{className:"loader"})},h=c(7),u=c.n(h),O=c(9),x=c(6),m=n.a.createContext(),p=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(x.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)("s"),o=Object(x.a)(i,2),l=o[0],d=o[1],b=Object(s.useState)([]),h=Object(x.a)(b,2),p=h[0],f=h[1],k=Object(s.useCallback)(Object(O.a)(u.a.mark((function e(){var t,c,s,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(l));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,console.log(c),(s=c.drinks)?(n=s.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),f(n)):f([]),r(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),r(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[l]);return Object(s.useEffect)((function(){k()}),[l,k]),Object(j.jsx)(m.Provider,{value:{loading:a,cocktails:p,searchTerm:l,setSearchTerm:d},children:t})},f=function(){return Object(s.useContext)(m)};function k(){var e=f(),t=e.cocktails;return e.loading?Object(j.jsx)(b,{}):t.length<1?Object(j.jsx)("h2",{className:"section-title",children:"oops! No matches found."}):Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h2",{className:"section-title",children:"cocktails"}),Object(j.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(j.jsx)(d,Object(l.a)({},e),e.id)}))})]})}function v(){var e=f().setSearchTerm,t=n.a.useRef("");return n.a.useEffect((function(){t.current.focus()}),[]),Object(j.jsx)("section",{className:"section search",children:Object(j.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"name"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",ref:t,onChange:function(){e(t.current.value)},placeholder:"Search cocktail.."})]})})})}function g(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(v,{}),Object(j.jsx)(k,{})]})}function N(){return Object(j.jsxs)("section",{className:"section about-section",children:[Object(j.jsx)("h1",{className:"section-title",children:"about us"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"})]})}function w(){var e=Object(o.f)().id,t=n.a.useState(!1),c=Object(x.a)(t,2),s=c[0],a=c[1],r=n.a.useState(null),l=Object(x.a)(r,2),d=l[0],h=l[1];if(n.a.useEffect((function(){function t(){return t=Object(O.a)(u.a.mark((function t(){var c,s,n,r,i,o,l,j,d,b,O,x,m,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(s=t.sent).drinks?(n=s.drinks[0],r=n.strDrink,i=n.strDrinkThumb,o=n.strAlcoholic,l=n.strCategory,j=n.strGlass,d=n.strInstructions,b=n.strIngredient1,O=n.strIngredient2,x=n.strIngredient3,m=n.strIngredient4,p=n.strIngredient5,h({name:r,image:i,info:o,category:l,glass:j,instructions:d,ingredients:[b,O,x,m,p]})):h(null),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:a(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])}))),t.apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e]),s)return Object(j.jsx)(b,{});if(d){var m=d.name,p=d.image,f=d.category,k=d.info,v=d.glass,g=d.instructions,N=d.ingredients;return Object(j.jsxs)("section",{className:"section cocktail-section",children:[Object(j.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"back home"}),Object(j.jsx)("h2",{className:"section-title",children:m}),Object(j.jsxs)("div",{className:"drink",children:[Object(j.jsx)("img",{src:p,alt:m}),Object(j.jsxs)("div",{className:"drink-info",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"name :"})," ",m]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"category :"})," ",f]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"info :"})," ",k]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"glass :"})," ",v]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"instructons :"})," ",g]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"ingredients :"}),N.map((function(e,t){return e?Object(j.jsxs)("span",{children:[" ",e]},t):null}))]})]})]})]})}return Object(j.jsx)("h2",{className:"section-title",children:"no cocktail to display"})}function y(){return Object(j.jsx)("section",{className:"error-page section",children:Object(j.jsxs)("div",{className:"error-container",children:[Object(j.jsx)("h1",{children:"oops! it's a dead end"}),Object(j.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"back home"})]})})}function S(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-center",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("h3",{children:"The Cocktail Hub"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"about"})})]})]})})}var q=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/about",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/cocktail/:id",children:Object(j.jsx)(w,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(y,{})})]})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{children:Object(j.jsx)(q,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1918ca0d.chunk.js.map