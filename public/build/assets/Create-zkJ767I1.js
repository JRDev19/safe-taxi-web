import{T as p,c as _,w as a,o as i,a as l,b as o,u as e,e as n,t as d,f as u,j as x}from"./app-P-OTlrBq.js";import{_ as b}from"./MomentumModal-Tx4RVcJ7.js";import"./dropdown.esm-ty002poI.js";import{s as m}from"./floatlabel.esm-kOZKFgzR.js";import{s as c}from"./inputtext.esm-lOB12yc5.js";import{s as w}from"./button.esm-npC4AUPQ.js";const g=l("h1",{class:"text-2xl font-bold text-center"},"Crear un nuevo contacto de emergencia",-1),h={class:"form-group flex flex-col w-full"},v=l("label",{for:"alias"},"Escribe un alias",-1),y={key:0,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},V={class:"form-group flex flex-col w-full"},k=l("label",{for:"description"},"Escribe una descripción",-1),j={key:0,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},C={class:"form-group flex flex-col w-full"},E=l("label",null,"Escribe un correo electrónico",-1),B={key:0,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},U={class:"form-group flex flex-col w-full"},$=l("label",null,"Escribe un teléfono",-1),N={key:0,class:"text-red-500 w-full flex justify-end mt-1 text-sm"},S=["value"],O={class:"flex justify-end"},q={data(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}},props:{errors:Object}},H=Object.assign(q,{__name:"Create",setup(A){const s=p({alias:"",description:"",email:"",phone:"",is_active:""});return(f,t)=>(i(),_(b,null,{default:a(()=>[l("form",{onSubmit:t[4]||(t[4]=x(r=>e(s).post(f.route("emergency_contacts.store")),["prevent"]))},[g,l("div",h,[o(e(m),{class:"w-full md:w-14rem mt-6 mb-0"},{default:a(()=>[o(e(c),{id:"alias",modelValue:e(s).alias,"onUpdate:modelValue":t[0]||(t[0]=r=>e(s).alias=r),class:"w-full"},null,8,["modelValue"]),v]),_:1}),e(s).errors.alias?(i(),n("div",y,d(e(s).errors.alias),1)):u("",!0),l("div",V,[o(e(m),{class:"w-full md:w-14rem mt-6 mb-0"},{default:a(()=>[o(e(c),{id:"description",modelValue:e(s).description,"onUpdate:modelValue":t[1]||(t[1]=r=>e(s).description=r),class:"w-full"},null,8,["modelValue"]),k]),_:1}),e(s).errors.description?(i(),n("div",j,d(e(s).errors.description),1)):u("",!0)]),l("div",C,[o(e(m),{class:"w-full md:w-14rem mt-6 mb-0"},{default:a(()=>[o(e(c),{id:"email",modelValue:e(s).email,"onUpdate:modelValue":t[2]||(t[2]=r=>e(s).email=r),class:"w-full"},null,8,["modelValue"]),E]),_:1}),e(s).errors.email?(i(),n("div",B,d(e(s).errors.email),1)):u("",!0)]),l("div",U,[o(e(m),{class:"w-full md:w-14rem mt-6 mb-0"},{default:a(()=>[o(e(c),{id:"phone",modelValue:e(s).phone,"onUpdate:modelValue":t[3]||(t[3]=r=>e(s).phone=r),class:"w-full"},null,8,["modelValue"]),$]),_:1}),e(s).errors.phone?(i(),n("div",N,d(e(s).errors.phone),1)):u("",!0)])]),l("input",{type:"hidden",name:"_token",value:f.csrf},null,8,S),l("div",O,[o(e(w),{type:"submit",label:"Crear",class:"mt-6 px-6 py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"})])],32)]),_:1}))}});export{H as default};
