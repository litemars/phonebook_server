(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(15),a=t.n(c),i=(t(20),t(3)),u=t(0),d=function(e){var n=e.newName,t=e.newNumber,r=e.hadleNewPerson,o=e.hadleNewNumber,c=e.addPerson;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsxs)("div",{children:[" name: ",Object(u.jsx)("input",{value:n,onChange:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:t,onChange:o})]}),Object(u.jsx)("button",{type:"submit",children:"add"})]})})},s=function(e){var n=e.search_term,t=e.hadleSearch;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[" filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.persons,t=e.search_term,r=e.deledeFunction;return Object(u.jsx)(u.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().match(t.toLocaleLowerCase())})).map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number," ",Object(u.jsx)("button",{id:e.id,value:e.name,onClick:r,children:"delede"})]},e.id)}))})},h=function(e){var n=e.message,t=n.match("removed")?{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",padding:"10px",marginBottom:"10px"}:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",padding:"10px",marginBottom:"10px"};return null===n?null:Object(u.jsx)("div",{style:t,className:"error",children:n})},j=t(4),b=t.n(j),f="https://nodejs-aalto.herokuapp.com/api/persons",m=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),a=Object(i.a)(c,2),j=a[0],m=a[1],g=Object(r.useState)(""),O=Object(i.a)(g,2),p=O[0],x=O[1],v=Object(r.useState)(""),w=Object(i.a)(v,2),S=w[0],N=w[1],k=Object(r.useState)(""),F=Object(i.a)(k,2),y=F[0],C=F[1];Object(r.useEffect)((function(){b.a.get(f).then((function(e){return e.data})).then((function(e){console.log(e),o(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),y?Object(u.jsx)(h,{message:y}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(s,{search_term:S,hadleSearch:function(e){N(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(d,{newName:j,addPerson:function(e){e.preventDefault();var n,r,c,a=j,i={name:j,number:p,id:t.length+1};if(0!==t.filter((function(e){return e.name===i.name})).length){if(window.confirm(i.name+" is already added to phonebook, replace the old number with a new one?")){var u=t.filter((function(e){return e.name===i.name})),d=t.filter((function(e){return e.name!==i.name}));(r=u[0].id,c=i,b.a.put(f+"/"+r,c).then((function(e){return e.data}))).then((function(){i.id=u[0].id,o(d.concat(i)),m(""),x("")})).catch((function(){return console.log("error")}))}}else console.log(i),(n=i,b.a.post(f,n).then((function(e){return e.data}))).then((function(){o(t.concat(i)),m(""),x(""),C("Added "+a),setTimeout((function(){C(null)}),5e3)})).catch((function(){return console.log("error")}))},newNumber:p,hadleNewPerson:function(e){m(e.target.value)},hadleNewNumber:function(e){x(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{persons:t,search_term:S,deledeFunction:function(e){var n=e.target.id,r=e.target.value;window.confirm("Delete "+r+" ?")&&function(e){return b.a.delete(f+"/"+e).then((function(e){return e.data}))}(n).then((function(){var e=t.filter((function(e){return e.id.toString()!==n}));o(e)})).catch((function(e){C("Information of "+r+" has already been removed from server"),setTimeout((function(){C(null)}),5e3)}))}})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.ff4a278d.chunk.js.map