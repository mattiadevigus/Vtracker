(this.webpackJsonpvclient=this.webpackJsonpvclient||[]).push([[0],{363:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(3),l=a.n(s),i=a(100),n=a.n(i),r=a(13),o=a(14),d=a(16),j=a(15),b=a(18),h=a(7);var m=function(){return Object(c.jsxs)("div",{className:"w3-animate-zoom home-container",children:[Object(c.jsxs)("div",{className:"standard-container",children:[Object(c.jsx)("img",{src:"images/v_icon.png",alt:""}),Object(c.jsx)("h3",{children:"Vtracker"}),Object(c.jsx)("p",{className:"created-by",children:"Creato da Mattia Devigus"})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-sm-12 col-lg-12",children:Object(c.jsx)("div",{align:"center",className:"button-container",children:Object(c.jsx)(b.b,{to:"/App",children:Object(c.jsxs)("button",{className:"app-button",children:[Object(c.jsx)("i",{className:"fas fa-play display-4"}),Object(c.jsx)("h4",{children:"Avvia il tracker"})]})})})})})]})};var O=function(e){return Object(c.jsxs)("div",{className:"col-4 display-4",children:[Object(c.jsx)("i",{className:e.icon})," ",Object(c.jsx)("h5",{children:e.title})]})};var x=function(e){return Object(c.jsx)("section",{id:"presentation",children:Object(c.jsxs)("div",{className:"presentation-container w3-animate-zoom",children:[Object(c.jsx)("img",{style:{width:"5%"},src:"./images/v_icon.png",alt:""}),Object(c.jsx)("h1",{children:"BENVENUTO NEL VTRACKER"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"only-desktop",children:[Object(c.jsx)("p",{children:"Il Vtracker \xe8 un software realizzato per consentire il tracciamento dei tempi per un server di Assetto Corsa Competizione."})," ",Object(c.jsx)("p",{children:" Grazie al Vtracker, puoi tenere sott'occhio importanti informazioni utili per organizzare eventi. Alcune di queste, rendono possibile il monitoraggio di un Time Attack o Prequalifica. "})," ",Object(c.jsx)("p",{children:" Pu\xf2 essere utilizzato anche per confrontarti con i tuoi amici in ambito privato"}),Object(c.jsx)("p",{children:"Per proseguire, inizia la configurazione del tracker"})]}),Object(c.jsx)("hr",{className:"only-desktop"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(O,{icon:"fas fa-hourglass-half",title:"Visualizza i tempi di un server"}),Object(c.jsx)(O,{icon:"fas fa-users",title:"Informazioni aggiuntive piloti"}),Object(c.jsx)(O,{icon:"fas fa-chart-bar",title:"Grafici iterattivi"})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"button-container",children:Object(c.jsxs)("button",{onClick:function(){document.getElementById("presentation").style.display="none",document.getElementById("presentationTwo").style.display="flex"},children:[Object(c.jsx)("i",{className:"fas fa-arrow-right"})," "]})})]})})},u=a(44),p=a(26),v=a.n(p),N=window.location.host,g=(N=N.split(":"))[0],f={display:"none"};function w(){document.getElementById("presentation").style.display="flex",document.getElementById("presentationTwo").style.display="none"}var y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).next=function(){""!==c.state.path&&(document.getElementById("presentationTree").style.display="flex",document.getElementById("presentationTwo").style.display="none",localStorage.removeItem("email"))},c.changeHandler=function(e){c.setState(Object(u.a)({},e.target.name,e.target.value)),console.log(c.state)},c.submitHandle=function(e){e.preventDefault(),console.log(c.state),v.a.post("http://".concat(g,":9000"),c.state).catch((function(e){console.error(e)}))},c.state={path:""},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.path;return Object(c.jsx)("section",{id:"presentationTwo",style:f,children:Object(c.jsxs)("div",{className:"presentation-container w3-animate-right",children:[Object(c.jsx)("h1",{children:"INIZIAMO!"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{method:"post",onSubmit:this.submitHandle,children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{children:"Inserisci il percorso file della cartella Result del server"}),Object(c.jsx)("input",{type:"text",name:"path",id:"path",value:e,onChange:this.changeHandler,placeholder:"C:\\SteamLibrary\\steamapps\\common\\Assetto Corsa Competizione Dedicated Server\\results",required:!0})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-sm-12 col-m-12 col-lg-6",children:Object(c.jsx)("button",{onClick:w,children:Object(c.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(c.jsx)("div",{className:"col col-sm-12 col-m-12 col-lg-6",children:Object(c.jsx)("button",{type:"submit",onClick:this.next,children:Object(c.jsx)("i",{className:"fas fa-arrow-right"})})})]})]})]})})}}]),a}(s.Component),C={display:"none"},k=window.location.hostname,T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={email:"",password:"",error:""},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("section",{id:"presentationTree",style:C,children:Object(c.jsxs)("div",{className:"presentation-container w3-animate-right",children:[Object(c.jsx)("img",{style:{width:"20%"},src:"./images/v_icon.png",alt:""}),Object(c.jsx)("h1",{children:"FINITO"}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"AVVIA IL VTRACKER"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"button-container",children:Object(c.jsx)(b.b,{to:"/App",children:Object(c.jsx)("button",{children:Object(c.jsx)("i",{className:"fas fa-arrow-right"})})})}),Object(c.jsxs)("div",{className:"presentation-info",children:[Object(c.jsx)("p",{children:"Potrai cambiare le impostazioni successivamente nell'apposita sezione"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("p",{children:["Link da inviare ai piloti: ",Object(c.jsxs)("b",{children:["http://",k,"/App "]})]}),Object(c.jsx)("span",{style:{color:"red",fontSize:"0.7rem"},children:"Se il link contiene localhost, accedi al browser utilizzando l'ip del server"}),Object(c.jsx)("hr",{})]})]})})}}]),a}(s.Component),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("Your email is: "+localStorage.getItem("email"))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsx)(y,{}),Object(c.jsx)(T,{})]})}}]),a}(s.Component),I=window.location.host,z=(I=I.split(":"))[0],H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).delete=function(){!0===window.confirm("Sei sicuro? Verranno cancellati tutti i tempi dal database. I file contenuti nella cartella results, dovranno essere eliminati manualmente")&&(v.a.post("http://".concat(z,":9000/Delete"),{request:"delete"}),window.location.replace("/Intro"))},c.state={timetable:[],server:"_server",track:"_name"},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.post("http://".concat(z,":9000/App"),{request:"tutto ok"}).then((function(t){e.setState({timetable:t.data.rows,server:t.data.server,track:t.data.track})}))}},{key:"calculateGap",value:function(e){var t=null;return this.state.timetable.map((function(e,a){var c=Number(e.settore1)+Number(e.settore2)+Number(e.settore3);return null===t?(t=c,c="-"):c="+"+Number(c-t).toFixed(3),c}))[e]}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"w3-animate-zoom",children:[Object(c.jsxs)("div",{id:"headingData",children:[Object(c.jsx)("img",{id:"logo",src:"images/v_logo.png",alt:"logo",srcSet:"images/v_logo.png"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row ",children:[Object(c.jsxs)("div",{className:"col col-md-4 col-lg-4",children:[Object(c.jsxs)("h3",{id:"serverName",className:"data",children:[Object(c.jsx)("span",{children:"Server: "}),this.state.server]}),Object(c.jsxs)("h4",{id:"track",className:"data",children:[Object(c.jsx)("span",{children:"Pista: "}),this.state.track]})]}),Object(c.jsx)("div",{className:"col-sm-5 col-md-2 col-lg-5 align-self-center"}),Object(c.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("button",{className:"button",children:Object(c.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-home button-fix"})})})}),Object(c.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(c.jsx)("button",{onClick:this.delete,className:"button ",children:Object(c.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-trash"})})}),Object(c.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(c.jsx)(b.b,{to:"/Intro",children:Object(c.jsx)("button",{className:"button",children:Object(c.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-sliders-h align-self-center"})})})})]}),Object(c.jsx)("hr",{})]}),Object(c.jsx)("div",{id:"data-Container",children:Object(c.jsxs)("table",{id:"data-table",children:[Object(c.jsx)("thead",{id:"dataHeader",children:Object(c.jsxs)("tr",{className:"rowHeader",children:[Object(c.jsx)("th",{id:"posHeader",className:"colHeader dataTableCell sticky-col first-col",children:"#"}),Object(c.jsx)("th",{id:"lastNameHeader",className:"colHeader dataTableCell",children:"Pilota"}),Object(c.jsx)("th",{id:"teamHeader",className:"colHeader dataTableCell",children:"Modello macchina"}),Object(c.jsx)("th",{id:"sec1Header",className:"colHeader dataTableCell",children:"S1"}),Object(c.jsx)("th",{id:"sec2Header",className:"colHeader dataTableCell",children:"S2"}),Object(c.jsx)("th",{id:"sec3Header",className:"colHeader dataTableCell",children:"S3"}),Object(c.jsx)("th",{id:"timeHeader",className:"colHeader dataTableCell",children:"Tempo"}),Object(c.jsx)("th",{id:"gapHeader",className:"colHeader dataTableCell",children:"Gap"})]})}),this.state.timetable.map((function(t,a){var s="/Chart/".concat(t.id);return Object(c.jsxs)("tbody",{id:"dataBody",children:[Object(c.jsxs)("tr",{className:"rowN",children:[Object(c.jsx)("td",{className:"colN dataTableCell pos sticky-col first-col",children:a+1}),Object(c.jsx)("td",{className:"colN dataTableCell lastName",children:Object(c.jsxs)(b.b,{to:s,children:[" ",t.nome,"  ",t.cognome]})}),Object(c.jsx)("td",{className:"colN dataTableCell team",children:Object(c.jsx)("img",{src:t.immagine,alt:"car"})}),Object(c.jsx)("td",{className:"colN dataTableCell sec1",children:t.settore1}),Object(c.jsx)("td",{className:"colN dataTableCell sec2",children:t.settore2}),Object(c.jsx)("td",{className:"colN dataTableCell sec3",children:t.settore3}),Object(c.jsx)("td",{className:"colN dataTableCell time",children:t.tempo}),Object(c.jsx)("td",{className:"colN dataTableCell gap",children:e.calculateGap(a)})]}),Object(c.jsxs)("tr",{className:"rowN",children:[Object(c.jsx)("td",{className:"colN dataTableCell pos sticky-col first-col",children:a+1}),Object(c.jsx)("td",{className:"colN dataTableCell lastName",children:Object(c.jsxs)(b.b,{to:s,children:[" ",t.nome,"  ",t.cognome]})}),Object(c.jsx)("td",{className:"colN dataTableCell team",children:Object(c.jsx)("img",{src:t.immagine,alt:"car"})}),Object(c.jsx)("td",{className:"colN dataTableCell sec1",children:t.settore1}),Object(c.jsx)("td",{className:"colN dataTableCell sec2",children:t.settore2}),Object(c.jsx)("td",{className:"colN dataTableCell sec3",children:t.settore3}),Object(c.jsx)("td",{className:"colN dataTableCell time",children:t.tempo}),Object(c.jsx)("td",{className:"colN dataTableCell gap",children:e.calculateGap(a)})]})]})}))]})})]})}}]),a}(s.Component),A=window.location.host,D=(A=A.split(":"))[0],E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).componentDidMount=function(){var e=localStorage.getItem("email");console.log("check is "+e),null!==e&&window.location.replace("/Intro")},c.changeHandler=function(e){c.setState(Object(u.a)({},e.target.name,e.target.value))},c.submitHandle=function(e){e.preventDefault(),console.log(c.state),v.a.post("http://".concat(D,":9000/Login"),c.state).then((function(e){console.log(e.data),!0===e.data?(localStorage.setItem("email",c.state.email),console.log("fatto"),window.location.replace("/Intro")):c.setState({error:"E-mail o password errata. Riprovare"})})).catch((function(e){console.error(e)}))},c.state={email:"",password:"",error:""},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"form-container w3-animate-zoom",children:[Object(c.jsx)("img",{className:"logo",src:"images/v_logo.png",alt:"Logo"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{method:"post",onSubmit:this.submitHandle,children:[Object(c.jsx)("label",{htmlFor:"quest1",children:"E-MAIL:"}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"mario.rossi@example.com",value:this.state.email,onChange:this.changeHandler}),Object(c.jsx)("label",{htmlFor:"quest2",children:"PASSWORD:"}),Object(c.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Password123",value:this.state.password,onChange:this.changeHandler}),Object(c.jsx)("p",{className:"red",children:this.state.error}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)("i",{className:"fas fa-arrow-right"})})]})]})}}]),a}(s.Component),B=a(102),L=a.n(B),P=a(103),V=a.n(P),M=window.location.host,q=(M=M.split(":"))[0];var R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={driver:[],bestDriver:[]},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/");t=t[4],this.setState([this.path=t]),v.a.get("http://".concat(q,":9000/Chart/").concat(t),{request:"Info"}).then((function(t){var a,c;a=1===Object.keys(t.data).length?t.data[0]:t.data[1],c=t.data[0],e.setState({driver:a,bestDriver:c}),function(e,t){var a=document.getElementById("info").getContext("2d");new V.a(a,{type:"line",data:{labels:["Start","S1","S2","S3"],datasets:[{data:[0,t.settore1,t.settore2,t.settore3],lineTension:0,backgroundColor:["rgba(255, 255, 255, 0)"],borderColor:["rgba(255, 255, 255, 1)"],borderWidth:3},{data:[0,e.settore1,e.settore2,e.settore3],lineTension:0,backgroundColor:["rgba(255, 255, 255, 0)"],pointBackgroundColor:["rgba(255,0, 0, 1)"],borderColor:["rgba(255, 0, 0, 1)"],borderWidth:3}]},options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(255,255,255,.2)"}}],xAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(255,255,255,.2)"}}]},legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{point:{backgroundColor:"#fff"}}}})}(e.state.driver,e.state.bestDriver)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{align:"center",className:"container",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)("div",{className:"presentation-container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsxs)("div",{className:"chart-info-container",children:[Object(c.jsxs)("h4",{children:["Nome del pilota : ",Object(c.jsxs)("span",{children:[this.state.driver.nome," ",this.state.driver.cognome]})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-4",children:Object(c.jsx)("h5",{children:this.state.driver.settore1})}),Object(c.jsx)("div",{className:"col-lg-4",children:Object(c.jsx)("h5",{children:this.state.driver.settore2})}),Object(c.jsx)("div",{className:"col-lg-4",children:Object(c.jsx)("h5",{children:this.state.driver.settore3})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h4",{className:"purple",children:this.state.driver.tempo})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("i",{className:"fas fa-circle red"})})})]})}),Object(c.jsx)("div",{className:"col-lg-6 only-desktop",children:Object(c.jsxs)("div",{className:"chart-info-container",children:[Object(c.jsxs)("h4",{children:["Primo pilota : ",this.state.bestDriver.nome," ",this.state.bestDriver.cognome]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsx)("h5",{children:this.state.bestDriver.settore1})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsx)("h5",{children:this.state.bestDriver.settore2})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsx)("h5",{children:this.state.bestDriver.settore3})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h4",{className:"purple",children:this.state.bestDriver.tempo})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("i",{className:"fas fa-circle"})})})]})}),Object(c.jsx)("div",{className:"col-lg-12",children:Object(c.jsx)("div",{className:"chart-graph-container white-bg",children:Object(c.jsx)("canvas",{id:"info",style:{zIndex:2}})})})]}),Object(c.jsx)(b.b,{to:"/App",children:Object(c.jsx)("button",{children:Object(c.jsx)("i",{className:"fa fa-home"})})})]})})})}}]),a}(s.Component),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={apiResponse:""},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)(L.a,{params:{particles:{enable:!0,move:{radius:10}},color:{value:"#15151e"}}}),Object(c.jsx)(b.a,{children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{exact:!0,path:"/",component:function(){return Object(c.jsx)(m,{})}}),Object(c.jsx)(h.a,{path:"/Login",component:function(){return Object(c.jsx)(E,{})}}),Object(c.jsx)(h.a,{path:"/Intro",component:function(){return Object(c.jsx)(S,{})}}),Object(c.jsx)(h.a,{path:"/App",component:function(){return Object(c.jsx)(H,{})}}),Object(c.jsx)(h.a,{path:"/Chart/:id",component:function(){return Object(c.jsx)(R,{})}})]})})]})}}]),a}(l.a.Component),G=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(G,"px")),n.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.d628ea97.chunk.js.map