import{u as E,a as S,Q as x,b as p,c as N,V as O}from"./index.c186235d.js";import{m as P}from"./use-dark.37b72874.js";import{r as s,o as V,G as v,O as T,S as i,N as C,W as d,I,J as f,L as w,K as u,M as Q,Y as k,Z as B}from"./index.76cf54eb.js";const q={class:"q-pa-md"},H={class:"q-gutter-md",style:{"max-width":"600px"}},L=i("br",null,null,-1),Y=i("br",null,null,-1),j={__name:"IndexPage",setup(A){const n=s(""),t=s(""),h=s(""),l=s(!1),r=s(""),c=s(""),R=k();B();const{isOnline:m}=E(),g=S("history");V(()=>{l.value=!0;const a=o=>{r.value=o.coords.latitude,c.value=o.coords.longitude,console.log(r.value),console.log(r.value),l.value=!1},e=o=>{r.value="device_not_supported",c.value="device_not_supported",l.value=!1};navigator.geolocation.getCurrentPosition(a,e)});function _(a){t.value=a}async function y(a){try{await a}catch(e){e.name==="NotAllowedError"?e.value="ERROR: you need to grant camera access permission":e.name==="NotFoundError"?e.value="ERROR: no camera on this device":e.name==="NotSupportedError"?e.value="ERROR: secure context required (HTTPS, localhost)":e.name==="NotReadableError"?e.value="ERROR: is the camera already in use?":e.name==="OverconstrainedError"?e.value="ERROR: installed cameras are not suitable":e.name==="StreamApiNotSupportedError"?e.value="ERROR: Stream API is not supported in this browser":e.name==="InsecureContextError"?e.value="ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":e.value=`ERROR: Camera error (${e.name})`}}function b(){l.value=!0;const a={method:"POST",contentType:"application/json",body:JSON.stringify({consumerphone:n.value,dealercode:t.value,uuid:g.uuid,uuid2:R.params.uuid,latitude:r.value,longitude:c.value})};fetch("https://script.google.com/macros/s/AKfycbyihlJ_YdCjXHcOmLuGXvpInPIPmvd8pvElS2CwP-N8Ybr-1zprMeiVLYW9nshHqm1p/exec",a).then(e=>e.json()).then(e=>{alert(e.message),n.value="",t.value="",l.value=!1})}return(a,e)=>(v(),T("div",q,[i("pre",null,C(h.value),1),d(m)?w("",!0):(v(),I(x,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:f(()=>[Q(" You have lost connection to the internet. This app is offline. ")]),_:1})),i("div",H,[u(p,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),type:"tel",label:"Phone Number"},null,8,["modelValue"]),u(p,{readonly:"",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value=o),type:"text",label:"Please scan your QR"},null,8,["modelValue"])]),L,u(d(O.exports.QrcodeStream),{onDecode:_,onInit:y}),Y,u(N,{position:"bottom-right",offset:[18,18]},{default:f(()=>[u(P,{onClick:b,fab:"",push:"",color:"primary",loading:l.value,disable:n.value.length===0||t.value.length===0||!d(m),label:"Send data"},null,8,["loading","disable"])]),_:1})]))}};export{j as default};
