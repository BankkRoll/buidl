import{j as n}from"./jsx-runtime-3cfe299f.js";/* empty css               */import{s as G}from"./truncate-did-7236717b.js";import{T as $e,D as oe,a as ne,b as le,c as ae,d as ce,e as se,f as ie}from"./dialog-7620ffa6.js";import{c as J}from"./clsx.m-1229b3e0.js";import{_ as x}from"./extends-98964cd2.js";import{r}from"./index-c4905b50.js";import{$ as ye,a as V,b as C,c as N,d as y,e as R,f as Ce,g as de}from"./utils-815aea15.js";import"./index-c4dcdd92.js";import"./_commonjsHelpers-042e6b4d.js";const F=({className:e,credential:t})=>{const o=J(e,"CredentialRow","grid grid-cols-12 w-full","bg-white rounded-lg border-2 border-neutral-200 p-4");return n.jsxs("div",{className:o,children:[n.jsx("div",{className:"col-span-12 md:col-span-4",children:n.jsxs("span",{className:"text-xs text-neutral-700 font-black mt-2",children:[G(t.credentialSubject.id),n.jsx("br",{}),n.jsx("span",{className:"text-gray-500 font-normal",children:"Receiver"})]})}),n.jsx("div",{className:"col-span-12 md:col-span-3",children:n.jsxs("span",{className:"text-xs text-neutral-700 font-black mt-2",children:[n.jsx($e,{type:"DATETIME",date:t.issuanceDate}),n.jsx("br",{}),n.jsx("span",{className:"text-gray-500 font-normal",children:"Issuance Date"})]})}),n.jsx("div",{className:"col-span-12 md:col-span-5 text-right",children:n.jsxs("span",{className:"text-xs text-neutral-700 font-black mt-2",children:[G(t.issuer.id),n.jsx("br",{}),n.jsx("span",{className:"text-gray-500 font-normal",children:"Issued By"})]})})]})};try{F.displayName="CredentialRow",F.__docgenInfo={description:"",displayName:"CredentialRow",props:{credential:{defaultValue:null,description:"",name:"credential",required:!0,type:{name:'{ "@context": string[]; type: string[]; issuer: { id: string; }; issuanceDate: string; credentialSchema: { type: string; id: string; }; credentialSubject: { id: string; }; expirationDate?: string | undefined; proof?: any; }'}}}}}catch{}const je=r.createContext(void 0);function Ee(e){const t=r.useContext(je);return e||t||"ltr"}function Ne(e,[t,o]){return Math.min(o,Math.max(t,e))}function Te(e,t){return r.useReducer((o,a)=>{const l=t[o][a];return l??o},e)}const ue="ScrollArea",[he,lt]=ye(ue),[Pe,v]=he(ue),Re=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,type:a="hover",dir:l,scrollHideDelay:c=600,...i}=e,[s,u]=r.useState(null),[m,d]=r.useState(null),[p,h]=r.useState(null),[b,g]=r.useState(null),[T,X]=r.useState(null),[$,_]=r.useState(0),[Y,M]=r.useState(0),[A,P]=r.useState(!1),[I,k]=r.useState(!1),f=N(t,j=>u(j)),w=Ee(l);return r.createElement(Pe,{scope:o,type:a,dir:w,scrollHideDelay:c,scrollArea:s,viewport:m,onViewportChange:d,content:p,onContentChange:h,scrollbarX:b,onScrollbarXChange:g,scrollbarXEnabled:A,onScrollbarXEnabledChange:P,scrollbarY:T,onScrollbarYChange:X,scrollbarYEnabled:I,onScrollbarYEnabledChange:k,onCornerWidthChange:_,onCornerHeightChange:M},r.createElement(R.div,x({dir:w},i,{ref:f,style:{position:"relative",["--radix-scroll-area-corner-width"]:$+"px",["--radix-scroll-area-corner-height"]:Y+"px",...e.style}})))}),_e="ScrollAreaViewport",Me=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,children:a,...l}=e,c=v(_e,o),i=r.useRef(null),s=N(t,i,c.onViewportChange);return r.createElement(r.Fragment,null,r.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),r.createElement(R.div,x({"data-radix-scroll-area-viewport":""},l,{ref:s,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),r.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),S="ScrollAreaScrollbar",me=r.forwardRef((e,t)=>{const{forceMount:o,...a}=e,l=v(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:i}=l,s=e.orientation==="horizontal";return r.useEffect(()=>(s?c(!0):i(!0),()=>{s?c(!1):i(!1)}),[s,c,i]),l.type==="hover"?r.createElement(Ae,x({},a,{ref:t,forceMount:o})):l.type==="scroll"?r.createElement(Ie,x({},a,{ref:t,forceMount:o})):l.type==="auto"?r.createElement(pe,x({},a,{ref:t,forceMount:o})):l.type==="always"?r.createElement(q,x({},a,{ref:t})):null}),Ae=r.forwardRef((e,t)=>{const{forceMount:o,...a}=e,l=v(S,e.__scopeScrollArea),[c,i]=r.useState(!1);return r.useEffect(()=>{const s=l.scrollArea;let u=0;if(s){const m=()=>{window.clearTimeout(u),i(!0)},d=()=>{u=window.setTimeout(()=>i(!1),l.scrollHideDelay)};return s.addEventListener("pointerenter",m),s.addEventListener("pointerleave",d),()=>{window.clearTimeout(u),s.removeEventListener("pointerenter",m),s.removeEventListener("pointerleave",d)}}},[l.scrollArea,l.scrollHideDelay]),r.createElement(V,{present:o||c},r.createElement(pe,x({"data-state":c?"visible":"hidden"},a,{ref:t})))}),Ie=r.forwardRef((e,t)=>{const{forceMount:o,...a}=e,l=v(S,e.__scopeScrollArea),c=e.orientation==="horizontal",i=H(()=>u("SCROLL_END"),100),[s,u]=Te("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return r.useEffect(()=>{if(s==="idle"){const m=window.setTimeout(()=>u("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(m)}},[s,l.scrollHideDelay,u]),r.useEffect(()=>{const m=l.viewport,d=c?"scrollLeft":"scrollTop";if(m){let p=m[d];const h=()=>{const b=m[d];p!==b&&(u("SCROLL"),i()),p=b};return m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)}},[l.viewport,c,u,i]),r.createElement(V,{present:o||s!=="hidden"},r.createElement(q,x({"data-state":s==="hidden"?"hidden":"visible"},a,{ref:t,onPointerEnter:C(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:C(e.onPointerLeave,()=>u("POINTER_LEAVE"))})))}),pe=r.forwardRef((e,t)=>{const o=v(S,e.__scopeScrollArea),{forceMount:a,...l}=e,[c,i]=r.useState(!1),s=e.orientation==="horizontal",u=H(()=>{if(o.viewport){const m=o.viewport.offsetWidth<o.viewport.scrollWidth,d=o.viewport.offsetHeight<o.viewport.scrollHeight;i(s?m:d)}},10);return E(o.viewport,u),E(o.content,u),r.createElement(V,{present:a||c},r.createElement(q,x({"data-state":c?"visible":"hidden"},l,{ref:t})))}),q=r.forwardRef((e,t)=>{const{orientation:o="vertical",...a}=e,l=v(S,e.__scopeScrollArea),c=r.useRef(null),i=r.useRef(0),[s,u]=r.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=ge(s.viewport,s.content),d={...a,sizes:s,onSizesChange:u,hasThumb:m>0&&m<1,onThumbChange:h=>c.current=h,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:h=>i.current=h};function p(h,b){return He(h,i.current,s,b)}return o==="horizontal"?r.createElement(ke,x({},d,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&c.current){const h=l.viewport.scrollLeft,b=Q(h,s,l.dir);c.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:h=>{l.viewport&&(l.viewport.scrollLeft=h)},onDragScroll:h=>{l.viewport&&(l.viewport.scrollLeft=p(h,l.dir))}})):o==="vertical"?r.createElement(We,x({},d,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&c.current){const h=l.viewport.scrollTop,b=Q(h,s);c.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:h=>{l.viewport&&(l.viewport.scrollTop=h)},onDragScroll:h=>{l.viewport&&(l.viewport.scrollTop=p(h))}})):null}),ke=r.forwardRef((e,t)=>{const{sizes:o,onSizesChange:a,...l}=e,c=v(S,e.__scopeScrollArea),[i,s]=r.useState(),u=r.useRef(null),m=N(t,u,c.onScrollbarXChange);return r.useEffect(()=>{u.current&&s(getComputedStyle(u.current))},[u]),r.createElement(fe,x({"data-orientation":"horizontal"},l,{ref:m,sizes:o,style:{bottom:0,left:c.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:c.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,["--radix-scroll-area-thumb-width"]:Z(o)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,p)=>{if(c.viewport){const h=c.viewport.scrollLeft+d.deltaX;e.onWheelScroll(h),we(h,p)&&d.preventDefault()}},onResize:()=>{u.current&&c.viewport&&i&&a({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:z(i.paddingLeft),paddingEnd:z(i.paddingRight)}})}}))}),We=r.forwardRef((e,t)=>{const{sizes:o,onSizesChange:a,...l}=e,c=v(S,e.__scopeScrollArea),[i,s]=r.useState(),u=r.useRef(null),m=N(t,u,c.onScrollbarYChange);return r.useEffect(()=>{u.current&&s(getComputedStyle(u.current))},[u]),r.createElement(fe,x({"data-orientation":"vertical"},l,{ref:m,sizes:o,style:{top:0,right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)",["--radix-scroll-area-thumb-height"]:Z(o)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,p)=>{if(c.viewport){const h=c.viewport.scrollTop+d.deltaY;e.onWheelScroll(h),we(h,p)&&d.preventDefault()}},onResize:()=>{u.current&&c.viewport&&i&&a({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:z(i.paddingTop),paddingEnd:z(i.paddingBottom)}})}}))}),[ze,be]=he(S),fe=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,sizes:a,hasThumb:l,onThumbChange:c,onThumbPointerUp:i,onThumbPointerDown:s,onThumbPositionChange:u,onDragScroll:m,onWheelScroll:d,onResize:p,...h}=e,b=v(S,o),[g,T]=r.useState(null),X=N(t,f=>T(f)),$=r.useRef(null),_=r.useRef(""),Y=b.viewport,M=a.content-a.viewport,A=y(d),P=y(u),I=H(p,10);function k(f){if($.current){const w=f.clientX-$.current.left,j=f.clientY-$.current.top;m({x:w,y:j})}}return r.useEffect(()=>{const f=w=>{const j=w.target;(g==null?void 0:g.contains(j))&&A(w,M)};return document.addEventListener("wheel",f,{passive:!1}),()=>document.removeEventListener("wheel",f,{passive:!1})},[Y,g,M,A]),r.useEffect(P,[a,P]),E(g,I),E(b.content,I),r.createElement(ze,{scope:o,scrollbar:g,hasThumb:l,onThumbChange:y(c),onThumbPointerUp:y(i),onThumbPositionChange:P,onThumbPointerDown:y(s)},r.createElement(R.div,x({},h,{ref:X,style:{position:"absolute",...h.style},onPointerDown:C(e.onPointerDown,f=>{f.button===0&&(f.target.setPointerCapture(f.pointerId),$.current=g.getBoundingClientRect(),_.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",k(f))}),onPointerMove:C(e.onPointerMove,k),onPointerUp:C(e.onPointerUp,f=>{const w=f.target;w.hasPointerCapture(f.pointerId)&&w.releasePointerCapture(f.pointerId),document.body.style.webkitUserSelect=_.current,$.current=null})})))}),U="ScrollAreaThumb",De=r.forwardRef((e,t)=>{const{forceMount:o,...a}=e,l=be(U,e.__scopeScrollArea);return r.createElement(V,{present:o||l.hasThumb},r.createElement(Le,x({ref:t},a)))}),Le=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,style:a,...l}=e,c=v(U,o),i=be(U,o),{onThumbPositionChange:s}=i,u=N(t,p=>i.onThumbChange(p)),m=r.useRef(),d=H(()=>{m.current&&(m.current(),m.current=void 0)},100);return r.useEffect(()=>{const p=c.viewport;if(p){const h=()=>{if(d(),!m.current){const b=Xe(p,s);m.current=b,s()}};return s(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)}},[c.viewport,d,s]),r.createElement(R.div,x({"data-state":i.hasThumb?"visible":"hidden"},l,{ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:C(e.onPointerDownCapture,p=>{const b=p.target.getBoundingClientRect(),g=p.clientX-b.left,T=p.clientY-b.top;i.onThumbPointerDown({x:g,y:T})}),onPointerUp:C(e.onPointerUp,i.onThumbPointerUp)}))}),xe="ScrollAreaCorner",Ve=r.forwardRef((e,t)=>{const o=v(xe,e.__scopeScrollArea),a=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&a?r.createElement(Ze,x({},e,{ref:t})):null}),Ze=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,...a}=e,l=v(xe,o),[c,i]=r.useState(0),[s,u]=r.useState(0),m=!!(c&&s);return E(l.scrollbarX,()=>{var d;const p=((d=l.scrollbarX)===null||d===void 0?void 0:d.offsetHeight)||0;l.onCornerHeightChange(p),u(p)}),E(l.scrollbarY,()=>{var d;const p=((d=l.scrollbarY)===null||d===void 0?void 0:d.offsetWidth)||0;l.onCornerWidthChange(p),i(p)}),m?r.createElement(R.div,x({},a,{ref:t,style:{width:c,height:s,position:"absolute",right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function z(e){return e?parseInt(e,10):0}function ge(e,t){const o=e/t;return isNaN(o)?0:o}function Z(e){const t=ge(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-o)*t;return Math.max(a,18)}function He(e,t,o,a="ltr"){const l=Z(o),c=l/2,i=t||c,s=l-i,u=o.scrollbar.paddingStart+i,m=o.scrollbar.size-o.scrollbar.paddingEnd-s,d=o.content-o.viewport,p=a==="ltr"?[0,d]:[d*-1,0];return ve([u,m],p)(e)}function Q(e,t,o="ltr"){const a=Z(t),l=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,c=t.scrollbar.size-l,i=t.content-t.viewport,s=c-a,u=o==="ltr"?[0,i]:[i*-1,0],m=Ne(e,u);return ve([0,i],[0,s])(m)}function ve(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(o-e[0])}}function we(e,t){return e>0&&e<t}const Xe=(e,t=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},a=0;return function l(){const c={left:e.scrollLeft,top:e.scrollTop},i=o.left!==c.left,s=o.top!==c.top;(i||s)&&t(),o=c,a=window.requestAnimationFrame(l)}(),()=>window.cancelAnimationFrame(a)};function H(e,t){const o=y(e),a=r.useRef(0);return r.useEffect(()=>()=>window.clearTimeout(a.current),[]),r.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(o,t)},[o,t])}function E(e,t){const o=y(t);Ce(()=>{let a=0;if(e){const l=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(o)});return l.observe(e),()=>{window.cancelAnimationFrame(a),l.unobserve(e)}}},[e,o])}const Se=Re,Ye=Me,Oe=Ve,D=r.forwardRef(({className:e,children:t,...o},a)=>n.jsxs(Se,{ref:a,className:de("relative overflow-hidden",e),...o,children:[n.jsx(Ye,{className:"h-full w-full rounded-[inherit]",children:t}),n.jsx(L,{}),n.jsx(Oe,{})]}));D.displayName=Se.displayName;const L=r.forwardRef(({className:e,orientation:t="vertical",...o},a)=>n.jsx(me,{ref:a,orientation:t,className:de("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",e),...o,children:n.jsx(De,{className:"relative flex-1 rounded-full bg-border"})}));L.displayName=me.displayName;try{D.displayName="ScrollArea",D.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{L.displayName="ScrollBar",L.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const B=({className:e,credentials:t,img:o=n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"4"}),n.jsx("path",{d:"M12 4h.01"}),n.jsx("path",{d:"M20 12h.01"}),n.jsx("path",{d:"M12 20h.01"}),n.jsx("path",{d:"M4 12h.01"}),n.jsx("path",{d:"M17.657 6.343h.01"}),n.jsx("path",{d:"M17.657 17.657h.01"}),n.jsx("path",{d:"M6.343 17.657h.01"}),n.jsx("path",{d:"M6.343 6.343h.01"})]})})=>{const[a,l]=r.useState();r.useEffect(()=>{t&&(async()=>{const s=await(await fetch(t[0].credentialSchema.id)).json();l({id:s.$id,title:s.title,description:s.description,required:s.required,properties:s.properties})})()},[t]);const c=J(e,"CredentialPack","max-w-md min-h-[340px] relative z-10","grid grid-cols-12 gap-y-4","bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden","hover:border-neutral-300");return n.jsxs("div",{className:"relative max-w-md group",children:[n.jsx(K,{className:"scale-90 opacity-70 absolute left-0 right-0 mx-auto -top-4 z-0 group-hover:-top-5 group-hover:opacity-10 "}),n.jsx(K,{className:"scale-95 opacity-80 absolute left-0 right-0 mx-auto -top-2 z-0 group-hover:-top-3 group-hover:opacity-20"}),n.jsxs("div",{className:c,children:[n.jsxs("div",{className:"col-span-4 flex flex-col justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-white",children:[n.jsx("span",{className:"font-black text-5xl block",children:t.length}),n.jsx("span",{className:"text-xs block",children:"Credentials"}),n.jsx("span",{className:"mt-5",children:n.jsx(Ue,{credentials:t,credentialDetails:a})})]}),n.jsxs("div",{className:"col-span-8 flex-1 flex flex-col p-7",children:[n.jsxs("div",{className:"flex-1",children:[o,n.jsx("h3",{className:"text-lg lg:text-4xl font-black mt-3",children:a==null?void 0:a.title}),n.jsx("p",{className:"text-sm lg:text-sm text-neutral-500 mt-2",children:a==null?void 0:a.description})]}),n.jsx("div",{className:"",children:n.jsx(Fe,{credentials:t,credentialDetails:a})})]})]})]})},K=({className:e})=>{const t=J(e,"grid grid-cols-12 gap-y-4 min-h-[100px] rounded-3xl bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden transition-all duration-300");return n.jsxs("div",{className:t,children:[n.jsx("div",{className:"col-span-4 bg-gradient-to-br from-neutral-700 to-neutral-900"}),n.jsx("div",{className:"col-span-8"})]})},Fe=({credentialDetails:e})=>n.jsxs(oe,{children:[n.jsx(ne,{children:n.jsx(le,{children:"Details"})}),n.jsxs(ae,{className:"sm:max-w-xl",children:[n.jsxs(ce,{children:[n.jsx(se,{children:"Credential Pack"}),n.jsx(ie,{className:"sr-only",children:"Technical details about the credential and its schema."})]}),n.jsxs("div",{className:"mt-2 block",children:[n.jsx("h3",{className:"text-lg lg:text-4xl font-black",children:e==null?void 0:e.title}),n.jsx("p",{className:"text-xs lg:text-base text-neutral-500",children:e==null?void 0:e.description}),n.jsxs("div",{className:"",children:[n.jsx("span",{className:"",children:"Required Field"}),n.jsx("div",{className:"flex flex-row gap-x-2",children:e==null?void 0:e.required.map(t=>n.jsx("span",{className:"text-xs font-bold",children:t}))})]})]})]})]}),Ue=({credentialDetails:e,credentials:t})=>n.jsxs(oe,{children:[n.jsx(ne,{children:n.jsx(le,{variant:"secondary",children:"View Pack"})}),n.jsxs(ae,{className:"sm:max-w-3xl",children:[n.jsxs(ce,{children:[n.jsx(se,{children:"Credential Pack"}),n.jsx(ie,{className:"sr-only",children:"Technical details about the credential and its schema."})]}),n.jsxs("div",{className:"mt-4 block",children:[n.jsx("h3",{className:"text-lg lg:text-4xl font-black",children:e==null?void 0:e.title}),n.jsx("p",{className:"text-sm lg:text-base text-neutral-500",children:e==null?void 0:e.description}),n.jsx(D,{className:"h-[360px] w-full rounded-md border border-neutral-200 p-4 mt-5",children:n.jsx("div",{className:"flex flex-col gap-y-5",children:t.map(o=>n.jsx(F,{credential:o}))})})]})]})]});try{B.displayName="CredentialPack",B.__docgenInfo={description:"",displayName:"CredentialPack",props:{credentials:{defaultValue:null,description:"",name:"credentials",required:!0,type:{name:'{ "@context": string[]; type: string[]; issuer: { id: string; }; issuanceDate: string; credentialSchema: { type: string; id: string; }; credentialSubject: { id: string; }; expirationDate?: string | undefined; proof?: any; }[]'}},img:{defaultValue:{value:`(
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 4h.01" />
			<path d="M20 12h.01" />
			<path d="M12 20h.01" />
			<path d="M4 12h.01" />
			<path d="M17.657 6.343h.01" />
			<path d="M17.657 17.657h.01" />
			<path d="M6.343 17.657h.01" />
			<path d="M6.343 6.343h.01" />
		</svg>
	)`},description:"",name:"img",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const O={"@context":["https://www.w3.org/2018/credentials/v1"],credentialSchema:{id:"https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",type:"JsonSchemaValidator2018"},credentialSubject:{id:"did:3:kjzl6cwe1jw149ofmn3uw261yxv5eio39po2auvgdjxyidmxvqufpnsxrgmo2oa"},issuanceDate:"2023-03-08T23:50:29.657Z",issuer:{id:"did:3:kjzl6cwe1jw145hfb9pfeoxwdl32e9f0ilwg3y7p8y5jn2ayksyoh3l3eqzg2ex"},type:["VerifiableCredential","GmCredential"],proof:{jwt:"eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0NWhmYjlwZmVveHdkbDMyZTlmMGlsd2czeTdwOHk1am4yYXlrc3lvaDNsM2VxemcyZXg_dmVyc2lvbi1pZD0wIzN1ZTc2c1VEbXlIMk5DcCIsImFsZyI6IkVTMjU2SyJ9.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Rpc2NveHl6L2Rpc2NvLXNjaGVtYXMvbWFpbi9qc29uL0dNQ3JlZGVudGlhbC8xLTAtMC5qc29uIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDlvZm1uM3V3MjYxeXh2NWVpbzM5cG8yYXV2Z2RqeHlpZG14dnF1ZnBuc3hyZ21vMm9hIn0sImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDVoZmI5cGZlb3h3ZGwzMmU5ZjBpbHdnM3k3cDh5NWpuMmF5a3N5b2gzbDNlcXpnMmV4Izc0ZmZlMGQ3LTlhOTItNGE5Ni04MmVlLTA2MDA4MTJkNjlmOSIsImlzc3VhbmNlRGF0ZSI6IjIwMjMtMDMtMDhUMjM6NTA6MjkuNjU3WiIsImlzc3VlciI6eyJpZCI6ImRpZDozOmtqemw2Y3dlMWp3MTQ1aGZiOXBmZW94d2RsMzJlOWYwaWx3ZzN5N3A4eTVqbjJheWtzeW9oM2wzZXF6ZzJleCJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiR21DcmVkZW50aWFsIl19.5-Y9GkZE6M0WXRebtNJlJHyVxTHlK-98UVdiju_Zw1KbCoSkMTN8KTRtmRcdYUnZ3oTV11KINVz8xmH4jepymA"}},at={title:"Credential/CredentialPack",component:B,tags:["autodocs"],argTypes:{credentials:{control:"object"}}},W={args:{credentials:[O,O,O]}};var ee,te,re;W.parameters={...W.parameters,docs:{...(ee=W.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    credentials: [gmCredential, gmCredential, gmCredential]
  }
}`,...(re=(te=W.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ct=["Primary"];export{W as Primary,ct as __namedExportsOrder,at as default};
//# sourceMappingURL=credential-pack.stories-e5e33a8c.js.map