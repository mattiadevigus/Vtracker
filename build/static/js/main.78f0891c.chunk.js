(this.webpackJsonpvclient=this.webpackJsonpvclient||[]).push([[0],{363:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(3),n=a.n(c),i=a(100),l=a.n(i),r=a(13),o=a(14),d=a(16),j=a(15),b=a(22),h=a(7);var m=function(){return Object(s.jsxs)("div",{className:"w3-animate-zoom home-container",children:[Object(s.jsxs)("div",{className:"standard-container",children:[Object(s.jsx)("img",{src:"images/v_icon.png",alt:""}),Object(s.jsx)("h3",{children:"Vtracker"}),Object(s.jsx)("p",{className:"created-by",children:"Creato da Mattia Devigus"})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12 col-lg-12",children:Object(s.jsx)("div",{align:"center",className:"button-container",children:Object(s.jsx)(b.b,{to:"/App",children:Object(s.jsxs)("button",{className:"app-button",children:[Object(s.jsx)("i",{className:"fas fa-play display-4"}),Object(s.jsx)("h4",{children:"Avvia il tracker"})]})})})})})]})};var O=function(e){return Object(s.jsxs)("div",{className:"col-4 display-4",children:[Object(s.jsx)("i",{className:e.icon})," ",Object(s.jsx)("h5",{children:e.title})]})};var x=function(e){return Object(s.jsx)("section",{id:"presentation",children:Object(s.jsxs)("div",{className:"presentation-container w3-animate-zoom",children:[Object(s.jsx)("img",{style:{width:"5%"},src:"./images/v_icon.png",alt:""}),Object(s.jsx)("h1",{children:"BENVENUTO NEL VTRACKER"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"only-desktop",children:[Object(s.jsx)("p",{children:"Il Vtracker \xe8 un software realizzato per consentire il tracciamento dei tempi per un server di Assetto Corsa Competizione."})," ",Object(s.jsx)("p",{children:" Grazie al Vtracker, puoi tenere sott'occhio importanti informazioni utili per organizzare eventi. Alcune di queste, rendono possibile il monitoraggio di un Time Attack o Prequalifica. "})," ",Object(s.jsx)("p",{children:" Pu\xf2 essere utilizzato anche per confrontarti con i tuoi amici in ambito privato"}),Object(s.jsx)("p",{children:"Per proseguire, inizia la configurazione del tracker"})]}),Object(s.jsx)("hr",{className:"only-desktop"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(O,{icon:"fas fa-hourglass-half",title:"Visualizza i tempi di un server"}),Object(s.jsx)(O,{icon:"fas fa-users",title:"Informazioni aggiuntive piloti"}),Object(s.jsx)(O,{icon:"fas fa-chart-bar",title:"Grafici iterattivi"})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"button-container",children:Object(s.jsxs)("button",{onClick:function(){document.getElementById("presentation").style.display="none",document.getElementById("presentationTwo").style.display="flex"},children:[Object(s.jsx)("i",{className:"fas fa-arrow-right"})," "]})})]})})},u=a(44),p=a(26),v=a.n(p),g=window.location.host,f=(g=g.split(":"))[0],N={display:"none"};function w(){document.getElementById("presentation").style.display="flex",document.getElementById("presentationTwo").style.display="none"}var y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).next=function(){""!==s.state.path&&(document.getElementById("presentationTree").style.display="flex",document.getElementById("presentationTwo").style.display="none",localStorage.removeItem("email"))},s.changeHandler=function(e){s.setState(Object(u.a)({},e.target.name,e.target.value)),console.log(s.state)},s.submitHandle=function(e){e.preventDefault(),console.log(s.state),v.a.post("http://".concat(f,":9000"),s.state).catch((function(e){console.error(e)}))},s.state={path:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.path;return Object(s.jsx)("section",{id:"presentationTwo",style:N,children:Object(s.jsxs)("div",{className:"presentation-container w3-animate-right",children:[Object(s.jsx)("h1",{children:"INIZIAMO!"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("form",{method:"post",onSubmit:this.submitHandle,children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("label",{children:"Inserisci il percorso file della cartella Result del server"}),Object(s.jsx)("input",{type:"text",name:"path",id:"path",value:e,onChange:this.changeHandler,placeholder:"C:\\SteamLibrary\\steamapps\\common\\Assetto Corsa Competizione Dedicated Server\\results",required:!0})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col col-sm-12 col-m-12 col-lg-6",children:Object(s.jsx)("button",{onClick:w,children:Object(s.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(s.jsx)("div",{className:"col col-sm-12 col-m-12 col-lg-6",children:Object(s.jsx)("button",{type:"submit",onClick:this.next,children:Object(s.jsx)("i",{className:"fas fa-arrow-right"})})})]})]})]})})}}]),a}(c.Component),C={display:"none"},k=window.location.hostname,S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={email:"",password:"",error:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"presentationTree",style:C,children:Object(s.jsxs)("div",{className:"presentation-container w3-animate-right",children:[Object(s.jsx)("img",{style:{width:"20%"},src:"./images/v_icon.png",alt:""}),Object(s.jsx)("h1",{children:"FINITO"}),Object(s.jsx)("hr",{}),Object(s.jsx)("h5",{children:"AVVIA IL VTRACKER"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"button-container",children:Object(s.jsx)(b.b,{to:"/App",children:Object(s.jsx)("button",{children:Object(s.jsx)("i",{className:"fas fa-arrow-right"})})})}),Object(s.jsxs)("div",{className:"presentation-info",children:[Object(s.jsx)("p",{children:"Potrai cambiare le impostazioni successivamente nell'apposita sezione"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["Link da inviare ai piloti: ",Object(s.jsxs)("b",{children:["http://",k,"/App "]})]}),Object(s.jsx)("span",{style:{color:"red",fontSize:"0.7rem"},children:"Se il link contiene localhost, accedi al browser utilizzando l'ip del server"}),Object(s.jsx)("hr",{})]})]})})}}]),a}(c.Component),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("Your email is: "+localStorage.getItem("email"))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)(y,{}),Object(s.jsx)(S,{})]})}}]),a}(c.Component),T=window.location.host,z=(T=T.split(":"))[0],H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).delete=function(){!0===window.confirm("Sei sicuro? Verranno cancellati tutti i tempi dal database. I file contenuti nella cartella results, dovranno essere eliminati manualmente")&&(v.a.post("http://".concat(z,":9000/Delete"),{request:"delete"}),window.location.replace("/Intro"))},s.state={timetable:[],server:"_server",track:"_name"},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.post("http://".concat(z,":9000/App"),{request:"tutto ok"}).then((function(t){e.setState({timetable:t.data.rows,server:t.data.server,track:t.data.track})}))}},{key:"calculateGap",value:function(e){var t=null;return this.state.timetable.map((function(e,a){var s=Number(e.settore1)+Number(e.settore2)+Number(e.settore3);return null===t?(t=s,s="-"):s="+"+Number(s-t).toFixed(3),s}))[e]}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"w3-animate-zoom",children:[Object(s.jsxs)("div",{id:"headingData",children:[Object(s.jsx)("img",{id:"logo",src:"images/v_logo.png",alt:"logo",srcSet:"images/v_logo.png"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row ",children:[Object(s.jsxs)("div",{className:"col col-md-4 col-lg-4",children:[Object(s.jsxs)("h3",{id:"serverName",className:"data",children:[Object(s.jsx)("span",{children:"Server: "}),this.state.server]}),Object(s.jsxs)("h4",{id:"track",className:"data",children:[Object(s.jsx)("span",{children:"Pista: "}),this.state.track]})]}),Object(s.jsx)("div",{className:"col-sm-5 col-md-2 col-lg-5 align-self-center"}),Object(s.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(s.jsx)(b.b,{to:"/",children:Object(s.jsx)("button",{className:"button",children:Object(s.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-home button-fix"})})})}),Object(s.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(s.jsx)("button",{onClick:this.delete,className:"button ",children:Object(s.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-trash"})})}),Object(s.jsx)("div",{className:"col col-md-2 col-lg-1 align-self-center",align:"center",children:Object(s.jsx)(b.b,{to:"/Intro",children:Object(s.jsx)("button",{className:"button",children:Object(s.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-sliders-h align-self-center"})})})})]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("div",{id:"data-Container",children:Object(s.jsxs)("table",{id:"data-table",children:[Object(s.jsx)("thead",{id:"dataHeader",children:Object(s.jsxs)("tr",{className:"rowHeader",children:[Object(s.jsx)("th",{id:"posHeader",className:"colHeader dataTableCell sticky-col first-col",children:"#"}),Object(s.jsx)("th",{id:"lastNameHeader",className:"colHeader dataTableCell",children:"Pilota"}),Object(s.jsx)("th",{id:"teamHeader",className:"colHeader dataTableCell",children:"Modello macchina"}),Object(s.jsx)("th",{id:"sec1Header",className:"colHeader dataTableCell",children:"S1"}),Object(s.jsx)("th",{id:"sec2Header",className:"colHeader dataTableCell",children:"S2"}),Object(s.jsx)("th",{id:"sec3Header",className:"colHeader dataTableCell",children:"S3"}),Object(s.jsx)("th",{id:"timeHeader",className:"colHeader dataTableCell",children:"Tempo"}),Object(s.jsx)("th",{id:"gapHeader",className:"colHeader dataTableCell",children:"Gap"})]})}),this.state.timetable.map((function(t,a){var c="/Chart/".concat(t.id);return Object(s.jsx)("tbody",{id:"dataBody",children:Object(s.jsxs)("tr",{className:"rowN",children:[Object(s.jsx)("td",{className:"colN dataTableCell pos sticky-col first-col",children:a+1}),Object(s.jsx)("td",{className:"colN dataTableCell lastName",children:Object(s.jsxs)(b.b,{to:c,children:[" ",t.nome,"  ",t.cognome]})}),Object(s.jsx)("td",{className:"colN dataTableCell team",children:Object(s.jsx)("img",{src:t.immagine,alt:"car"})}),Object(s.jsx)("td",{className:"colN dataTableCell sec1",children:t.settore1}),Object(s.jsx)("td",{className:"colN dataTableCell sec2",children:t.settore2}),Object(s.jsx)("td",{className:"colN dataTableCell sec3",children:t.settore3}),Object(s.jsx)("td",{className:"colN dataTableCell time",children:t.tempo}),Object(s.jsx)("td",{className:"colN dataTableCell gap",children:e.calculateGap(a)})]})})}))]})})]})}}]),a}(c.Component),A=window.location.host,D=(A=A.split(":"))[0],E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){var e=localStorage.getItem("email");console.log("check is "+e),null!==e&&window.location.replace("/Intro")},s.changeHandler=function(e){s.setState(Object(u.a)({},e.target.name,e.target.value))},s.submitHandle=function(e){e.preventDefault(),console.log(s.state),v.a.post("http://".concat(D,":9000/Login"),s.state).then((function(e){console.log(e.data),!0===e.data?(localStorage.setItem("email",s.state.email),console.log("fatto"),window.location.replace("/Intro")):s.setState({error:"E-mail o password errata. Riprovare"})})).catch((function(e){console.error(e)}))},s.state={email:"",password:"",error:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"form-container w3-animate-zoom",children:[Object(s.jsx)("img",{className:"logo",src:"images/v_logo.png",alt:"Logo"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("form",{method:"post",onSubmit:this.submitHandle,children:[Object(s.jsx)("label",{htmlFor:"quest1",children:"E-MAIL:"}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"mario.rossi@example.com",value:this.state.email,onChange:this.changeHandler}),Object(s.jsx)("label",{htmlFor:"quest2",children:"PASSWORD:"}),Object(s.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Password123",value:this.state.password,onChange:this.changeHandler}),Object(s.jsx)("p",{className:"red",children:this.state.error}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{type:"submit",children:Object(s.jsx)("i",{className:"fas fa-arrow-right"})})]})]})}}]),a}(c.Component),B=a(102),L=a.n(B),P=a(103),V=a.n(P),M=window.location.host,q=(M=M.split(":"))[0];var R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={driver:[],bestDriver:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/");t=t[4],this.setState([this.path=t]),v.a.get("http://".concat(q,":9000/Chart/").concat(t),{request:"Info"}).then((function(t){var a,s;a=1===Object.keys(t.data).length?t.data[0]:t.data[1],s=t.data[0],e.setState({driver:a,bestDriver:s}),function(e,t){var a=document.getElementById("info").getContext("2d");new V.a(a,{type:"line",data:{labels:["Start","S1","S2","S3"],datasets:[{data:[0,t.settore1,t.settore2,t.settore3],lineTension:0,backgroundColor:["rgba(255, 255, 255, 0)"],borderColor:["rgba(255, 255, 255, 1)"],borderWidth:3},{data:[0,e.settore1,e.settore2,e.settore3],lineTension:0,backgroundColor:["rgba(255, 255, 255, 0)"],pointBackgroundColor:["rgba(255,0, 0, 1)"],borderColor:["rgba(255, 0, 0, 1)"],borderWidth:3}]},options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(255,255,255,.2)"}}],xAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(255,255,255,.2)"}}]},legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{point:{backgroundColor:"#fff"}}}})}(e.state.driver,e.state.bestDriver)}))}},{key:"render",value:function(){return Object(s.jsx)("div",{align:"center",className:"container",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"presentation-container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsxs)("div",{className:"chart-info-container",children:[Object(s.jsxs)("h4",{children:["Nome del pilota : ",Object(s.jsxs)("span",{children:[this.state.driver.nome," ",this.state.driver.cognome]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4",children:Object(s.jsx)("h5",{children:this.state.driver.settore1})}),Object(s.jsx)("div",{className:"col-lg-4",children:Object(s.jsx)("h5",{children:this.state.driver.settore2})}),Object(s.jsx)("div",{className:"col-lg-4",children:Object(s.jsx)("h5",{children:this.state.driver.settore3})})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h4",{className:"purple",children:this.state.driver.tempo})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("i",{className:"fas fa-circle red"})})})]})}),Object(s.jsx)("div",{className:"col-lg-6 only-desktop",children:Object(s.jsxs)("div",{className:"chart-info-container",children:[Object(s.jsxs)("h4",{children:["Primo pilota : ",this.state.bestDriver.nome," ",this.state.bestDriver.cognome]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(s.jsx)("h5",{children:this.state.bestDriver.settore1})}),Object(s.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(s.jsx)("h5",{children:this.state.bestDriver.settore2})}),Object(s.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(s.jsx)("h5",{children:this.state.bestDriver.settore3})})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h4",{className:"purple",children:this.state.bestDriver.tempo})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("i",{className:"fas fa-circle"})})})]})}),Object(s.jsx)("div",{className:"col-lg-12",children:Object(s.jsx)("div",{className:"chart-graph-container white-bg",children:Object(s.jsx)("canvas",{id:"info",style:{zIndex:2}})})})]}),Object(s.jsx)(b.b,{to:"/App",children:Object(s.jsx)("button",{children:Object(s.jsx)("i",{className:"fa fa-home"})})})]})})})}}]),a}(c.Component),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={apiResponse:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)(L.a,{params:{particles:{enable:!0,move:{radius:10}},color:{value:"#15151e"}}}),Object(s.jsx)(b.a,{children:Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{exact:!0,path:"/",component:function(){return Object(s.jsx)(m,{})}}),Object(s.jsx)(h.a,{path:"/Login",component:function(){return Object(s.jsx)(E,{})}}),Object(s.jsx)(h.a,{path:"/Intro",component:function(){return Object(s.jsx)(I,{})}}),Object(s.jsx)(h.a,{path:"/App",component:function(){return Object(s.jsx)(H,{})}}),Object(s.jsx)(h.a,{path:"/Chart/:id",component:function(){return Object(s.jsx)(R,{})}})]})})]})}}]),a}(n.a.Component),G=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(G,"px")),l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.78f0891c.chunk.js.map