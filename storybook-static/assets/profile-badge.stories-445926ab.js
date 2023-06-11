import{j as e}from"./jsx-runtime-3cfe299f.js";import{s as g}from"./truncate-did-7236717b.js";import{B as n,L as t}from"./background-card-b2daa576.js";/* empty css               */import{c as b}from"./clsx.m-1229b3e0.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";const d=({className:o,profile:s,bgCards:u=!1})=>{const f=b(o,"ProfileBadge","max-w-lg relative z-10","flex flex-col gap-y-4","bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden","hover:border-neutral-300");return e.jsxs("div",{className:"relative max-w-lg group",children:[u&&e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"scale-90 opacity-70 absolute left-0 right-0 mx-auto -top-4 z-0 group-hover:-top-5 group-hover:opacity-10 "}),e.jsx(n,{className:"scale-95 opacity-80 absolute left-0 right-0 mx-auto -top-2 z-0 group-hover:-top-3 group-hover:opacity-20"})]}),e.jsxs("div",{className:f,children:[e.jsx("div",{className:"h-[100px] flex flex-col justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-white",children:e.jsx("img",{alt:"Cover",src:s.cover,className:"object-cover object-center w-full h-full"})}),e.jsx("div",{className:"flex-1 flex flex-col text-center pb-6 px-4",children:e.jsxs("div",{className:"relative -mt-20",children:[e.jsx("img",{alt:"Avatar",src:s.pfp,className:"w-32 h-32 rounded-full border-2 border-white shadow-md mx-auto"}),s.name&&e.jsx("h3",{className:"text-lg lg:text-3xl font-black mt-3",children:s.name}),e.jsxs("div",{className:"flex items-center justify-center gap-x-2 text-neutral-500 mt-2",children:[e.jsx(t,{icon:"twitter"}),e.jsx(t,{icon:"github"}),e.jsx(t,{icon:"dns"})]}),e.jsxs("div",{className:"mt-4",children:[s.bio&&e.jsx("p",{className:"text-sm font-bold text-neutral-700",children:s.bio}),e.jsxs("div",{className:"flex items-center justify-center gap-x-2 text-neutral-600",children:[s.domain&&e.jsx("span",{className:"text-xs",children:s.domain}),e.jsx("span",{className:"text-neutral-200",children:"|"}),s.did&&e.jsx("span",{className:"text-xs",children:g(s.did)})]})]})]})})]})]})};try{d.displayName="ProfileBadge",d.__docgenInfo={description:"",displayName:"ProfileBadge",props:{profile:{defaultValue:null,description:"",name:"profile",required:!0,type:{name:"{ address: string; did?: string | undefined; domain?: string | undefined; name?: string | undefined; bio?: string | undefined; pfp?: string | undefined; cover?: string | undefined; }"}},bgCards:{defaultValue:{value:"false"},description:"",name:"bgCards",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Profile/ProfileBadge",component:d,tags:["autodocs"],argTypes:{bgCards:{control:"boolean"},profile:{control:"object"}}},a={args:{profile:{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"0xjbass.eth",name:"Justin Bassey",pfp:"https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",cover:"https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",bio:"Co-founder & CEO at @district_labs"}}},r={args:{bgCards:!0,profile:{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"0xjbass.eth",name:"Justin Bassey",pfp:"https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",cover:"https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",bio:"Co-founder & CEO at @district_labs"}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    profile: {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "0xjbass.eth",
      name: "Justin Bassey",
      pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
      cover: "https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",
      bio: "Co-founder & CEO at @district_labs"
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    bgCards: true,
    profile: {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "0xjbass.eth",
      name: "Justin Bassey",
      pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
      cover: "https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",
      bio: "Co-founder & CEO at @district_labs"
    }
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const y=["Normal","BackgroundCards"];export{r as BackgroundCards,a as Normal,y as __namedExportsOrder,N as default};
//# sourceMappingURL=profile-badge.stories-445926ab.js.map
