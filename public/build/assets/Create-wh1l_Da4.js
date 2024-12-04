import{T as _,c as g,w as n,o as u,a as r,b as l,u as e,e as i,t as d,f as m,j as b}from"./app-P-OTlrBq.js";import{_ as y}from"./MomentumModal-Tx4RVcJ7.js";import{s as f}from"./floatlabel.esm-kOZKFgzR.js";import{s as c}from"./inputtext.esm-lOB12yc5.js";import{s as x}from"./button.esm-npC4AUPQ.js";const h=r("h1",{class:"text-2xl font-bold text-center"},"Crear un nuevo conductor",-1),w={class:"form-group flex flex-col w-full"},k=r("label",{for:"full_name"},"Escribe un nombre",-1),v={key:0,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},j=r("label",{for:"surnames"},"Escribe los apellidos",-1),V={key:1,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},C=r("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help"},"PNG, JPEG o JPG",-1),P={key:2,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},B=["value"],E={class:"flex justify-end"},N={data(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}},props:{errors:Object}},q=Object.assign(N,{__name:"Create",props:{drivers:{type:Object}},setup($){const t=_({full_name:"",surnames:"",originalPhoto:null}),p=o=>{t.originalPhoto=o.target.files[0]};return(o,s)=>(u(),g(y,null,{default:n(()=>[r("form",{onSubmit:s[2]||(s[2]=b(a=>e(t).post(o.route("drivers.store")),["prevent"]))},[h,r("div",w,[l(e(f),{class:"w-full md:w-14rem mt-6 mb-0"},{default:n(()=>[l(e(c),{id:"full_name",modelValue:e(t).full_name,"onUpdate:modelValue":s[0]||(s[0]=a=>e(t).full_name=a),class:"w-full"},null,8,["modelValue"]),k]),_:1}),e(t).errors.full_name?(u(),i("div",v,d(e(t).errors.full_name),1)):m("",!0),l(e(f),{class:"w-full md:w-14rem mt-6 mb-0"},{default:n(()=>[l(e(c),{id:"surnames",modelValue:e(t).surnames,"onUpdate:modelValue":s[1]||(s[1]=a=>e(t).surnames=a),class:"w-full"},null,8,["modelValue"]),j]),_:1}),e(t).errors.surnames?(u(),i("div",V,d(e(t).errors.surnames),1)):m("",!0),l(e(f),{class:"w-full md:w-14rem mt-6 mb-0"},{default:n(()=>[r("input",{accept:".png,.jpg,.jpeg",onChange:p,class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file"},null,32),C]),_:1}),e(t).errors.originalPhoto?(u(),i("div",P,[r("p",null,d(e(t).errors.originalPhoto),1)])):m("",!0)]),r("input",{type:"hidden",name:"_token",value:o.csrf},null,8,B),r("div",E,[l(e(x),{type:"submit",label:"Crear",class:"mt-6 px-6 py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"})])],32)]),_:1}))}});export{q as default};
