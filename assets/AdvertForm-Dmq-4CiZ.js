import{f as d,h as t,i as h,k as x,l as j,u as f,j as e,F as y,n as b,o as i,E as s,p as N}from"./index-CG5og3lb.js";const g=d().shape({compatibility:t().required("Це поле обов'язкове"),state:t().required("Це поле обов'язкове"),typeOfLamps:t().required("Це поле обов'язкове"),isOriginal:h().required("Це поле обов'язкове"),partNumber:t().required("Це поле обов'язкове"),material:t().required("Це поле обов'язкове"),typeOfGlass:t().required("Це поле обов'язкове"),price:x().required("Це поле обов'язкове").min(0,"Ціна не може бути від'ємною"),photo:j().min(1,"Має бути хоча б одне фото").test("fileFormat","Файли мають бути у форматі JPEG, WEBP або PNG",n=>n.every(l=>["image/jpeg","image/png","image/webp"].includes(l.type))).test("fileSize","Розмір файлу не має перевищувати 5 МБ",n=>n.every(l=>l.size<=5*1024*1024)),videoUrl:t().url("Невірне посилання на відео"),description:t().required("Це поле обов'язкове")}),v=()=>{const n=f(),l=async a=>{const r=new FormData;r.append("compatibility",a.compatibility),r.append("state",a.state),r.append("typeOfLamps",a.typeOfLamps),r.append("isOriginal",a.isOriginal),r.append("partNumber",a.partNumber),r.append("material",a.material),r.append("typeOfGlass",a.typeOfGlass),r.append("price",a.price),r.append("description",a.description),a.photo.forEach(m=>{r.append("photo",m)}),a.videoUrl&&r.append("videoUrl",a.videoUrl);try{await n(N(r)),alert("Оголошення додано!")}catch{alert("Сталася помилка при додаванні оголошення")}},p=a=>{if(!a.length)return"Має бути хоча б одне фото";for(let r of a){if(!["image/jpeg","image/png","image/webp"].includes(r.type))return"Файли мають бути у форматі JPEG, WEBP або PNG";if(r.size>5*1024*1024)return"Розмір файлу не має перевищувати 5 МБ"}};return e.jsx("section",{className:"form-container",children:e.jsx(y,{initialValues:{compatibility:"",state:"",typeOfLamps:"",isOriginal:!1,partNumber:"",material:"",typeOfGlass:"",price:0,photo:[],videoUrl:"",description:""},validationSchema:g,onSubmit:l,children:({setFieldValue:a,setErrors:r})=>e.jsxs(b,{children:[e.jsx("h2",{className:"form-title",children:"Створити оголошення"}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"compatibility",children:"Сумісність"}),e.jsx(i,{name:"compatibility",type:"text"}),e.jsx(s,{name:"compatibility",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"state",children:"Стан"}),e.jsx(i,{name:"state",type:"text"}),e.jsx(s,{name:"state",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"typeOfLamps",children:"Тип ламп"}),e.jsx(i,{name:"typeOfLamps",type:"text"}),e.jsx(s,{name:"typeOfLamps",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"isOriginal",children:"Оригінальність"}),e.jsx(i,{type:"checkbox",name:"isOriginal"}),e.jsx(s,{name:"isOriginal",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"partNumber",children:"Номер деталі"}),e.jsx(i,{name:"partNumber",type:"text"}),e.jsx(s,{name:"partNumber",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"material",children:"Матеріал"}),e.jsx(i,{name:"material",type:"text"}),e.jsx(s,{name:"material",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"typeOfGlass",children:"Тип скла"}),e.jsx(i,{name:"typeOfGlass",type:"text"}),e.jsx(s,{name:"typeOfGlass",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"price",children:"Ціна"}),e.jsx(i,{name:"price",type:"number"}),e.jsx(s,{name:"price",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"photo",children:"Фото"}),e.jsx("input",{name:"photo",type:"file",multiple:!0,onChange:m=>{const o=Array.from(m.currentTarget.files),c=p(o);c?(a("photo",[]),r({photo:c})):a("photo",o)}}),e.jsx(s,{name:"photo",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"videoUrl",children:"Посилання на відео"}),e.jsx(i,{name:"videoUrl",type:"url"}),e.jsx(s,{name:"videoUrl",component:"div",className:"error-message"})]}),e.jsxs("div",{className:"field-container",children:[e.jsx("label",{htmlFor:"description",children:"Опис"}),e.jsx(i,{name:"description",as:"textarea"}),e.jsx(s,{name:"description",component:"div",className:"error-message"})]}),e.jsx("button",{type:"submit",children:"Додати оголошення"})]})})})};export{v as default};