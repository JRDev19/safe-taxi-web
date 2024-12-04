import{Q as P,d as $,q as O,o as r,e as a,n as p,a as e,f as c,t as g,j as k,s as D,x as E,i as M,r as y,y as j,u as v,l as B,z as L,b as d,w as i,A as F,c as f,k as C,B as A,h as S,F as w,Z as H,g as h,N as V,O as N}from"./app-P-OTlrBq.js";const Z={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},q={class:"flex items-center justify-between flex-wrap"},I={class:"w-0 flex-1 flex items-center min-w-0"},Q={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},U=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),G=[U],J={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),W=[K],X={class:"ms-3 font-medium text-sm text-white truncate"},Y={class:"shrink-0 sm:ms-3"},ee=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),te=[ee],se={__name:"Banner",setup(s){const o=P(),n=$(!0),l=$("success"),t=$("");return O(async()=>{var m,u;l.value=((m=o.props.jetstream.flash)==null?void 0:m.bannerStyle)||"success",t.value=((u=o.props.jetstream.flash)==null?void 0:u.banner)||"",n.value=!0}),(m,u)=>(r(),a("div",null,[n.value&&t.value?(r(),a("div",{key:0,class:p({"bg-indigo-500":l.value=="success","bg-red-700":l.value=="danger"})},[e("div",Z,[e("div",q,[e("div",I,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":l.value=="success","bg-red-600":l.value=="danger"}])},[l.value=="success"?(r(),a("svg",Q,G)):c("",!0),l.value=="danger"?(r(),a("svg",J,W)):c("",!0)],2),e("p",X,g(t.value),1)]),e("div",Y,[e("button",{type:"button",class:p(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":l.value=="success","hover:bg-red-600 focus:bg-red-600":l.value=="danger"}]),"aria-label":"Dismiss",onClick:u[0]||(u[0]=k(b=>n.value=!1,["prevent"]))},te,2)])])])],2)):c("",!0)]))}},re={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(s){const o=s;let n=$(!1);const l=u=>{n.value&&u.key==="Escape"&&(n.value=!1)};D(()=>document.addEventListener("keydown",l)),E(()=>document.removeEventListener("keydown",l));const t=M(()=>({48:"w-48"})[o.width.toString()]),m=M(()=>o.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":o.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(u,b)=>(r(),a("div",re,[e("div",{onClick:b[0]||(b[0]=T=>j(n)?n.value=!v(n):n=!v(n))},[y(u.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:b[1]||(b[1]=T=>j(n)?n.value=!1:n=!1)},null,512),[[L,v(n)]]),d(F,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[B(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,m.value]]),style:{display:"none"},onClick:b[2]||(b[2]=T=>j(n)?n.value=!1:n=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",s.contentClasses])},[y(u.$slots,"content")],2)],2),[[L,v(n)]])]),_:3})]))}},oe={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ne=["href"],x={__name:"DropdownLink",props:{href:String,as:String},setup(s){return(o,n)=>(r(),a("div",null,[s.as=="button"?(r(),a("button",oe,[y(o.$slots,"default")])):s.as=="a"?(r(),a("a",{key:1,href:s.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[y(o.$slots,"default")],8,ne)):(r(),f(v(C),{key:2,href:s.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:i(()=>[y(o.$slots,"default")]),_:3},8,["href"]))]))}},_={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(s){const o=s,n=M(()=>o.active!=!1?"block w-full ps-3 pe-4 py-2 border-l-4 border-principal-400 text-start text-base font-medium text-principal-700 bg-principal-50 focus:outline-none focus:text-principal-800 focus:bg-principal-100 focus:border-principal-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(r(),a("div",null,[s.as=="button"?(r(),a("button",{key:0,class:p([n.value,"w-full text-start"])},[y(l.$slots,"default")],2)):(r(),f(v(C),{key:1,href:s.href,class:p(n.value)},{default:i(()=>[y(l.$slots,"default")]),_:3},8,["href","class"]))]))}},R={__name:"NavLink",props:{href:String,active:Boolean},setup(s){const o=s,n=M(()=>o.active?"inline-flex items-center px-1 pt-1 border-b-2 border-principal-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-principal-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(r(),f(v(C),{href:s.href,class:p(n.value)},{default:i(()=>[y(l.$slots,"default")]),_:3},8,["href","class"]))}},ae={class:"flex"},le=e("i",{class:"pi pi-angle-down pl-1 font-normal"},null,-1),ie={class:"invisible absolute z-10 flex flex-col bg-slate-50 mt-5 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"},ue={props:{items:Array,target:String,url:String,level:{type:Number,default:1}}},de=Object.assign(ue,{__name:"RecursiveMenu",setup(s){return(o,n)=>{const l=A("RecursiveMenu",!0);return r(!0),a(w,null,S(s.items,(t,m)=>(r(),a("div",{key:t.id,class:"hidden space-x-8 sm:-my-px sm:flex"},[t.children?(r(),f(R,{key:0,class:"group",href:t[s.url]?o.route(t[s.url]):"",active:t[s.url]?o.route().current(t[s.url]):!1},{default:i(()=>[e("div",null,[e("div",ae,[e("p",null,g(t[s.target]),1),le]),e("div",ie,[d(l,{items:t.children,target:s.target,url:s.url,level:s.level+1},null,8,["items","target","url","level"])])])]),_:2},1032,["href","active"])):(r(),f(R,{key:1,href:o.route(t[s.url]),active:o.route().current(t[s.url])},{default:i(()=>[e("p",null,g(t[s.target]),1)]),_:2},1032,["href","active"]))]))),128)}}}),ce={class:"flex items-center"},he=e("i",{class:"pi pi-angle-down pl-1 font-normal"},null,-1),ge={class:"hidden z-10 px-4 group-hover:block"},pe={props:{items:Array,target:String,url:String,level:{type:Number,default:1}}},fe=Object.assign(pe,{__name:"ResponsiveRecursiveMenu",setup(s){return(o,n)=>{const l=A("ResponsiveRecursiveMenu",!0);return r(!0),a(w,null,S(s.items,(t,m)=>(r(),a("div",{key:t.id,class:p([{"pb-2":s.level==1},"pt-2 space-y-1"])},[t.children?(r(),f(_,{key:0,class:"group",href:t[s.url]?o.route(t[s.url]):"",active:t[s.url]?o.route().current(t[s.url]):!1},{default:i(()=>[e("div",ce,[e("p",null,g(t[s.target]),1),he]),e("div",ge,[d(l,{items:t.children,target:s.target,url:s.url,level:s.level+1},null,8,["items","target","url","level"])])]),_:2},1032,["href","active"])):(r(),f(_,{key:1,href:o.route(t[s.url]),active:o.route().current(t[s.url])},{default:i(()=>[e("p",null,g(t[s.target]),1)]),_:2},1032,["href","active"]))],2))),128)}}}),me={class:"min-h-screen bg-gray-100"},ve={class:"bg-white border-b border-gray-100"},ye={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},be={class:"flex justify-between h-16"},_e={class:"flex gap-4"},we={class:"shrink-0 flex items-center"},xe=["src"],ke=e("div",null,null,-1),$e={class:"hidden sm:flex sm:items-center sm:ms-6"},Me={class:"ms-3 relative"},Se={class:"inline-flex rounded-md"},Ce={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},je=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),Te={class:"w-60"},Be=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Le=e("div",{class:"border-t border-gray-200"},null,-1),Ne=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ze=["onSubmit"],Re={class:"flex items-center"},Ae={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Pe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Oe=[Pe],De={class:"ms-3 relative"},Ee={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Fe=["src","alt"],He={key:1,class:"inline-flex rounded-md"},Ve={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ze=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),qe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Administración de cuenta ",-1),Ie=e("div",{class:"border-t border-gray-200"},null,-1),Qe={class:"-me-2 flex items-center sm:hidden"},Ue={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ge={class:"pt-4 pb-1 border-t border-gray-200"},Je={class:"flex items-center px-4"},Ke={key:0,class:"shrink-0 me-3"},We=["src","alt"],Xe={class:"font-medium text-base text-gray-800"},Ye={class:"font-medium text-sm text-gray-500"},et={class:"mt-3 space-y-1"},tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),rt=e("div",{class:"border-t border-gray-200"},null,-1),ot=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),nt=["onSubmit"],at={class:"flex items-center"},lt={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},it=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ut=[it],dt={key:0,class:"bg-white shadow"},ct={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={key:0,class:"max-w-7xl -mb-12 mx-auto sm:px-6 lg:px-8"},gt={class:"bg-blue-100 text-sm overflow-hidden my-4 text-blue-800 sm:rounded-lg px-6 py-4 flex items-center"},pt=e("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),ft=e("span",{class:"font-semibold"},"Información del sistema: ",-1),vt={__name:"AppLayout",props:{title:String},setup(s){const o=$(!1),n=t=>{N.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},l=()=>{N.post(route("logout"))};return(t,m)=>(r(),a("div",null,[d(v(H),{title:s.title},null,8,["title"]),d(se),e("div",me,[e("nav",ve,[e("div",ye,[e("div",be,[e("div",_e,[e("div",we,[d(v(C),{href:t.route("dashboard")},{default:i(()=>[e("img",{class:"block h-9 w-auto",src:"/images/imoveqroo-logo-original.png",alt:"Home"},null,8,xe)]),_:1},8,["href"])]),ke,d(de,{items:t.$page.props.menu.menu,target:"name",url:"destination_url",level:1},null,8,["items"])]),e("div",$e,[e("div",Me,[t.$page.props.jetstream.hasTeamFeatures?(r(),f(z,{key:0,align:"right",width:"60"},{trigger:i(()=>[e("span",Se,[e("button",Ce,[h(g(t.$page.props.auth.user.current_team.name)+" ",1),je])])]),content:i(()=>[e("div",Te,[Be,d(x,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:i(()=>[h(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(r(),f(x,{key:0,href:t.route("teams.create")},{default:i(()=>[h(" Create New Team ")]),_:1},8,["href"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(r(),a(w,{key:1},[Le,Ne,(r(!0),a(w,null,S(t.$page.props.auth.user.all_teams,u=>(r(),a("form",{key:u.id,onSubmit:k(b=>n(u),["prevent"])},[d(x,{as:"button"},{default:i(()=>[e("div",Re,[u.id==t.$page.props.auth.user.current_team_id?(r(),a("svg",Ae,Oe)):c("",!0),e("div",null,g(u.name),1)])]),_:2},1024)],40,ze))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),e("div",De,[d(z,{align:"right",width:"48"},{trigger:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(r(),a("button",Ee,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Fe)])):(r(),a("span",He,[e("button",Ve,[h(g(t.$page.props.auth.user.name)+" ",1),Ze])]))]),content:i(()=>[qe,d(x,{href:t.route("profile.show")},{default:i(()=>[h(" Perfil ")]),_:1},8,["href"]),Ie,e("form",{onSubmit:k(l,["prevent"])},[d(x,{as:"button"},{default:i(()=>[h(" Cerrar sesión ")]),_:1})],32)]),_:1})])]),e("div",Qe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:m[0]||(m[0]=u=>o.value=!o.value)},[(r(),a("svg",Ue,[e("path",{class:p({hidden:o.value,"inline-flex":!o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!o.value,"inline-flex":o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:o.value,hidden:!o.value},"sm:hidden"])},[d(fe,{items:t.$page.props.menu.menu,target:"name",url:"destination_url",level:1},null,8,["items"]),e("div",Ge,[e("div",Je,[t.$page.props.jetstream.managesProfilePhotos?(r(),a("div",Ke,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,We)])):c("",!0),e("div",null,[e("div",Xe,g(t.$page.props.auth.user.name),1),e("div",Ye,g(t.$page.props.auth.user.email),1)])]),e("div",et,[d(_,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:i(()=>[h(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(r(),f(_,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:i(()=>[h(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),e("form",{method:"POST",onSubmit:k(l,["prevent"])},[d(_,{as:"button"},{default:i(()=>[h(" Log Out ")]),_:1})],32),t.$page.props.jetstream.hasTeamFeatures?(r(),a(w,{key:1},[tt,st,d(_,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:i(()=>[h(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(r(),f(_,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:i(()=>[h(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(r(),a(w,{key:1},[rt,ot,(r(!0),a(w,null,S(t.$page.props.auth.user.all_teams,u=>(r(),a("form",{key:u.id,onSubmit:k(b=>n(u),["prevent"])},[d(_,{as:"button"},{default:i(()=>[e("div",at,[u.id==t.$page.props.auth.user.current_team_id?(r(),a("svg",lt,ut)):c("",!0),e("div",null,g(u.name),1)])]),_:2},1024)],40,nt))),128))],64)):c("",!0)],64)):c("",!0)])])],2)]),t.$slots.header?(r(),a("header",dt,[e("div",ct,[y(t.$slots,"header")])])):c("",!0),e("main",null,[t.$page.props.flash.message?(r(),a("div",ht,[e("div",gt,[pt,ft,h(" "+g(t.$page.props.flash.message),1)])])):c("",!0),y(t.$slots,"default")])]),d(v(V))]))}};export{vt as _};
