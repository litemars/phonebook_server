(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(15),a=t.n(o),i=(t(20),t(3)),u=t(0),d=function(e){var n=e.newName,t=e.newNumber,r=e.hadleNewPerson,c=e.hadleNewNumber,o=e.addPerson;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:o,children:[Object(u.jsxs)("div",{children:[" name: ",Object(u.jsx)("input",{value:n,onChange:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:t,onChange:c})]}),Object(u.jsx)("button",{type:"submit",children:"add"})]})})},s=function(e){var n=e.search_term,t=e.hadleSearch;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[" filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.persons,t=e.search_term,r=e.deledeFunction;return Object(u.jsx)(u.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().match(t.toLocaleLowerCase())})).map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number," ",Object(u.jsx)("button",{id:e.id,value:e.name,onClick:r,children:"delede"})]},e.id)}))})},h=function(e){var n=e.message,t=n.match("removed")?{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",padding:"10px",marginBottom:"10px"}:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",padding:"10px",marginBottom:"10px"};return null===n?null:Object(u.jsx)("div",{style:t,className:"error",children:n})},b=t(4),j=t.n(b),f="http://localhost:3001/api/persons",m=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),b=a[0],m=a[1],g=Object(r.useState)(""),O=Object(i.a)(g,2),x=O[0],p=O[1],v=Object(r.useState)(""),w=Object(i.a)(v,2),S=w[0],N=w[1],F=Object(r.useState)(""),k=Object(i.a)(F,2),y=k[0],C=k[1];Object(r.useEffect)((function(){j.a.get(f).then((function(e){return e.data})).then((function(e){console.log(e),c(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),y?Object(u.jsx)(h,{message:y}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(s,{search_term:S,hadleSearch:function(e){N(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(d,{newName:b,addPerson:function(e){e.preventDefault();var n,r,o,a=b,i={name:b,number:x,id:t.length+1};if(0!==t.filter((function(e){return e.name===i.name})).length){if(window.confirm(i.name+" is already added to phonebook, replace the old number with a new one?")){var u=t.filter((function(e){return e.name===i.name})),d=t.filter((function(e){return e.name!==i.name}));(r=u[0].id,o=i,j.a.put(f+"/"+r,o).then((function(e){return e.data}))).then((function(){i.id=u[0].id,c(d.concat(i)),m(""),p("")})).catch((function(){return console.log("error")}))}}else console.log(i),(n=i,j.a.post(f,n).then((function(e){return e.data}))).then((function(){c(t.concat(i)),m(""),p(""),C("Added "+a),setTimeout((function(){C(null)}),5e3)})).catch((function(){return console.log("error")}))},newNumber:x,hadleNewPerson:function(e){m(e.target.value)},hadleNewNumber:function(e){p(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{persons:t,search_term:S,deledeFunction:function(e){var n=e.target.id,r=e.target.value;window.confirm("Delete "+r+" ?")&&function(e){return j.a.delete(f+"/"+e).then((function(e){return e.data}))}(n).then((function(){var e=t.filter((function(e){return e.id.toString()!==n}));c(e)})).catch((function(e){C("Information of "+r+" has already been removed from server"),setTimeout((function(){C(null)}),5e3)}))}})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.d05779eb.chunk.js.map