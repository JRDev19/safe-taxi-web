import{o as s,e as p,r as q,G as A,d as Y,a as g,c as l,w as u,u as r,b as d,k as b,f as a,j as m,g as G,F as T,h as H,t as x,O as v,Y as L}from"./app-P-OTlrBq.js";import{s as S,a as J}from"./column.esm-z6iGBS7s.js";import{B as D,c as I,s as c}from"./button.esm-npC4AUPQ.js";import{s as K}from"./inputtext.esm-lOB12yc5.js";import{S as E}from"./sweetalert2.all-HgdWRhWq.js";var Q={root:"p-input-icon"},W=D.extend({name:"inputicon",classes:Q}),X={name:"BaseInputIcon",extends:I,style:W,props:{class:null},provide:function(){return{$parentInstance:this}}},R={name:"InputIcon",extends:X,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function Z(e,i,f,$,B,C){return s(),p("span",A({class:C.containerClass},e.ptmi("root")),[q(e.$slots,"default")],16)}R.render=Z;var _={root:function(i){var f=i.props;return["p-icon-field",{"p-icon-field-right":f.iconPosition==="right","p-icon-field-left":f.iconPosition==="left"}]}},ee=D.extend({name:"iconfield",classes:_}),re={name:"BaseIconField",extends:I,props:{iconPosition:{type:String,default:"right"}},style:ee,provide:function(){return{$parentInstance:this}}},F={name:"IconField",extends:re,inheritAttrs:!1};function te(e,i,f,$,B,C){return s(),p("div",A({class:e.cx("root")},e.ptmi("root")),[q(e.$slots,"default")],16)}F.render=te;const oe={class:"relative z-10"},se={class:"absolute right-0 m-7"},ne={key:0},ae={key:1},ie={class:"card"},le={class:"flex justify-content-between gap-3"},pe={__name:"DataTable",props:{data:{type:Object},dataSelected:{type:Array},headerSelected:{type:Array},searchInput:{type:Array},isTrash:{type:Boolean,default:!1},routeCreate:{type:String},routeTrash:{type:String},routeShow:{route:{type:String},default:!1},routeEdit:{route:{type:String},default:!1},routeDestroy:{route:{type:String},default:!1},routeRestore:{route:{type:String},default:!1},routeDrop:{route:{type:String},default:!1},routeRestoreAll:{route:{type:String},default:!1},routeDropAll:{route:{type:String},default:!1},routePrevious:{type:String}},setup(e){const i=e,f=E.mixin({customClass:{confirmButton:"p-button p-component py-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mr-4",cancelButton:"p-button p-component py-1 bg-gray-500 border-gray-500 hover:bg-gray-600 hover:border-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"},buttonsStyling:!1}),$=E.mixin({customClass:{confirmButton:"p-button p-component py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 mr-4",cancelButton:"p-button p-component py-1 bg-gray-500 border-gray-500 hover:bg-gray-600 hover:border-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"},buttonsStyling:!1}),B=n=>{f.fire({title:"¿Estás seguro de que deseas eliminar este registro?",text:"Recuerda que cuentas con un plazo de 30 días para recuperar este registro.",icon:"question",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&v.delete(route(`${i.routeDestroy.route}`,n))})},C=n=>{$.fire({title:"¿Estás seguro de que deseas restaurar este registro?",text:"Recuerda que esta acción conllevará a que el registro sea público.",icon:"question",showCancelButton:!0,confirmButtonText:"Restaurar",cancelButtonText:"Cancelar",confirmButtonColor:"#22C55E"}).then(t=>{t.isConfirmed&&v.patch(route(`${i.routeRestore.route}`,n))})},V=n=>{f.fire({title:"¿Estás seguro de que deseas eliminar para siempre este registro?",text:"Recuerda que no podrás recuperar este registro después de eliminarlo.",icon:"question",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&v.delete(route(`${i.routeDrop.route}`,n))})},N=()=>{$.fire({title:"¿Estás seguro de que deseas restaurar todos los registros?",text:"Recuerda que esta acción conllevará a que todos los registros sean públicos.",icon:"question",showCancelButton:!0,confirmButtonText:"Restaurar",cancelButtonText:"Cancelar",confirmButtonColor:"#22C55E"}).then(n=>{n.isConfirmed&&v.post(route(`${i.routeRestoreAll.route}`))})},M=()=>{f.fire({title:"¿Estás seguro de que deseas eliminar todos los registros?",text:"Recuerda que no podrás recuperar los registros después de eliminarlos.",icon:"question",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed&&v.post(route(`${i.routeDropAll.route}`))})},y=Y(),w=()=>{y.value={global:{value:null,matchMode:L.CONTAINS}}};w();const P=()=>{w()},k=n=>{let t=new Date(n),o=t.getFullYear(),h=(t.getMonth()+1).toString().padStart(2,"0"),O=t.getDate().toString().padStart(2,"0"),j=t.getHours().toString().padStart(2,"0"),z=t.getMinutes().toString().padStart(2,"0"),U=t.getSeconds().toString().padStart(2,"0");return`${O}/${h}/${o} ${j}:${z}:${U}`};return(n,t)=>(s(),p(T,null,[g("div",oe,[g("div",se,[i.isTrash==!1?(s(),p("div",ne,[e.routeCreate?(s(),l(r(b),{key:0,href:n.route(e.routeCreate)},{default:u(()=>[d(r(c),{label:"Agregar",icon:"pi pi-plus",class:"px-3 py-1 mr-2 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"})]),_:1},8,["href"])):a("",!0),e.routeTrash?(s(),l(r(b),{key:1,type:"button",href:n.route(e.routeTrash)},{default:u(()=>[d(r(c),{label:"Eliminados",icon:"pi pi-trash",class:"px-3 py-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600"})]),_:1},8,["href"])):a("",!0)])):a("",!0),i.isTrash==!0?(s(),p("div",ae,[e.routePrevious?(s(),l(r(b),{key:0,href:n.route(e.routePrevious)},{default:u(()=>[d(r(c),{label:"Existentes",icon:"pi pi-check-circle",class:"px-3 py-1 mr-2"})]),_:1},8,["href"])):a("",!0),e.routeRestoreAll?(s(),l(r(c),{key:1,label:"Restaurar todos",icon:"pi pi-refresh",class:"px-3 py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 mr-2 focus:ring-2 focus:ring-offset-2 focus:ring-green-600",onClick:t[0]||(t[0]=m(o=>N(),["prevent"]))})):a("",!0),e.routeDropAll?(s(),l(r(c),{key:2,label:"Eliminar todos",icon:"pi pi-trash",class:"px-3 py-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600",onClick:t[1]||(t[1]=m(o=>M(),["prevent"]))})):a("",!0)])):a("",!0)])]),g("div",ie,[d(r(J),{filters:y.value,"onUpdate:filters":t[4]||(t[4]=o=>y.value=o),value:e.data,paginator:"",rows:5,rowsPerPageOptions:[1,5,10,20,50],tableStyle:"min-width: 50rem",globalFilterFields:e.searchInput},{header:u(()=>[g("div",le,[d(r(c),{type:"button",icon:"pi pi-filter-slash",outlined:"",onClick:t[2]||(t[2]=o=>P())}),d(r(F),{iconPosition:"left"},{default:u(()=>[d(r(R),{class:"pi pi-search"}),d(r(K),{modelValue:y.value.global.value,"onUpdate:modelValue":t[3]||(t[3]=o=>y.value.global.value=o),placeholder:"Buscar"},null,8,["modelValue"])]),_:1})])]),empty:u(()=>[G(" No se encontraron resultados. ")]),default:u(()=>[(s(!0),p(T,null,H(e.dataSelected,(o,h)=>(s(),p("div",null,[d(r(S),{field:o,header:e.headerSelected[h]},null,8,["field","header"])]))),256)),i.isTrash==!1?(s(),l(r(S),{key:0,header:"Creado",field:"created_at"},{body:u(o=>[g("span",null,x(k(o.data.created_at)),1)]),_:1})):a("",!0),i.isTrash==!1?(s(),l(r(S),{key:1,header:"Actualizado",field:"updated_at"},{body:u(o=>[g("span",null,x(k(o.data.updated_at)),1)]),_:1})):a("",!0),i.isTrash==!0?(s(),l(r(S),{key:2,header:"Eliminado",field:"deleted_at"},{body:u(o=>[g("span",null,x(k(o.data.deleted_at)),1)]),_:1})):a("",!0),d(r(S),{header:"Acciones",class:"flex gap-2"},{body:u(o=>[e.routeShow?(s(),l(r(b),{key:0,href:n.route(`${e.routeShow.route}`,{id:o.data.id})},{default:u(()=>[d(r(c),{icon:"pi pi-eye","aria-label":"Ver",class:"p-0"})]),_:2},1032,["href"])):a("",!0),e.routeEdit?(s(),l(r(b),{key:1,href:n.route(`${e.routeEdit.route}`,{id:o.data.id})},{default:u(()=>[d(r(c),{icon:"pi pi-file-edit","aria-label":"Ver",class:"p-0 bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"})]),_:2},1032,["href"])):a("",!0),e.routeDestroy?(s(),l(r(c),{key:2,icon:"pi pi-trash",class:"p-0 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600",onClick:m(h=>B(o.data.id),["prevent"])},null,8,["onClick"])):a("",!0),e.routeRestore?(s(),l(r(c),{key:3,icon:"pi pi-refresh",class:"p-0 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600",onClick:m(h=>C(o.data.id),["prevent"])},null,8,["onClick"])):a("",!0),e.routeDrop?(s(),l(r(c),{key:4,icon:"pi pi-trash",class:"p-0 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600",onClick:m(h=>V(o.data.id),["prevent"])},null,8,["onClick"])):a("",!0)]),_:1})]),_:1},8,["filters","value","globalFilterFields"])])],64))}};export{pe as _};
