import{d as m,T as f,c as w,w as e,o as v,g as a,a as l,b as t,u as o,a3 as C,n as g}from"./app-P-OTlrBq.js";import{_ as y}from"./ActionSection-piaV1gYo.js";import{_ as d}from"./DangerButton-7D1dcyEg.js";import{a as h}from"./DialogModal-pYDzIKj3.js";import{_ as x,a as k}from"./TextInput-4FJtghop.js";import{_ as E}from"./SecondaryButton-1I5E8pdN.js";import"./SectionTitle-Lbl3dSC1.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const U=l("div",{class:"max-w-xl text-sm text-gray-600"}," Una vez que tu cuenta sea eliminada, todos sus recursos y datos serán eliminados permanentemente. Antes de eliminar tu cuenta, por favor descarga cualquier dato o información que desees conservar. ",-1),q={class:"mt-5"},V={class:"mt-4"},S={__name:"DeleteUserForm",setup($){const r=m(!1),n=m(null),s=f({password:""}),p=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},c=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},i=()=>{r.value=!1,s.reset()};return(b,u)=>(v(),w(y,null,{title:e(()=>[a(" Eliminar cuenta ")]),description:e(()=>[a(" Eliminar tu cuenta permanentemente. ")]),content:e(()=>[U,l("div",q,[t(d,{onClick:p},{default:e(()=>[a(" Eliminar Cuenta ")]),_:1})]),t(h,{show:r.value,onClose:i},{title:e(()=>[a(" Eliminar Cuenta ")]),content:e(()=>[a(" ¿Estás seguro de que deseas eliminar tu cuenta? Una vez que tu cuenta sea eliminada, todos sus recursos y datos serán eliminados permanentemente. Por favor, ingresa tu contraseña para confirmar que deseas eliminar tu cuenta permanentemente. "),l("div",V,[t(x,{ref_key:"passwordInput",ref:n,modelValue:o(s).password,"onUpdate:modelValue":u[0]||(u[0]=_=>o(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Contraseña",autocomplete:"current-password",onKeyup:C(c,["enter"])},null,8,["modelValue"]),t(k,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(E,{onClick:i},{default:e(()=>[a(" Cancelar ")]),_:1}),t(d,{class:g(["ms-3",{"opacity-25":o(s).processing}]),disabled:o(s).processing,onClick:c},{default:e(()=>[a(" Eliminar Cuenta ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{S as default};
