import{j as e}from"./jsx-runtime-3cfe299f.js";import{s as b}from"./truncate-did-7236717b.js";import{B as i,L as t}from"./background-card-b2daa576.js";/* empty css               */import{c as h}from"./clsx.m-1229b3e0.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";const o=({className:d,profile:a,bgCards:x=!1})=>{const g=h(d,"ProfileCard","max-w-lg min-h-[270px] relative z-10","grid grid-cols-12 gap-y-4","bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden","hover:border-neutral-300");return e.jsxs("div",{className:"relative max-w-lg group",children:[x&&e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"scale-90 opacity-70 absolute left-0 right-0 mx-auto -top-4 z-0 group-hover:-top-5 group-hover:opacity-10 "}),e.jsx(i,{className:"scale-95 opacity-80 absolute left-0 right-0 mx-auto -top-2 z-0 group-hover:-top-3 group-hover:opacity-20"})]}),e.jsxs("div",{className:g,children:[e.jsx("div",{className:"col-span-3 flex flex-col justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-white",children:e.jsx("img",{alt:"Avatar",src:a.pfp,className:"w-full h-full object-cover object-center"})}),e.jsxs("div",{className:"col-span-9 flex-1 flex flex-col p-7 bg-gradient-to-b from-white to-slate-50 border-l-2 border-neutral-3",children:[e.jsxs("div",{className:"flex-1",children:[a.name&&e.jsx("h3",{className:"text-lg lg:text-3xl font-black",children:a.name}),e.jsxs("div",{className:"flex items-center gap-x-2 text-neutral-500 mt-2",children:[e.jsx(t,{icon:"twitter"}),e.jsx(t,{icon:"github"}),e.jsx(t,{icon:"dns"})]})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex items-center gap-x-2 text-neutral-600",children:[a.domain&&e.jsx("span",{className:"text-xs",children:a.domain}),e.jsx("span",{className:"text-neutral-200",children:"|"}),a.did&&e.jsx("span",{className:"text-xs",children:b(a.did)})]}),a.bio&&e.jsx("p",{className:"text-sm font-bold text-neutral-700",children:a.bio}),e.jsx("span",{className:"text-2xs font-normal text-neutral-500",children:"Powered by Disco 🪩"})]})]})]})]})};try{o.displayName="ProfileCard",o.__docgenInfo={description:"",displayName:"ProfileCard",props:{profile:{defaultValue:null,description:"",name:"profile",required:!0,type:{name:"{ address: string; did?: string | undefined; domain?: string | undefined; name?: string | undefined; bio?: string | undefined; pfp?: string | undefined; cover?: string | undefined; }"}},bgCards:{defaultValue:{value:"false"},description:"",name:"bgCards",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Profile/ProfileCard",component:o,tags:["autodocs"],argTypes:{bgCards:{control:"boolean"},profile:{control:"object"}}},s={args:{profile:{address:"0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",did:"did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",domain:"mashpit.eth",name:"Masha Healy",pfp:"https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",bio:"Head Ecosystem Partnerships @discoxyz"}}},r={args:{bgCards:!0,profile:{address:"0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",did:"did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",domain:"mashpit.eth",name:"Masha Healy",pfp:"https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",bio:"Head Ecosystem Partnerships @discoxyz"}}};var n,c,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    profile: {
      address: "0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
      did: "did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
      domain: "mashpit.eth",
      name: "Masha Healy",
      pfp: "https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",
      bio: "Head Ecosystem Partnerships @discoxyz"
    }
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    bgCards: true,
    profile: {
      address: "0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
      did: "did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
      domain: "mashpit.eth",
      name: "Masha Healy",
      pfp: "https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",
      bio: "Head Ecosystem Partnerships @discoxyz"
    }
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const E=["Normal","BackgroundCards"];export{r as BackgroundCards,s as Normal,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=profile-card.stories-55c3b12a.js.map
