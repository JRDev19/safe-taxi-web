import{_ as s}from"./AppLayout-shgOLW6t.js";import{_ as c}from"./DataTable-Vkk7Pe6b.js";import{i as d,c as i,w as n,o as p,a as t,b as u}from"./app-P-OTlrBq.js";import"./column.esm-z6iGBS7s.js";import"./button.esm-npC4AUPQ.js";import"./dropdown.esm-ty002poI.js";import"./inputtext.esm-lOB12yc5.js";import"./sweetalert2.all-HgdWRhWq.js";const l={class:"py-12"},m={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},_={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10 flex flex-col"},h=t("h1",{class:"text-2xl uppercase mb-3 font-bold"},"Listado de transportes",-1),C={__name:"Index",props:{transports:{type:Object,required:!0}},setup(o){const r=o,a=d(()=>r.transports.map(e=>({...e,is_actived:e.is_actived==1?"Activo":"Inactivo"})));return(e,x)=>(p(),i(s,{title:"Dashboard - Transports"},{default:n(()=>[t("div",l,[t("div",m,[t("div",_,[h,u(c,{data:a.value,dataSelected:["model","sub_model","car_plate","brand","sub_brand","economic_number","is_actived"],headerSelected:["Modelo","Submodelo","Matrícula","Marca","Submarca","Número económico","Estado"],searchInput:["car_plate"],routeCreate:"transports.create",routeTrash:"transports.trash",routeShow:{route:"transports.show"},routeEdit:{route:"transports.edit"},routeDestroy:{route:"transports.destroy"}},null,8,["data","routeCreate","routeTrash","routeShow","routeEdit","routeDestroy"])])])])]),_:1}))}};export{C as default};
