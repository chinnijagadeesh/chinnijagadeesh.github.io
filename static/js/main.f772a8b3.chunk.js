(this["webpackJsonpchinni-jagadeesh"]=this["webpackJsonpchinni-jagadeesh"]||[]).push([[0],{109:function(e,t,a){e.exports={container:"SideIcons_container__1Q3RV",icons:"SideIcons_icons__1BFyJ",iconsRihgt:"SideIcons_iconsRihgt__1ycYH",rightEmail:"SideIcons_rightEmail__3beqr",line:"SideIcons_line__2Kmba"}},137:function(e,t,a){e.exports={buttonComponent:"Button_buttonComponent__21SiH"}},167:function(e,t,a){},168:function(e,t,a){},21:function(e,t,a){e.exports={container:"TechStacks_container__1TcAj",logoWrapper:"TechStacks_logoWrapper__2tvPj",shake:"TechStacks_shake__hN-ZU",techStacks:"TechStacks_techStacks__1v17_",heading:"TechStacks_heading__3o9GW",borderBottom:"TechStacks_borderBottom__2uD7J"}},211:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(18),o=a.n(s),i=(a(167),a(15)),r=(a(168),a(147)),l=a(29),d=a.n(l),j={dark:{background:"#111825",title:"#CCD6F6",para:"#8993b1",heading:"#CCD6F6",line:"#24243a",imgBackground:"#0C141B",highlightBackground:"#0f1622",sideIcons:"#8892b0",menuBackground:"#093047",card:"#112240",linkHover:"linear-gradient(120deg, #182744, #132c26)"},light:{background:"#FFFFFD",title:"#233742",para:"#233742",heading:"#233742",line:"lightgray",imgBackground:"#e9f3e8",highlightBackground:"#f0f8ef",sideIcons:"#766161",menuBackground:"#aaeff8",card:"#8BD8CE",linkHover:"linear-gradient(135deg, #ccc0f5, #6fd8c1)"}},b=a(1),h=JSON.parse(localStorage.getItem("theme"))||"dark",m=Object(c.createContext)(),g=function(e){var t=e.children,a=n.a.useState(h),s=Object(i.a)(a,2),o=s[0],r=s[1],l=n.a.useState(!0),d=Object(i.a)(l,2),g=d[0],p=d[1];Object(c.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(o))}),[o]);var u={mode:o,newTheme:j[o],handleMode:function(){r("dark"===o?"light":"dark")},open:g,handleMenu:function(){p(!g)}};return Object(b.jsx)(m.Provider,{value:u,children:t})};var p=function(){var e=Object(c.useState)([0,0]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},u=a(137),x=a.n(u),O=function(e){var t=e.text,a=e.handleButton,c=e.padding,s=n.a.useContext(m).newTheme;return Object(b.jsx)("button",{style:{color:"".concat(s.title),background:"".concat(s.linkHover),padding:"".concat(c)},className:x.a.buttonComponent,onClick:function(){return a()},children:Object(b.jsx)("span",{children:t})})},f=a(35),_=a.n(f),v=a(247),k=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),s=a[0],o=a[1],r=n.a.useContext(m).newTheme,l=e.img,d=e.des,j=e.title,h=e.live,g=e.gitHub,u=e.technologies,x=e.demo,f=p(),k=Object(i.a)(f,1)[0],N=function(e){o(!1)};return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"700",className:_.a.card,style:{boxShadow:"3px 3px 5px ".concat(r.line),backgroundColor:"".concat(r.highlightBackground)},children:[Object(b.jsxs)("div",{className:_.a.image,children:[Object(b.jsx)("img",{src:l,alt:"project"}),Object(b.jsx)("div",{className:_.a.colorDiv})]}),Object(b.jsxs)("div",{className:_.a.card__Container,children:[Object(b.jsxs)("div",{className:_.a.titleContainer,style:k<=1e3?{background:"".concat(r.card)}:{background:"none"},children:[Object(b.jsx)("h2",{style:{color:"".concat(r.title)},children:j}),k<=840&&Object(b.jsx)(O,{text:"Read More",handleButton:function(){o(!s)},padding:"10px 20px"}),Object(b.jsx)("p",{style:{color:"".concat(r.para)},children:d}),Object(b.jsx)("div",{style:{borderTop:"1px solid ".concat(r.para),marginBottom:4}}),Object(b.jsx)("div",{children:u.map((function(e,t){return Object(b.jsx)("span",{style:{marginLeft:"20px",color:"".concat(r.title)},children:e},t)}))})]}),Object(b.jsx)(v.a,{"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",open:s,onClose:N,children:Object(b.jsxs)("div",{style:{backgroundColor:"".concat(r.highlightBackground),padding:"20px"},children:[Object(b.jsx)("div",{className:_.a.image,children:Object(b.jsx)("img",{src:l,alt:"project"})}),Object(b.jsx)("h2",{style:{color:"".concat(r.title)},children:j}),Object(b.jsx)("p",{style:{color:"".concat(r.para)},children:d}),Object(b.jsx)("div",{className:_.a.popupTech,children:u.map((function(e,t){return Object(b.jsxs)("div",{style:{marginRight:"20px",color:"".concat(r.title)},children:[e,t!==u.length-1?",":"."]},t)}))}),Object(b.jsx)("div",{style:{backgroundColor:"".concat(r.line),height:"1px"}}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:_.a.dialogElements,children:[Object(b.jsxs)("div",{style:{color:"".concat(r.title)},className:_.a.actionBtns,children:[Object(b.jsx)("a",{href:g,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),h&&Object(b.jsx)("a",{href:h,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})}),x&&Object(b.jsx)("a",{href:h,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-play"})})]}),Object(b.jsx)(O,{text:"close",handleButton:N,padding:"10px 20px"})]})]})}),Object(b.jsxs)("div",{style:{color:"".concat(r.para),background:"".concat(r.linkHover)},className:_.a.description,children:[Object(b.jsx)("a",{href:g,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),h&&Object(b.jsx)("a",{href:h,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})}),x&&Object(b.jsx)("a",{href:x,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-play"})})]})]})]})},N=a(109),y=a.n(N),w=function(){var e=n.a.useContext(m).newTheme;return Object(b.jsx)("div",{className:y.a.container,children:Object(b.jsx)("div",{className:y.a.icons,style:{right:0,color:"".concat(e.sideIcons)},children:Object(b.jsxs)("div",{className:y.a.rightEmail,children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/chinni-jagadeesh-663090228/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-linkedin",children:[Object(b.jsx)("title",{children:"LinkedIn"}),Object(b.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(b.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(b.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/chinnijagadeesh/","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-github",children:[Object(b.jsx)("title",{children:"GitHub"}),Object(b.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/chinnijagadees8/","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-twitter",children:[Object(b.jsx)("title",{children:"Twitter"}),Object(b.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})})]})})})},C=a(21),S=a.n(C),B=function(){var e=Object(c.useContext)(m).newTheme;return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:S.a.heading,children:"Proficiencies"}),Object(b.jsx)("div",{className:S.a.borderBottom}),Object(b.jsxs)("div",{className:S.a.container,children:[Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-html5-plain colored"}),Object(b.jsx)("span",{children:"HTML"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-css3-plain colored"}),Object(b.jsx)("span",{children:"CSS"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-javascript-plain colored"}),Object(b.jsx)("span",{children:"Javascript"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-react-original colored"}),Object(b.jsx)("span",{children:"React"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#7248B6"},className:"devicon-redux-original"}),Object(b.jsx)("span",{children:"Redux"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-react-original colored"}),Object(b.jsx)("span",{children:"React Native"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{class:"devicon-typescript-plain"}),Object(b.jsx)("span",{children:"Typescript"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{class:"devicon-tailwindcss-original-wordmark"}),Object(b.jsx)("span",{children:"Tailwind CSS"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{class:"devicon-materialui-plain"}),Object(b.jsx)("span",{children:"Material UI"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{class:"devicon-chakraUI-plain"}),Object(b.jsx)("span",{children:"Chakra UI"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{class:"devicon-bootstrap-plain"}),Object(b.jsx)("span",{children:"Bootstrap"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#509941"},className:"devicon-nodejs-plain"}),Object(b.jsx)("span",{children:"Node"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-express-original"}),Object(b.jsx)("span",{children:"Express"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-mongodb-plain colored"}),Object(b.jsx)("span",{children:"MongoDB"})]})]})]})},H=a(143),T=a.n(H),I=(a(173),a(60)),M=a.n(I),E=function(){var e=n.a.useContext(m).newTheme,t=p();Object(i.a)(t,1)[0];return Object(b.jsxs)("div",{className:M.a.container,style:{boxShadow:"3px 3px 5px ".concat(e.line)},children:[Object(b.jsx)("div",{className:M.a.first,children:Object(b.jsx)("img",{src:"https://images.squarespace-cdn.com/content/v1/5a20dd866957daa798aba051/1584902291924-DWEX3PFTR6DVP07NGYPR/Untitled%2Bdesign%2B%25283%2529.jpg?format=500w",alt:""})}),Object(b.jsxs)("div",{className:M.a.second,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:M.a.heading,children:"About Me"}),Object(b.jsx)("div",{className:M.a.borderBottom}),Object(b.jsxs)("p",{style:{color:"".concat(e.para)},className:M.a.aboutMe,children:["Hello! My name is ",Object(b.jsx)("b",{children:"Jagadeesh"})," and I enjoy creating things that live on the internet.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})," Fast Forwarding to today, I built a number of web applications and worked on a few mobile applications. Learned a great deal about teamwork, leadership, and communication."]})]})]})},L=[{img:"https://user-images.githubusercontent.com/93369701/184952153-48eb1e80-d46f-458b-8e65-7e4c52d146db.png",title:"Asos.com",des:"Asos.com is an e-commerce website. This website is online shopping platform. We cloned this website same as original website.",demo:"https://stirring-marzipan-5d4585.netlify.app/",live:"",gitHub:"https://github.com/Sagar1079/asos_project",technologies:["HTML","CSS","javaScript","Node"]},{img:"https://user-images.githubusercontent.com/101567617/213965954-89f2a17a-284c-41e5-bf80-0b70b3e3244a.JPG",title:"Reuse Bazaar",des:"Reuse Bazaar is an Indian online marketplace where user can Purchase and Sell their products through online and Also it was classified advertising company.",demo:"https://reusebazzar.vercel.app/",live:"",gitHub:"https://github.com/abdus786salam/kingly-sand-3997",technologies:["HTML","javaScript","React","Chakra UI","Node","Mongo"]},{img:"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file78no17ie9401jq34z294-1640042814-1577888351.jpg?itok=5EeHhp7B ",title:"Rentomojo",des:"Rentomojo is an online rental solution for all the furnishing needs including furniture, furnishings, home appliances, and bikes.",demo:"https://isnt-jagadeeshyadav7551-gmail-com-awesome-28f23.netlify.app/",live:"",gitHub:"https://github.com/abdullahhassan19/Rentomojo--Clone",technologies:["HTML","CSS","javaScript","Bootstrap","React"]},{img:"https://akshayrane848.github.io/image/ever.PNG",title:"Everhour",des:"Everhour is a time management and expense tracking service, which has everything you need to make your work easier and manageable. Budget your projects and keep track of them.",demo:"https://shiny-sopapillas-758418.netlify.app/",live:"",gitHub:"https://github.com/chinnijagadeesh/godly-pleasure-4788",technologies:["React","Redux","HTML","CSS","javaScript","Node"]},{img:"https://i.ibb.co/WWpfVWb/Screenshot-2022-09-22-232722.png",title:"1MG",des:"1mg is a digital consumer healthcare platform that makes healthcare accessible, understandable, and affordable. It allows users to find information about medicines prescribed by doctors and also buy it.",demo:"https://isnt-jagadeeshyadav7551-gmail-com-awesome-5b861.netlify.app/",live:"",gitHub:"https://github.com/chinnijagadeesh/frightening-week-1465/tree/master/1mg",technologies:["HTML","CSS","javaScript","Bootstrap","React"]}],R=a(24),W=a.n(R),F=a(85),D=a.n(F),A=a(146),P=a(248),J=a(246),z=a(119),U=a.n(z);function G(e){var t=e.setIsAuth;Object(c.useRef)();return Object(b.jsx)(D.a,{bottom:!0,children:Object(b.jsxs)("div",{className:W.a.form,children:[Object(b.jsxs)("p",{className:W.a.contactHeading,children:["Contact Me ",Object(b.jsx)("hr",{width:"22%",color:"gray"})]}),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),A.a.sendForm("service_o87nnal","template_ig7lakc",e.target,"v6XbrIZLnDEV-IVZ-").then((function(e){console.log(e.text),U.a.fire({icon:"error",title:"Ooops, something went wrong"})}),(function(e){console.log(e.text),U.a.fire({icon:"success",title:"Message Sent Successfully"})})),e.target.reset()},children:[Object(b.jsx)("input",{label:"Email",className:W.a.feedback_input,name:"email",placeholder:"Email\u2026",required:!0}),Object(b.jsx)("input",{className:W.a.feedback_input,label:"Name",name:"from_name",placeholder:"Name\u2026",required:!0}),Object(b.jsx)("input",{className:W.a.feedback_input,control:J.a,label:"Message",name:"message",placeholder:"Message\u2026",required:!0}),Object(b.jsx)("button",{onClick:function(){return t(!1)},type:"back",children:"Back"}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})]})})}var X=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],o=n.a.useContext(m).newTheme;return Object(b.jsxs)("footer",{className:W.a.footer,id:"contact",children:[Object(b.jsx)("h1",{style:{color:"".concat(o.title)},children:"Get in Touch"}),Object(b.jsx)("div",{className:W.a.borderBottom}),Object(b.jsxs)("div",{className:W.a.container,children:[Object(b.jsxs)("p",{style:{color:"".concat(o.para)},className:W.a.paragraph,children:["Like what you see? ",Object(b.jsx)("span",{children:"follow me"})," to",Object(b.jsx)("span",{children:" discover "}),"more  great designs"]}),Object(b.jsxs)("div",{style:{color:"".concat(o.title)},className:W.a.contactOptions,children:[Object(b.jsx)("a",{href:"tel: 9347993131","aria-label":"Mobile",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-phone-alt"})}),Object(b.jsx)("a",{href:"mailto: jagadeeshyadav7551@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"far fa-envelope"})}),Object(b.jsx)("a",{href:"https://twitter.com/chinnijagadees8/","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("a",{href:"https://github.com/chinnijagadeesh/","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/chinni-jagadeesh-663090228/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})})]}),Object(b.jsxs)("p",{style:{color:"".concat(o.para)},className:W.a.paragraph,children:["Let's ",Object(b.jsx)("span",{children:"Collab"}),"!"]}),Object(b.jsx)(D.a,{bottom:!0,children:a?Object(b.jsx)(G,{setIsAuth:s}):Object(b.jsx)("button",{className:W.a.btn,onClick:function(){return s(!a)},children:"Hire Me "})}),Object(b.jsx)("hr",{color:"grey"}),Object(b.jsxs)("div",{className:W.a.bottom,children:[Object(b.jsxs)("div",{style:{color:"".concat(o.para)},class:"ml-md-3",children:[Object(b.jsx)("i",{class:"fas fa-phone",style:{color:"green"},children:" CALL :"})," 9347993131"]}),Object(b.jsxs)("div",{style:{color:"".concat(o.para)},class:"ml-md-3",children:[Object(b.jsx)("i",{style:{color:"red"},class:"fas fa-envelope",children:" Email :"})," Jagadeeshyadav7551@gmail.com"]})]})]})]})},q=a(145),Y=a.n(q),Z=a(30),Q=a.n(Z),V=function(){var e=Object(c.useContext)(m).newTheme;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:Q.a.heading,children:"Statistics"}),Object(b.jsx)("div",{className:Q.a.borderBottom}),Object(b.jsxs)("div",{className:Q.a.stat,children:[Object(b.jsxs)("div",{className:Q.a.main,children:[Object(b.jsx)("p",{children:"1200+ hrs"}),Object(b.jsx)("p",{children:"Coding"})]}),Object(b.jsxs)("div",{className:Q.a.main,children:[Object(b.jsx)("p",{children:"20+"}),Object(b.jsx)("p",{children:"Mini project"})]}),Object(b.jsxs)("div",{className:Q.a.main,children:[Object(b.jsx)("p",{children:"500+"}),Object(b.jsx)("p",{children:"DSA Question"})]}),Object(b.jsxs)("div",{className:Q.a.main,children:[Object(b.jsx)("p",{children:"100+ hrs"}),Object(b.jsx)("p",{children:"Soft Skills"})]})]}),Object(b.jsx)("h2",{style:{color:"".concat(e.title)},className:Q.a.heading,children:"Github Statistics"}),Object(b.jsx)("div",{className:Q.a.borderBottom}),Object(b.jsx)("div",{className:Q.a.git,children:Object(b.jsx)("img",{src:"https://github-readme-streak-stats.herokuapp.com/?user=chinnijagadeesh",alt:"Chinni Jagadeesh"})}),Object(b.jsx)("h2",{style:{color:"".concat(e.title)},className:Q.a.heading,children:"Github Calender"}),Object(b.jsx)("div",{className:Q.a.borderBottom}),Object(b.jsx)("div",{style:{margin:"auto"},children:Object(b.jsx)(Y.a,{style:{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px",borderRadius:"3px"},username:"chinnijagadeesh",year:(new Date).getFullYear()})})]})},K=function(e){var t=e.scrollRef,a=Object(c.useState)(L.slice(0,4)),s=Object(i.a)(a,2),o=s[0],l=s[1],j=n.a.useContext(m).newTheme,h=Object(c.useState)(0),g=Object(i.a)(h,2),p=g[0],u=g[1],x=Object(c.useState)(0),f=Object(i.a)(x,2),_=f[0],v=f[1];Object(c.useEffect)((function(){T.a.init()}));var N=function(){u(window.pageYOffset)};Object(c.useEffect)((function(){return document.getElementById("Role").innerHTML="<p>".concat(C[C.length-1],"</p>"),window.addEventListener("scroll",N),function(){return window.removeEventListener("scroll",N)}}),[]),Object(c.useEffect)((function(){document.body.style.backgroundColor=j.background}),[j]);var y=0,C=["I am a Designer.","I am a Problem Solver.","I am a Continuos Learner.","I am a Full Stack Developer."];return Object(c.useEffect)((function(){setInterval((function(){y>=C.length&&(y=0),function(e){if(e<C.length){document.getElementById("Role").innerHTML="<p>".concat(C[e],"</p>"),e+=1}}(y++)}),3e3)}),[]),Object(b.jsxs)("div",{ref:t,children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{id:"home",className:d.a.profile,style:{backgroundColor:"".concat(j.imgBackground)},children:[Object(b.jsxs)("div",{"data-aos":"fade-zoom-out",className:d.a.intro,style:{color:"".concat(j.para),transform:"translateX(-".concat(2.5*p,"px)"),opacity:"".concat(p>300?"0":p>160?".5":"1")},children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"Hi, My name is"}),Object(b.jsx)("div",{className:d.a.name,style:{color:"".concat(j.title)},children:"Chinni Jagadeesh."})]}),0!=C.length?Object(b.jsx)("h1",{id:"Role"}):Object(b.jsx)("h1",{children:"I am a Full Stack Developer."}),Object(b.jsx)("div",{className:d.a.btn,children:Object(b.jsx)("a",{href:"resume.pdf",target:"_blank",children:Object(b.jsx)(O,{text:Object(b.jsxs)("span",{className:d.a.resumeBtn,children:[Object(b.jsx)("span",{children:"Resume"})," ",Object(b.jsx)("i",{className:"fas fa-file-download"})]}),handleButton:function(){}})})})]}),Object(b.jsx)("div",{style:{transform:"translateX(".concat(2.5*p,"px)"),opacity:"".concat(p>300?"0":p>160?".5":"1")},className:d.a.profileImage,children:Object(b.jsx)("img",{src:"pic.jpg",alt:"Profile pic"})})]}),Object(b.jsx)("div",{id:"about",style:{background:"".concat(j.highlightBackground)},className:d.a.experience,children:Object(b.jsx)(E,{})}),Object(b.jsx)("div",{id:"techStacks",className:d.a.techStacks,children:Object(b.jsx)(B,{})}),Object(b.jsx)("div",{id:"experience",className:d.a.experience,style:{background:"".concat(j.highlightBackground)},children:Object(b.jsx)("div",{"data-aos":"fade-right","data-aos-offset":"150","data-aos-easing":"ease-in-sine","data-aos-duration":"700",style:{color:"".concat(j.para)},children:Object(b.jsx)(V,{})})}),Object(b.jsxs)("div",{id:"projects",className:d.a.projects,children:[Object(b.jsx)("h1",{style:{color:"".concat(j.title)},className:d.a.heading,children:"Few Things I've Build"}),Object(b.jsx)("div",{className:d.a.borderBottom}),Object(b.jsx)("div",{children:o.map((function(e,t){return Object(b.jsx)(k,Object(r.a)({},e),t)}))}),Object(b.jsx)(O,{text:L.length!==o.length?"Show More":"Show Less",handleButton:function(){L.length===o.length?(l(L.slice(0,4)),window.scrollTo(0,_)):(l(L),v(p))}})]}),Object(b.jsx)("div",{style:{background:"".concat(j.highlightBackground)},children:Object(b.jsx)(X,{})})]})},$=a(39),ee=a.n($),te={bar1:{position:"absolute",width:"15px",transform:"rotate(45deg)"},bar2:{position:"absolute",left:"-2px"},bar3:{position:"absolute",width:"15px",transform:"rotate(-45deg)"}},ae={background:"linear-gradient(40deg, #8983F7, #1c2931 70%)"},ce={transform:"scale(1)"},ne=function(){var e=Object(c.useState)(window.pageYOffset),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(),o=Object(c.useContext)(m),r=o.newTheme,l=o.mode,d=o.handleMode,j=o.open,h=o.handleMenu;window.onscroll=function(){var e=window.pageYOffset;s.current.style.top=a>e?"0":"-80px",n(e)};return Object(b.jsx)("nav",{ref:s,className:ee.a.navContainer,style:{background:"".concat(r.background),boxShadow:"3px 3px 10px ".concat(r.line)},children:Object(b.jsxs)("div",{className:ee.a.navbar,children:[Object(b.jsx)("a",{href:"#home",children:Object(b.jsx)("div",{className:ee.a.logo,children:Object(b.jsx)("img",{src:"./logo1.jpg",alt:"Logo"})})}),Object(b.jsxs)("div",{style:{color:"".concat(r.title)},className:ee.a.links,children:[Object(b.jsx)("a",{href:"#home",children:"Home"}),Object(b.jsx)("a",{href:"#about",children:"About"}),Object(b.jsx)("a",{href:"#experience",children:"Statistics"}),Object(b.jsx)("a",{href:"#projects",children:"Projects"}),Object(b.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(b.jsx)("a",{href:"resume.pdf",target:"_blank",children:Object(b.jsxs)("button",{target:"_blank",className:ee.a.resumeBtn,children:["Resume",Object(b.jsx)("i",{style:{marginLeft:"6px"},className:"fa fa-download"})]})}),Object(b.jsx)("button",{"aria-label":"dark"===l?"Light Mode":"Dark Mode",title:"dark"===l?"Toggle Light Mode":"Toggle Dark Mode",style:{color:"".concat(r.title)},className:ee.a.modeButton,onClick:d,children:Object(b.jsx)("div",{className:ee.a.circle,style:"light"===l?ae:{},children:Object(b.jsx)("div",{style:"light"===l?ce:{},className:ee.a.crescent})})}),Object(b.jsxs)("div",{onClick:h,className:ee.a.bars,children:[Object(b.jsx)("div",{style:j?{background:"".concat(r.title)}:te.bar1}),Object(b.jsx)("div",{style:j?{background:"".concat(r.title)}:te.bar2}),Object(b.jsx)("div",{style:j?{background:"".concat(r.title)}:te.bar3})]})]})})};var se=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],o=n.a.useContext(m),r=o.newTheme,l=o.open,d=o.handleMenu,j=Object(c.useRef)();return Object(c.useEffect)((function(){setTimeout((function(){s(!0)}),2200)}),[]),Object(b.jsx)(n.a.Fragment,{children:a?Object(b.jsxs)("div",{className:"components",children:[Object(b.jsxs)("div",{style:{background:"".concat(r.menuBackground),color:"".concat(r.title),left:"".concat(l?"-100vw":"0")},className:"links",children:[Object(b.jsx)("a",{onClick:d,href:"#home",children:"Home"}),Object(b.jsx)("a",{onClick:d,href:"#about",children:"About"}),Object(b.jsx)("a",{onClick:d,href:"#experience",children:"Statistics"}),Object(b.jsx)("a",{onClick:d,href:"#projects",children:"Projects"}),Object(b.jsx)("a",{onClick:d,href:"#techStacks",children:"Profeciencies"}),Object(b.jsx)("a",{onClick:d,href:"#contact",children:"Contact"})]}),Object(b.jsx)(ne,{}),Object(b.jsx)(K,{scrollRef:j})]}):Object(b.jsx)("div",{style:{background:"".concat(r.background)},className:"logoStart",children:Object(b.jsx)("img",{style:{borderRadius:"15%"},src:"./logo1.jpg",alt:"logo"})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(se,{})})}),document.getElementById("root")),oe()},24:function(e,t,a){e.exports={footer:"Contact_footer__1vbg4",container:"Contact_container__2DmQv",paragraph:"Contact_paragraph__sLRnQ",contactOptions:"Contact_contactOptions__1iyxZ",shake:"Contact_shake__2JDRM",contactHeading:"Contact_contactHeading__5bM6Q",btn:"Contact_btn__-EkNH",form:"Contact_form__2ptcg",feedback_input:"Contact_feedback_input__3XVHK",bottom:"Contact_bottom__2F8T2",borderBottom:"Contact_borderBottom__2J7Xo",copyright:"Contact_copyright__1XrU9"}},29:function(e,t,a){e.exports={intro:"Home_intro__3BjJW",experience:"Home_experience__2xL_f",extraIntro:"Home_extraIntro__1YfEH",name:"Home_name__2Z-Ty",profile:"Home_profile__3UKqu",profileImage:"Home_profileImage__2e_Y0",techStacks:"Home_techStacks__d6Eeq",projects:"Home_projects__1mBjz",heading:"Home_heading__3qNQ8",borderBottom:"Home_borderBottom__fOk9L",line:"Home_line__3HQZA",resumeBtn:"Home_resumeBtn__c_tDU"}},30:function(e,t,a){e.exports={rootCont:"Statistics_rootCont__1XZy2",stat:"Statistics_stat__1ZAIg",main:"Statistics_main__2FI0I",git:"Statistics_git__3TiY0",heading:"Statistics_heading__32Iyx",borderBottom:"Statistics_borderBottom__2Pafx",skillsContFront:"Statistics_skillsContFront__2gXrC"}},35:function(e,t,a){e.exports={card:"Card_card__2y5XO",card__Container:"Card_card__Container__qWVYn",image:"Card_image__3FMk8",colorDiv:"Card_colorDiv__BKEKi",description:"Card_description__351uO",titleContainer:"Card_titleContainer__1uQwx",popupTech:"Card_popupTech__m94Ds",actionBtns:"Card_actionBtns__26jbp",description_container:"Card_description_container__2E1Rm",dialogElements:"Card_dialogElements__351UC"}},39:function(e,t,a){e.exports={navContainer:"Navbar_navContainer__16utE",resumeBtn:"Navbar_resumeBtn__5k393",logo:"Navbar_logo__158ke",navbar:"Navbar_navbar__23IZR",links:"Navbar_links__3IGsm",modeButton:"Navbar_modeButton__1evo6",bars:"Navbar_bars__5UZzw",circle:"Navbar_circle__iDa3N",crescent:"Navbar_crescent__1UmHc"}},60:function(e,t,a){e.exports={container:"About_container__aboEH",first:"About_first__eNE04",second:"About_second__lB_x_",heading:"About_heading__2-1Xf",borderBottom:"About_borderBottom__BIy9I",aboutMe:"About_aboutMe__2yOUB"}}},[[211,1,2]]]);
//# sourceMappingURL=main.f772a8b3.chunk.js.map