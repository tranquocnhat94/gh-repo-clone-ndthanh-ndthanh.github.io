import{v as kt,c as He,g as Ct,u as Lt,a as Tt,Q as St,b as _t}from"./QBtn.de499892.js";import{c as P,h as A,a as et,b as xt,d as Re,e as Et}from"./render.26d58dcd.js";import{c as m,h as L,r as S,i as tt,o as X,n as Y,a as F,d as Ee,g as Q,l as V,w as k,e as Be,f as ue,H as We,j as O,s as $e,k as Bt,P as $t,m as zt,p as te,q as pe,t as Fe,u as be,v as Te,x as ye,y as Pt,z as ot,A as Ot,B as oe,C as Vt,D as Mt,E as nt,_ as it,F as J,G as le,I as B,J as E,K as Qt,L as re,M as Se,N as Dt,O as Ht,Q as Rt,R as Wt,S as Ae,T as Ft}from"./index.84dce0e1.js";var At=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:i.value},A(o.default))}}),Nt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:i.value},A(o.default))}});function It(){const e=S(!tt.value);return e.value===!1&&X(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",Ne=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(clearTimeout(i),i=null,l){const{offsetWidth:c,offsetHeight:n}=l;(c!==t.width||n!==t.height)&&(t={width:c,height:n},o("resize",t))}}const v=Q();if(Object.assign(v.proxy,{trigger:a}),at===!0){let c;return X(()=>{Y(()=>{l=v.proxy.$el.parentNode,l&&(c=new ResizeObserver(a),c.observe(l),s())})}),F(()=>{clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),Ee}else{let w=function(){clearTimeout(i),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",a,V.passive),n=void 0)},b=function(){w(),l&&l.contentDocument&&(n=l.contentDocument.defaultView,n.addEventListener("resize",a,V.passive),s())};const c=It();let n;return X(()=>{Y(()=>{l=v.proxy.$el,l&&b()})}),F(w),()=>{if(c.value===!0)return L("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:b})}}}}),jt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=Be(ue,()=>{console.error("QHeader needs to be child of QLayout")}),a=S(parseInt(e.heightHint,10)),s=S(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const u=a.value-t.scroll.value.position;return u>0?u:0}),n=m(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),w=m(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),b=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const u=t.rows.value.top,C={};return u[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function d(u,C){t.update("header",u,C)}function p(u,C){u.value!==C&&(u.value=C)}function T({height:u}){p(a,u),d("size",u)}function g(u){w.value===!0&&p(s,!0),i("focusin",u)}k(()=>e.modelValue,u=>{d("space",u),p(s,!0),t.animate()}),k(c,u=>{d("offset",u)}),k(()=>e.reveal,u=>{u===!1&&p(s,e.modelValue)}),k(s,u=>{t.animate(),i("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&p(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const x={};return t.instances.header=x,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),F(()=>{t.instances.header===x&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=et(o.default,[]);return e.elevated===!0&&u.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(L(_e,{debounce:0,onResize:T})),L("header",{class:b.value,style:y.value,onFocusin:g},u)}}}),xe=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const i=m(()=>parseInt(e.lines,10)),l=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>L("div",{style:t.value,class:l.value},A(o.default))}});const ze={dark:{type:Boolean,default:null}};function Pe(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}var Xt=P({name:"QList",props:{...ze,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const i=Q(),l=Pe(e,i.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L("div",{class:t.value},A(o.default))}});function Yt(e,o,i){let l;function t(){l!==void 0&&(We.remove(l),l=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>i.value===!0,handler:o},We.add(l)}}}const Ut={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Kt=["before-show","show","before-hide","hide"];function Gt({showing:e,canShow:o,hideOnRouteChange:i,handleShow:l,handleHide:t,processOnMount:a}){const s=Q(),{props:v,emit:c,proxy:n}=s;let w;function b(u){e.value===!0?p(u):y(u)}function y(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),w=u,Y(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&d(u)}function d(u){e.value!==!0&&(e.value=!0,c("before-show",u),l!==void 0?l(u):c("show",u))}function p(u){if(v.disable===!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),w=u,Y(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function g(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?d:T)(w)}k(()=>v.modelValue,g),i!==void 0&&kt(s)===!0&&k(()=>n.$route.fullPath,()=>{i.value===!0&&e.value===!0&&p()}),a===!0&&X(()=>{g(v.modelValue)});const x={show:y,hide:p,toggle:b};return Object.assign(n,x),x}const Jt=[null,document,document.body,document.scrollingElement,document.documentElement];function Zt(e,o){let i=Ct(o);if(i===void 0){if(e==null)return window;i=e.closest(".scroll,.scroll-y,.overflow-auto")}return Jt.includes(i)?window:i}function lt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function rt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ge(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");He(e,{width:"100%",height:"200px"}),He(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const i=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return i===l&&(l=o.clientWidth),o.remove(),ne=i-l,ne}function eo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let K=0,we,qe,G,ke=!1,Ie,je,j;function to(e){oo(e)&&$e(e)}function oo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Bt(e),i=e.shiftKey&&!e.deltaX,l=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||l?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const s=o[a];if(eo(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Xe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){ke!==!0&&(ke=!0,requestAnimationFrame(()=>{ke=!1;const{height:o}=e.target,{clientHeight:i,scrollTop:l}=document.scrollingElement;(G===void 0||o!==window.innerHeight)&&(G=i-o,document.scrollingElement.scrollTop=l),l>G&&(document.scrollingElement.scrollTop-=Math.ceil((l-G)/8))}))}function Ye(e){const o=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);we=rt(window),qe=lt(window),Ie=o.style.left,je=o.style.top,o.style.left=`-${we}px`,o.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,V.passiveCapture),window.visualViewport.addEventListener("scroll",ie,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Xe,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",to,V.notPassive),e==="remove"&&(O.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",ie,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,V.passiveCapture)):window.removeEventListener("scroll",Xe,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ie,o.style.top=je,window.scrollTo(we,qe),G=void 0)}function no(e){let o="add";if(e===!0){if(K++,j!==void 0){clearTimeout(j),j=void 0;return}if(K>1)return}else{if(K===0||(K--,K>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){clearTimeout(j),j=setTimeout(()=>{Ye(o),j=void 0},100);return}}Ye(o)}function io(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,no(o))}}}function ao(){let e;return F(()=>{clearTimeout(e)}),{registerTimeout(o,i){clearTimeout(e),e=setTimeout(o,i)},removeTimeout(){clearTimeout(e)}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},lo=Object.keys(Oe);Oe.all=!0;function Ue(e){const o={};for(const i of lo)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?Oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Ke(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ro(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),$t.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ce(e,o,i){const l=Te(e);let t,a=l.left-o.event.x,s=l.top-o.event.y,v=Math.abs(a),c=Math.abs(s);const n=o.direction;n.horizontal===!0&&n.vertical!==!0?t=a<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=s<0?"up":"down":n.up===!0&&s<0?(t="up",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.down===!0&&s>0?(t="down",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.left===!0&&a<0?(t="left",v<c&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down"))):n.right===!0&&a>0&&(t="right",v<c&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down")));let w=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,w=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=s,c=0,s=0)}return{synthetic:w,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let uo=0;var Le=xt({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&O.has.touch!==!0)return;function l(a,s){i.mouse===!0&&s===!0?$e(a):(i.stop===!0&&be(a),i.prevent===!0&&Fe(a))}const t={uid:"qvtp_"+uo++,handler:o,modifiers:i,direction:Ue(i),noop:Ee,mouseStart(a){Ke(a,t)&&zt(a)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ke(a,t)){const s=a.target;te(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(O.is.firefox===!0&&pe(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const n=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Fe(n),a.cancelBubble===!0&&be(n),Object.assign(n,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:n}}be(a)}const{left:v,top:c}=Te(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=Te(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const n=t.event.mouse===!0,w=()=>{l(a,n),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ro(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{p(),d()},50):p()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:d,synthetic:p}=Ce(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&w(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=p===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){w(),t.event.detected=!0,t.move(a);return}const b=Math.abs(v),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&v<0||t.direction.right===!0&&b>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ye(t,"temp"),O.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=Ce(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,i.mouse===!0&&te(t,"main",[[e,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),O.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Ue(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),O.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,i){return i<=o?o:Math.min(i,Math.max(o,e))}const Ge=150;var so=P({name:"QDrawer",inheritAttrs:!1,props:{...Ut,...ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Kt,"on-layout","mini-state"],setup(e,{slots:o,emit:i,attrs:l}){const t=Q(),{proxy:{$q:a}}=t,s=Pe(e,a),{preventBodyScroll:v}=io(),{registerTimeout:c}=ao(),n=Be(ue,()=>{console.error("QDrawer needs to be child of QLayout")});let w,b,y;const d=S(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),p=m(()=>e.mini===!0&&d.value!==!0),T=m(()=>p.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),x=m(()=>e.persistent!==!0&&(d.value===!0||ut.value===!0));function u(r,h){if(M(),r!==!1&&n.animate(),z(0),d.value===!0){const _=n.instances[Z.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),H(1),n.isContainer.value!==!0&&v(!0)}else H(0),r!==!1&&ve(!1);c(()=>{r!==!1&&ve(!0),h!==!0&&i("show",r)},Ge)}function C(r,h){W(),r!==!1&&n.animate(),H(0),z(N.value*T.value),me(),h!==!0&&c(()=>{i("hide",r)},Ge)}const{show:f,hide:q}=Gt({showing:g,hideOnRouteChange:x,handleShow:u,handleHide:C}),{addToHistory:M,removeFromHistory:W}=Yt(g,q,x),D={belowBreakpoint:d,hide:q},$=m(()=>e.side==="right"),N=m(()=>(a.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),Ve=S(0),I=S(!1),se=S(!1),Me=S(T.value*N.value),Z=m(()=>$.value===!0?"left":"right"),ce=m(()=>g.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),de=m(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf($.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),U=m(()=>e.overlay===!1&&g.value===!0&&d.value===!1),ut=m(()=>e.overlay===!0&&g.value===!0&&d.value===!1),st=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&I.value===!1?" hidden":"")),ct=m(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),Qe=m(()=>$.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),dt=m(()=>$.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),ft=m(()=>{const r={};return n.header.space===!0&&Qe.value===!1&&(de.value===!0?r.top=`${n.header.offset}px`:n.header.space===!0&&(r.top=`${n.header.size}px`)),n.footer.space===!0&&dt.value===!1&&(de.value===!0?r.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(r.bottom=`${n.footer.size}px`)),r}),vt=m(()=>{const r={width:`${T.value}px`,transform:`translateX(${Me.value}px)`};return d.value===!0?r:Object.assign(r,ft.value)}),mt=m(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),ht=m(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(de.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),pt=m(()=>{const r=a.lang.rtl===!0?e.side:Z.value;return[[Le,wt,void 0,{[r]:!0,mouse:!0}]]}),bt=m(()=>{const r=a.lang.rtl===!0?Z.value:e.side;return[[Le,De,void 0,{[r]:!0,mouse:!0}]]}),yt=m(()=>{const r=a.lang.rtl===!0?Z.value:e.side;return[[Le,De,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){qt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}k(d,r=>{r===!0?(w=g.value,g.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),H(0),me()):f(!1))}),k(()=>e.side,(r,h)=>{n.instances[h]===D&&(n.instances[h]=void 0,n[h].space=!1,n[h].offset=0),n.instances[r]=D,n[r].size=T.value,n[r].space=U.value,n[r].offset=ce.value}),k(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),k(()=>e.behavior+e.breakpoint,fe),k(n.isContainer,r=>{g.value===!0&&v(r!==!0),r===!0&&fe()}),k(n.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(ce,r=>{R("offset",r)}),k(U,r=>{i("on-layout",r),R("space",r)}),k($,()=>{z()}),k(T,r=>{z(),he(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{he(r,T.value)}),k(()=>a.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.modelValue===!0&&(gt(),n.animate())}),k(p,r=>{i("mini-state",r)});function z(r){r===void 0?Y(()=>{r=g.value===!0?0:T.value,z(N.value*r)}):(n.isContainer.value===!0&&$.value===!0&&(d.value===!0||Math.abs(r)===T.value)&&(r+=N.value*n.scrollbarWidth.value),Me.value=r)}function H(r){Ve.value=r}function ve(r){const h=r===!0?"remove":n.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function gt(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,b=setTimeout(()=>{se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function wt(r){if(g.value!==!1)return;const h=T.value,_=ae(r.distance.x,0,h);if(r.isFinal===!0){_>=Math.min(75,h)===!0?f():(n.animate(),H(0),z(N.value*h)),I.value=!1;return}z((a.lang.rtl===!0?$.value!==!0:$.value)?Math.max(h-_,0):Math.min(0,_-h)),H(ae(_/h,0,1)),r.isFirst===!0&&(I.value=!0)}function De(r){if(g.value!==!0)return;const h=T.value,_=r.direction===e.side,ee=(a.lang.rtl===!0?_!==!0:_)?ae(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(ee)<Math.min(75,h)===!0?(n.animate(),H(1),z(0)):q(),I.value=!1;return}z(N.value*ee),H(ae(1-ee/h,0,1)),r.isFirst===!0&&(I.value=!0)}function me(){v(!1),ve(!0)}function R(r,h){n.update(e.side,r,h)}function qt(r,h){r.value!==h&&(r.value=h)}function he(r,h){R("size",r===!0?e.miniWidth:h)}return n.instances[e.side]=D,he(e.miniToOverlay,T.value),R("space",U.value),R("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("on-layout",U.value),i("mini-state",p.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?u:C)(!1,!0)};if(n.totalWidth.value!==0){Y(r);return}y=k(n.totalWidth,()=>{y(),y=void 0,g.value===!1&&e.showIfAbove===!0&&d.value===!1?f(!1):r()})}),F(()=>{y!==void 0&&y(),clearTimeout(b),g.value===!0&&me(),n.instances[e.side]===D&&(n.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Pt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),r.push(Re("div",{ref:"backdrop",class:st.value,style:ct.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>yt.value)));const h=p.value===!0&&o.mini!==void 0,_=[L("div",{...l,key:""+h,class:[mt.value,l.class]},h===!0?o.mini():A(o.default))];return e.elevated===!0&&g.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Re("aside",{ref:"content",class:ht.value,style:vt.value},_,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>bt.value)),L("div",{class:"q-drawer-container"},r)}}}),co=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=Q(),l=Be(ue,()=>{console.error("QPageContainer needs to be child of QLayout")});ot(Ot,!0);const t=m(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>L("div",{class:"q-page-container",style:t.value},A(o.default))}});const{passive:Je}=V,fo=["both","horizontal","vertical"];var vo=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>fo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;k(()=>e.scrollTarget,()=>{c(),v()});function s(){l!==null&&l();const b=Math.max(0,lt(t)),y=rt(t),d={top:b-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";i.position={top:b,left:y},i.directionChanged=i.direction!==p,i.delta=d,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),o("scroll",{...i})}function v(){t=Zt(a,e.scrollTarget),t.addEventListener("scroll",n,Je),n(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",n,Je),t=void 0)}function n(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[y,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{d(y),l=null}}}const w=Q();return X(()=>{a=w.proxy.$el.parentNode,v()}),F(()=>{l!==null&&l(),c()}),Object.assign(w.proxy,{trigger:n,getPosition:()=>i}),Ee}}),mo=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=S(null),a=S(l.screen.height),s=S(e.container===!0?0:l.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),n=S(tt.value===!0?0:ge()),w=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=m(()=>n.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),d=m(()=>n.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function p(f){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};v.value=q,e.onScroll!==void 0&&i("scroll",q)}}function T(f){const{height:q,width:M}=f;let W=!1;a.value!==q&&(W=!0,a.value=q,e.onScrollHeight!==void 0&&i("scroll-height",q),x()),s.value!==M&&(W=!0,s.value=M),W===!0&&e.onResize!==void 0&&i("resize",f)}function g({height:f}){c.value!==f&&(c.value=f,x())}function x(){if(e.container===!0){const f=a.value>c.value?ge():0;n.value!==f&&(n.value=f)}}let u;const C={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:n,totalWidth:m(()=>s.value+n.value),rows:m(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:v,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(f,q,M){C[f][q]=M}};if(ot(ue,C),ge()>0){let M=function(){f=null,q.classList.remove("hide-scrollbar")},W=function(){if(f===null){if(q.scrollHeight>l.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(M,300)},D=function($){f!==null&&$==="remove"&&(clearTimeout(f),M()),window[`${$}EventListener`]("resize",W)},f=null;const q=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),Vt(()=>{D("remove")})}return()=>{const f=Et(o.default,[L(vo,{onScroll:p}),L(_e,{onResize:T})]),q=L("div",{class:w.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},f);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(_e,{onResize:g}),L("div",{class:"absolute-full",style:y.value},[L("div",{class:"scroll",style:d.value},[q])])]):q}}}),Ze=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const i=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:i.value},A(o.default))}}),ho=P({name:"QItem",props:{...ze,...Lt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=Pe(e,l),{hasRouterLink:a,hasLink:s,linkProps:v,linkClass:c,linkTag:n,navigateToRouterLink:w}=Tt(),b=S(null),y=S(null),d=m(()=>e.clickable===!0||s.value===!0||e.tag==="label"),p=m(()=>e.disable!==!0&&d.value===!0),T=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=m(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function x(f){p.value===!0&&(y.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===b.value?y.value.focus():document.activeElement===y.value&&b.value.focus()),a.value===!0&&w(f),i("click",f))}function u(f){if(p.value===!0&&Mt(f,13)===!0){$e(f),f.qKeyEvent=!0;const q=new MouseEvent("click",f);q.qKeyEvent=!0,b.value.dispatchEvent(q)}i("keyup",f)}function C(){const f=et(o.default,[]);return p.value===!0&&f.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:y})),f}return()=>{const f={ref:b,class:T.value,style:g.value,onClick:x,onKeyup:u};return p.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,v.value)):d.value===!0&&(f["aria-disabled"]="true"),L(n.value,f,C())}}});const po=nt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function bo(e,o,i,l,t,a){return J(),le(ho,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:B(()=>[e.icon?(J(),le(Ze,{key:0,avatar:""},{default:B(()=>[E(St,{name:e.icon},null,8,["name"])]),_:1})):Qt("",!0),E(Ze,null,{default:B(()=>[E(xe,null,{default:B(()=>[re(Se(e.title),1)]),_:1}),E(xe,{caption:""},{default:B(()=>[re(Se(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var yo=it(po,[["render",bo]]);const go=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],wo=nt({name:"MainLayout",components:{EssentialLink:yo},setup(){const e=S(!1);return{essentialLinks:go,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),qo=re(" My first Add-in "),ko=re(" Essential Links ");function Co(e,o,i,l,t,a){const s=Ae("EssentialLink"),v=Ae("router-view");return J(),le(mo,{view:"lHh Lpr lFf"},{default:B(()=>[E(jt,{elevated:""},{default:B(()=>[E(Nt,null,{default:B(()=>[E(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),E(At,null,{default:B(()=>[qo]),_:1}),Dt("div",null,"Quasar v"+Se(e.$q.version),1)]),_:1})]),_:1}),E(so,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:B(()=>[E(Xt,null,{default:B(()=>[E(xe,{header:""},{default:B(()=>[ko]),_:1}),(J(!0),Ht(Wt,null,Rt(e.essentialLinks,c=>(J(),le(s,Ft({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),E(co,null,{default:B(()=>[E(v)]),_:1})]),_:1})}var xo=it(wo,[["render",Co]]);export{xo as default};
