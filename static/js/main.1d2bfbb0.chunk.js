(this["webpackJsonpretro-app"]=this["webpackJsonpretro-app"]||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(12),i=a.n(r),o=(a(122),a(123),a(7)),l=a(210),j=a(211),d=a(214),b=a(212),u=a(206),m=a(42),O=a(213),x=a(19),h=a(91),p=a(60),f=a.n(p),g="https://retrospective-midterm.herokuapp.com",v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2?arguments[2]:void 0;return f()({method:t,url:g+"/"+e,data:a}).catch((function(e){throw e}))},y=a(17),w=a(229),C=a(205),S=a(203),k=a(204),N=a(202),P=a(99),D=a(92),T=a.n(D);function I(e){return Object(n.jsx)(T.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:Object(n.jsx)(P.a,Object(y.a)({},e))})}function F(e){var t=e.title,a=e.content,s=e.onChoose,r=Object(c.useState)(!0),i=Object(o.a)(r,2),l=i[0],j=i[1];Object(c.useEffect)((function(){j(!0)}),[s]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(w.a,{open:l,onClose:function(){j(!1)},PaperComponent:I,"aria-labelledby":"draggable-dialog-title",children:[Object(n.jsx)(N.a,{style:{cursor:"move"},id:"draggable-dialog-title",children:t}),Object(n.jsx)(S.a,{children:Object(n.jsx)(k.a,{children:a})}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(u.a,{autoFocus:!0,onClick:function(){j(!1),s(!1)},color:"primary",children:"Cancel"}),Object(n.jsx)(u.a,{onClick:function(){j(!1),s(!0)},color:"primary",children:"OK"})]})]})})}var W=a(230),E=a(227),z=a(208);function q(e){return Object(n.jsx)(E.a,Object(y.a)({elevation:6,variant:"filled"},e))}var B=Object(z.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function R(e){var t=e.reset,a=e.open,r=e.type,i=e.message,l=B(),j=s.a.useState(a),d=Object(o.a)(j,2),b=d[0],u=d[1],m=function(e,t){"clickaway"!==t&&u(!1)};return Object(c.useEffect)((function(){u(a)}),[a,t]),Object(n.jsx)("div",{className:l.root,children:Object(n.jsx)(W.a,{open:b,autoHideDuration:3e3,onClose:m,children:Object(n.jsx)(q,{onClose:m,severity:r,children:i})})})}var L=function(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(null),p=Object(o.a)(i,2),f=p[0],g=p[1],y=Object(c.useState)(!1),w=Object(o.a)(y,2),C=w[0],S=w[1];Object(c.useEffect)((function(){v("tasks/board?id="+e.id,"GET",null).then((function(e){r(e.data.length)}))}),[e.id]);var k=new Date(e.day);return Object(n.jsxs)(n.Fragment,{children:[C?Object(n.jsx)(F,{title:"Delete board",content:"Do you want to delete this board?",onChoose:function(t){t&&v("boards/"+e.id,"DELETE",null).then((function(t){e.onDelete(),S(!1)})),S(!1)}}):Object(n.jsx)(n.Fragment,{}),!0===f?Object(n.jsx)(R,{open:!0,type:"success",message:"Copied"}):Object(n.jsx)(n.Fragment,{}),!1===f?Object(n.jsx)(R,{open:!0,type:"success",message:"Copied"}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)(l.a,{style:{border:"1px solid black"},children:[Object(n.jsx)(j.a,{children:Object(n.jsx)(x.b,{to:"/mid-term-retrospective/boards?id="+e.id,style:{textDecoration:"none",color:"black"},children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(n.jsxs)(O.a,{container:!0,justify:"space-between",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:k.getDate()+"/"+(k.getMonth()+1)+"/"+k.getFullYear()})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsxs)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:[s," tasks"]})})]})]})})}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(O.a,{container:!0,justify:"space-between",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(h.CopyToClipboard,{text:window.location.href+e.url,onCopy:function(){g(!f)},children:Object(n.jsx)(u.a,{size:"small",color:"primary",children:"URL"})})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{size:"small",color:"primary",onClick:function(){e.onChangeDelete(),S(!0)},children:"Delete"})})]})})]})]})},V=a(224),A=a(223),G=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),m=Object(o.a)(b,2),O=m[0],x=m[1],h=function(){d(!1)};return Object(n.jsxs)(n.Fragment,{children:[O?Object(n.jsx)(R,{open:!0,type:"success",message:"Th\xeam th\xe0nh c\xf4ng"}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(u.a,{variant:"outlined",color:"primary",onClick:function(){d(!0),x(!1)},fullWidth:!0,style:{height:"150px"},children:"Add Board"}),Object(n.jsxs)(w.a,{open:j,onClose:h,"aria-labelledby":"form-dialog-title",disableBackdropClick:!0,children:[Object(n.jsx)(N.a,{id:"form-dialog-title",children:"Subscribe"}),Object(n.jsx)(S.a,{children:Object(n.jsx)(A.a,{autoFocus:!0,margin:"dense",id:"name",label:"Board Name",type:"text",fullWidth:!0,value:s,onChange:function(e){var t=e.target.value;r(t)}})}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(u.a,{onClick:h,color:"primary",children:"Cancel"}),Object(n.jsx)(u.a,{onClick:function(t){""!==s&&(v("boards","POST",{name:s,user:e.userID}).then((function(t){e.onReset(),x(!0)})),r(""),d(!1))},color:"primary",children:"Subscribe"})]})]})]})},Y=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),u=Object(o.a)(b,2),m=u[0],x=u[1];Object(c.useEffect)((function(){v("boards/user/"+e.userID,"GET",null).then((function(e){r(e.data)}))}),[j,e.userID]);var h=function(){d(!j),x(!0)},p=function(){x(!1)};return Object(n.jsxs)("div",{style:{margin:"10px"},children:[m?Object(n.jsx)(R,{open:!0,type:"success",message:"X\xf3a b\u1ea3ng th\xe0nh c\xf4ng"}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("h1",{children:"Board List"}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,md:2,xs:12,children:Object(n.jsx)(V.a,{mr:2,mt:2,children:Object(n.jsx)(G,{onReset:function(){d(!j)},userID:e.userID})})}),s.map((function(e){return Object(n.jsx)(O.a,{item:!0,md:2,xs:12,children:Object(n.jsx)(V.a,{mr:2,mt:2,children:Object(n.jsx)(L,{name:e.name,id:e._id,day:e.date,url:e.url,onDelete:h,onChangeDelete:p})})},e._id)}))]})]})},_=a(215),U=a(216),J=a(207),M=a(95),H=a.n(M),K=a(94),X=a.n(K),Q=a(232),Z=a(98),$=Object(z.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}})),ee=function(e){var t=$(),a=s.a.useState(null),c=Object(o.a)(a,2),r=c[0],i=c[1],l=Boolean(r);return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(_.a,{position:"static",children:Object(n.jsxs)(U.a,{children:[Object(n.jsx)(x.b,{to:"/mid-term-retrospective/",style:{textDecoration:"none",color:"white"},children:Object(n.jsx)(J.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(X.a,{})})}),Object(n.jsx)(m.a,{variant:"h6",className:t.title,children:"Retrospective"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(J.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(n.jsx)(H.a,{})}),Object(n.jsxs)(Z.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){i(null)},children:[Object(n.jsx)(x.b,{to:"/mid-term-retrospective/profile",style:{textDecoration:"none",color:"black"},children:Object(n.jsx)(Q.a,{children:"Profile"})}),Object(n.jsx)(x.b,{to:{pathname:"/mid-term-retrospective/login",state:{type:"success",message:"Successfully logged out!",open:!0}},style:{textDecoration:"none",color:"black"},children:Object(n.jsx)(Q.a,{onClick:function(){localStorage.setItem("token",null)},children:"Log out"})})]})]})]})})})},te=a(14),ae=function(e,t){return f.a.get(g+"/"+e,{headers:{Authorization:"Bearer "+t}})},ne=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),u=b[0],m=b[1];return Object(c.useEffect)((function(){ae("profile",JSON.parse(localStorage.getItem("token"))).then((function(e){m(e.data.userId),s(!0),j(!0)})).catch((function(e){console.log("L\u1ed7i"),s(!1),j(!0)}))}),[]),l?a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ee,{}),Object(n.jsx)(Y,{userID:u})]}):Object(n.jsx)(te.a,{to:{pathname:"/mid-term-retrospective/login",state:{type:"error",message:"You must login!",open:!0}}}):Object(n.jsx)(n.Fragment,{})},ce=a(96),se=a.n(ce),re=a(57),ie=a.n(re),oe=a(66),le=a.n(oe),je=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(e.taskInfor.description),l=Object(o.a)(i,2),j=l[0],d=l[1],b="5px solid "+e.background,m=function(){confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a board n\xe0y kh\xf4ng?")&&v("tasks/"+e.taskInfor._id,"DELETE",null).then((function(t){e.onResetData()}))};return s?Object(n.jsxs)(O.a,{container:!0,justify:"center",style:{border:b},children:[Object(n.jsx)(O.a,{item:!0,xs:11,children:Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(n.jsx)(A.a,{id:"textField",value:j,label:"Description",variant:"outlined",size:"small",fullWidth:!0,style:{marginTop:"5px"},onChange:function(e){d(e.target.value)}})})}),Object(n.jsx)(O.a,{item:!0,xs:11,children:Object(n.jsxs)(O.a,{container:!0,justify:"space-between",style:{margin:"4px"},children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{variant:"contained",size:"small",style:{margin:"2px",backgroundColor:"#76ff03"},onClick:function(){v("tasks/edit/"+e.taskInfor._id,"POST",{description:j}).then((function(t){r(!1),e.onResetData()}))},children:"Done"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(J.a,{component:"span",size:"small",style:{margin:"2px"},onClick:m,children:Object(n.jsx)(ie.a,{})})})]})})]}):Object(n.jsxs)(O.a,{container:!0,style:{backgroundColor:e.background,padding:"5px"},children:[Object(n.jsx)(O.a,{item:!0,children:e.taskInfor.description}),Object(n.jsxs)(O.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"baseline",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(J.a,{component:"span",size:"small",onClick:function(){r(!0)},children:Object(n.jsx)(le.a,{})})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(J.a,{component:"span",size:"small",onClick:m,children:Object(n.jsx)(ie.a,{})})})]})]})},de=function(e){var t="5px solid "+e.color,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(n.jsxs)(O.a,{container:!0,justify:"center",style:{border:t},children:[Object(n.jsx)(O.a,{item:!0,xs:11,children:Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(n.jsx)(A.a,{id:"textField",value:r,onChange:function(e){var t=e.target.value;i(t)},label:"Description",variant:"outlined",size:"small",fullWidth:!0,style:{marginTop:"5px"}})})}),Object(n.jsx)(O.a,{item:!0,xs:11,children:Object(n.jsxs)(O.a,{container:!0,justify:"space-between",style:{margin:"4px"},children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{variant:"contained",size:"small",style:{margin:"2px",backgroundColor:"#76ff03"},onClick:function(t){""!==r&&(v("tasks","POST",{type:e.value,description:r,board:e.board}).then((function(t){e.onCloseInputTask(),e.onResetData()})),i(""))},children:"Add"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(J.a,{component:"span",size:"small",style:{margin:"2px"},onClick:function(){return e.onCloseInputTask()},children:Object(n.jsx)(ie.a,{})})})]})})]})},be=Object(z.a)((function(e){return{root:{display:"flex","& > *":{width:e.spacing(2),height:e.spacing(2)}}}})),ue=function(e){var t=be(),a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(-1),j=Object(o.a)(l,2),d=j[0],b=j[1],x=Object(c.useState)(!1),h=Object(o.a)(x,2),p=h[0],f=h[1];Object(c.useEffect)((function(){v("columns/"+e.infor.value+"/"+e.boardID,"GET",null).then((function(e){i(e.data)}))}),[p,e]);var g=function(){f(!p)};return Object(n.jsxs)(O.a,{item:!0,md:4,xs:12,children:[Object(n.jsxs)(O.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(V.a,{className:t.root,children:Object(n.jsx)(P.a,{variant:"outlined",square:!0,style:{background:e.infor.color}})})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(m.a,{align:"center",variant:"h6",style:{margin:"0px 8px"},children:e.infor.label})})]}),Object(n.jsx)(u.a,{variant:"contained",fullWidth:!0,onClick:function(){return t=e.columnType,void b(t===d?-1:t);var t},children:Object(n.jsx)(se.a,{})}),d===e.infor.value?Object(n.jsx)(V.a,{mt:2,mb:2,children:Object(n.jsx)(de,{color:e.infor.color,value:e.infor.value,onCloseInputTask:function(){b(-1)},onResetData:g,board:e.boardID})}):"",r.map((function(t,a){return Object(n.jsx)(V.a,{mt:2,mb:2,children:Object(n.jsx)(je,{taskInfor:t,background:e.infor.color,onResetData:g})},a)}))]})},me=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){v("columns","GET",null).then((function(e){r(e.data)}))}),[]),Object(n.jsx)(O.a,{container:!0,spacing:2,children:s.map((function(t){return Object(n.jsx)(ue,{infor:t,boardID:e.boardID,columnType:t.value},t._id)}))})},Oe=function(e){return Object(n.jsx)(V.a,{style:{margin:"16px"},children:Object(n.jsx)(me,{boardID:e.boardID})})},xe=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(""),x=Object(o.a)(b,2),h=x[0],p=x[1];Object(c.useEffect)((function(){v("boards/"+e.boardID,"GET",null).then((function(e){d(e.data.name),p(e.data.name)}))}),[e.boardID]);var f=function(){p(j),r(!s)};return Object(n.jsx)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{backgroundColor:"white"},children:Object(n.jsx)(O.a,{item:!0,style:{margin:"8px 16px"},children:Object(n.jsx)(O.a,{container:!0,children:s?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(A.a,{id:"outlined-textarea",label:"Board Name",placeholder:"Board Name",variant:"outlined",size:"small",style:{margin:"-4px 0px"},value:h,onChange:function(e){return p(e.target.value)}})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{variant:"contained",color:"primary",size:"small",style:{margin:"0px 20px"},onClick:function(){""!==h&&v("boards/edit/"+e.boardID,"POST",{name:h}).then((function(e){r(!1),d(h)}))},children:"Save"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{size:"small",onClick:f,children:"Cancel"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(m.a,{variant:"h6",children:j})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(J.a,{component:"span",size:"small",style:{margin:"0px 8px"},onClick:f,children:Object(n.jsx)(le.a,{})})})]})})})})},he=function(e){var t=Object(c.useState)(null),a=Object(o.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){e.location&&r(new URLSearchParams(e.location.search).get("id"))}),[e.location]),Object(n.jsxs)("div",{children:[Object(n.jsx)(ee,{}),null!==s?Object(n.jsx)(xe,{boardID:s}):"",null!==s?Object(n.jsx)(Oe,{boardID:s}):""]})},pe=a(8),fe=a(231),ge=a(218),ve=a(219),ye=a(228),we=a(67),Ce=a.n(we),Se=a(217),ke=a(97),Ne=a.n(ke),Pe=a.p+"static/media/google.dbea7bf3.svg",De=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},button:{margin:e.spacing(1)}}}));function Te(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)({email:"",password:""}),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),h=Object(o.a)(b,2),p=h[0],f=h[1],g=De(),w=function(e){var t=e.target,a=t.name,n=t.value;console.log(a,n),d(Object(y.a)(Object(y.a)({},j),{},Object(pe.a)({},a,n)))};return s?Object(n.jsx)(te.a,{to:"/mid-term-retrospective"}):Object(n.jsxs)(Se.a,{component:"main",maxWidth:"xs",children:[e.location.state?Object(n.jsx)(R,{open:e.location.state.open,type:e.location.state.type,message:e.location.state.message}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(R,{open:p,type:"error",message:"Wrong account or password"}),Object(n.jsx)(ge.a,{}),Object(n.jsxs)("div",{className:g.paper,children:[Object(n.jsx)(fe.a,{className:g.avatar,children:Object(n.jsx)(Ce.a,{})}),Object(n.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:g.form,noValidate:!0,children:[Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:j.email,onChange:w}),Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j.password,onChange:w}),Object(n.jsxs)(O.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(ve.a,{control:Object(n.jsx)(ye.a,{value:"remember",color:"primary"}),label:"Remember me"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(x.b,{to:"#",variant:"body2",children:"Forgot password?"})})]}),Object(n.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit,onClick:function(e){e.preventDefault(),f(!1),v("auth/login","POST",{email:j.email,password:j.password}).then((function(e){localStorage.setItem("token",JSON.stringify(e.data.access_token)),r(!0)})).catch((function(e){f(!0)}))},children:"Sign In"})]}),Object(n.jsx)(m.a,{component:"p",variant:"h6",children:"Or login with"}),Object(n.jsxs)(O.a,{container:!0,justify:"space-between",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(u.a,{variant:"contained",className:g.button,startIcon:Object(n.jsx)(Ne.a,{style:{color:"blue"}}),style:{color:"blue"},children:"Facebook"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsxs)(u.a,{variant:"contained",className:g.button,style:{color:"blue"},children:[Object(n.jsx)("img",{src:Pe,alt:"google",style:{margin:"0px 8px 0px 0px"}}),"Facebook"]})})]}),Object(n.jsx)(x.b,{to:"/mid-term-retrospective/signup",style:{margin:"24px 0px 0px 0px",color:"#3f51b5"},children:"Don't have an account? Sign Up"})]})]})}var Ie=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Fe=function(){var e=Ie(),t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)({value:!1,message:""}),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",agreeTerm:!1}),h=Object(o.a)(b,2),p=h[0],f=h[1],g=function(e){var t=e.target,a=t.name,n="agreeTerm"===a?t.checked:t.value;f(Object(y.a)(Object(y.a)({},p),{},Object(pe.a)({},a,n))),j.value&&d({value:!1,message:""})};return s?Object(n.jsx)(te.a,{to:{pathname:"/mid-term-retrospective/login",state:{type:"success",message:"Successful registration, login now!",open:!0}}}):Object(n.jsxs)(Se.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(R,{open:j.value,type:"error",message:j.message}),Object(n.jsx)(ge.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(fe.a,{className:e.avatar,children:Object(n.jsx)(Ce.a,{})}),Object(n.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==p.firstName&&""!==p.lastName&&""!==p.email&&""!==p.password&&""!==p.confirmPassword?p.password.length<8?d({value:!0,message:"Your password should contain at least 8 chars"}):p.agreeTerm?p.password===p.confirmPassword?v("users","POST",{firstName:p.firstName,lastName:p.lastName,email:p.email,password:p.password}).then((function(e){null===e.data.id?d({value:!0,message:"Account already exists!"}):r(!0)})):d({value:!0,message:"Password and confirm password are identical"}):d({value:!0,message:"You must agree with our Term"}):d({value:!0,message:"You need to fill in all the details"})},children:[Object(n.jsxs)(O.a,{container:!0,spacing:2,children:[Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(A.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:g,value:p.firstName})}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(A.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:g,value:p.lastName})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(A.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:g,value:p.email})}),Object(n.jsxs)(O.a,{item:!0,xs:12,children:[Object(n.jsx)(A.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:g,value:p.password}),Object(n.jsx)("p",{style:{fontStyle:"italic",fontSize:"80%"},children:" Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase."})]}),Object(n.jsxs)(O.a,{item:!0,xs:12,children:[Object(n.jsx)(A.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:g,value:p.confirmPassword}),Object(n.jsx)("p",{style:{fontStyle:"italic",fontSize:"80%"},children:" Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase."})]}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(ve.a,{control:Object(n.jsx)(ye.a,{name:"agreeTerm",checked:p.agreeTerm,onChange:g,color:"primary"}),label:"By signing up you agree to our Terms and Privacy Policy"})})]}),Object(n.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(n.jsx)(O.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(x.b,{to:"/mid-term-retrospective/login",style:{margin:"24px 0px 0px 0px",color:"#3f51b5"},children:"Already have an account? Sign in"})})})]})]})]})},We=a(3),Ee=a(220),ze=Object(z.a)((function(){return{root:{},avatar:{height:100,width:100}}})),qe=function(e){var t=e.user,a=ze();return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(V.a,{alignItems:"center",display:"flex",flexDirection:"column",children:[Object(n.jsx)(fe.a,{className:a.avatar}),Object(n.jsx)(m.a,{color:"textPrimary",gutterBottom:!0,variant:"h3",children:t.firstName+" "+t.lastName}),Object(n.jsx)(m.a,{color:"textSecondary",variant:"body1"}),Object(n.jsx)(m.a,{className:a.dateText,color:"textSecondary",variant:"body1",children:t.email})]})}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{color:"primary",fullWidth:!0,variant:"text",children:"Upload picture"})})]})},Be=a(221),Re=function(e){var t=e.user;return Object(n.jsx)("form",{autoComplete:"off",noValidate:!0,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(Be.a,{title:"Profile"}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(O.a,{container:!0,spacing:3,children:[Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,helperText:"Please specify the first name",label:"First name",name:"firstName",required:!0,value:t.firstName,variant:"outlined",disabled:!0})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Last name",name:"lastName",required:!0,value:t.lastName,variant:"outlined",disabled:!0})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Email Address",name:"email",required:!0,value:t.email,variant:"outlined",disabled:!0})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Phone Number",name:"phone",type:"number",value:t.phone,variant:"outlined",disabled:!0})})]})})]})})},Le=function(e){var t=e.user,a=e.onReset,s=Object(c.useState)({firstName:"",lastName:"",email:"",phone:""}),r=Object(o.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(!1),m=Object(o.a)(d,2),x=m[0],h=m[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),g=f[0],w=f[1];Object(c.useEffect)((function(){j({firstName:t.firstName,lastName:t.lastName,email:t.email,phone:t.phone})}),[t]);var C=function(e){j(Object(y.a)(Object(y.a)({},i),{},Object(pe.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[x?Object(n.jsx)(F,{title:"Change Information",content:"Do you want to change these informations?",onChoose:function(e){e?v("users/edit/"+t._id,"POST",i).then((function(e){h(!1),w(!0),a()})):h(!1)}}):Object(n.jsx)(n.Fragment,{}),g?Object(n.jsx)(R,{open:!0,type:"success",message:"successful change"}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("form",{autoComplete:"off",noValidate:!0,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(Be.a,{title:"Update Information",subheader:"The information can be edited"}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(O.a,{container:!0,spacing:3,children:[Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,helperText:"Please specify the first name",label:"First name",name:"firstName",onChange:C,required:!0,value:i.firstName,variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Last name",name:"lastName",onChange:C,required:!0,value:i.lastName,variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Email Address",name:"email",onChange:C,required:!0,value:i.email,variant:"outlined",disabled:!0})}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,label:"Phone Number",name:"phone",onChange:C,type:"number",value:i.phone,variant:"outlined"})})]})}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(V.a,{display:"flex",justifyContent:"flex-end",p:2,children:Object(n.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(e){e.preventDefault(),w(!1),h(!0)},children:"Save details"})})]})})]})},Ve=function(e){var t=e.user,a=Object(c.useState)({oldPassword:"",newPassword:"",confirmPassword:""}),s=Object(o.a)(a,2),r=s[0],i=s[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),m=d[0],x=d[1],h=Object(c.useState)(!1),p=Object(o.a)(h,2),f=p[0],g=p[1],w=Object(c.useState)({value:!1,message:""}),C=Object(o.a)(w,2),S=C[0],k=C[1],N=function(e){i(Object(y.a)(Object(y.a)({},r),{},Object(pe.a)({},e.target.name,e.target.value)))};return f?Object(n.jsx)(te.a,{to:{pathname:"/mid-term-retrospective/login",state:{type:"success",message:"Password changed successfully, please log in again!",open:!0}}}):Object(n.jsxs)(n.Fragment,{children:[m?Object(n.jsx)(F,{title:"Change Information",content:"Do you want to change these informations?",onChoose:function(e){if(e){if(""===r.oldPassword||""===r.confirmPassword||""===r.newPassword)return k({value:!0,message:"You need to fill in all the details"}),void x(!1);if(r.newPassword.length<8)return k({value:!0,message:"Your new password should contain at least 8 chars"}),void x(!1);if(r.newPassword!==r.confirmPassword)return k({value:!0,message:"Password and confirm password are identical"}),void x(!1);v("users/change-password/"+t._id,"POST",{oldPassword:r.oldPassword,newPassword:r.newPassword}).then((function(e){e.data?(g(!0),x(!1)):k({value:!0,message:"Old password is invalid"})})),x(!1)}else x(!1)}}):Object(n.jsx)(n.Fragment,{}),S.value?Object(n.jsx)(R,{open:!0,type:"error",message:S.message}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("form",{autoComplete:"off",noValidate:!0,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(Be.a,{title:"Change Password"}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(O.a,{container:!0,spacing:3,children:[Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,helperText:"Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase.",label:"Old Password",name:"oldPassword",type:"password",onChange:N,required:!0,value:r.oldPassword,variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,helperText:"Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase.",label:"New Password",name:"newPassword",type:"password",onChange:N,required:!0,value:r.newPassword,variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0}),Object(n.jsx)(O.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(A.a,{fullWidth:!0,helperText:"Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase.",label:"Confirm Password",name:"confirmPassword",type:"password",onChange:N,required:!0,value:r.confirmPassword,variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0})]})}),Object(n.jsx)(Ee.a,{}),Object(n.jsx)(V.a,{display:"flex",justifyContent:"flex-end",p:2,children:Object(n.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(e){e.preventDefault(),g(!1),x(!0),k({value:!1,message:""})},children:"Save Password"})})]})})]})},Ae=a(225),Ge=a(222),Ye=Object(z.a)((function(e){return{tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}));function _e(e){var t=Ye(),a=s.a.useState(0),c=Object(o.a)(a,2),r=c[0],i=c[1];return Object(n.jsx)(V.a,{mt:5,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(Ae.a,{orientation:"vertical",value:r,variant:"fullWidth",onChange:function(t,a){i(a),e.onChangeValue(a)},"aria-label":"Vertical tabs example",className:t.tabs,children:[Object(n.jsx)(Ge.a,{label:"Profile",maxwidth:"true"}),Object(n.jsx)(Ge.a,{label:"Update Information",maxwidth:"true"}),Object(n.jsx)(Ge.a,{label:"Change Password",maxwidth:"true"})]})})})})}var Ue=function(e){var t=e.children,a=e.value,c=e.index,s=Object(We.a)(e,["children","value","index"]);return Object(n.jsx)(V.a,Object(y.a)(Object(y.a)({role:"tabpanel",hidden:a!==c,id:"vertical-tabpanel-".concat(c),"aria-labelledby":"vertical-tab-".concat(c)},s),{},{children:a===c&&Object(n.jsx)("div",{children:t})}))},Je=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),u=b[0],m=b[1],x=Object(c.useState)(null),h=Object(o.a)(x,2),p=h[0],f=h[1],g=Object(c.useState)(!1),y=Object(o.a)(g,2),w=y[0],C=y[1];Object(c.useEffect)((function(){ae("profile",JSON.parse(localStorage.getItem("token"))).then((function(e){v("users/"+e.data.userId,"GET",null).then((function(e){f(e.data),j(!0),m(!0)}))})).catch((function(e){j(!1),m(!0)}))}),[w]);return u?l?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ee,{}),Object(n.jsx)(Se.a,{maxWidth:"lg",style:{marginTop:"48px"},children:Object(n.jsxs)(O.a,{container:!0,spacing:3,children:[Object(n.jsxs)(O.a,{item:!0,lg:4,md:6,xs:12,children:[Object(n.jsx)(qe,{user:p}),Object(n.jsx)(_e,{onChangeValue:function(e){s(e)}})]}),Object(n.jsxs)(O.a,{item:!0,lg:8,md:6,xs:12,children:[Object(n.jsx)(Ue,{value:a,index:0,children:Object(n.jsx)(Re,{user:p})}),Object(n.jsx)(Ue,{value:a,index:1,children:Object(n.jsx)(Le,{user:p,onReset:function(){C(!w)}})}),Object(n.jsx)(Ue,{value:a,index:2,children:Object(n.jsx)(Ve,{user:p})})]})]})})]}):Object(n.jsx)(te.a,{to:{pathname:"/mid-term-retrospective/login",state:{type:"error",message:"You must login!",open:!0}}}):Object(n.jsx)(n.Fragment,{})},Me=[{path:"/mid-term-retrospective/",exact:!0,main:function(){return Object(n.jsx)(ne,{})}},{path:"/mid-term-retrospective/login",exact:!0,main:function(e){var t=e.location;return Object(n.jsx)(Te,{location:t})}},{path:"/mid-term-retrospective/signup",exact:!0,main:function(){return Object(n.jsx)(Fe,{})}},{path:"/mid-term-retrospective/profile",exact:!0,main:function(){return Object(n.jsx)(Je,{})}},{path:"/mid-term-retrospective/boards",exact:!0,main:function(e){var t=e.location;return Object(n.jsx)(he,{location:t})}},{path:"",exact:!1,main:function(){return Object(n.jsx)(ne,{})}}],He=function(){return Object(n.jsx)(x.a,{children:Object(n.jsx)(te.d,{children:function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){return Object(n.jsx)(te.b,{path:e.path,exact:e.exact,component:e.main},t)}))),t}(Me)})})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,234)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(He,{}),document.getElementById("root")),Ke()}},[[154,1,2]]]);
//# sourceMappingURL=main.1d2bfbb0.chunk.js.map