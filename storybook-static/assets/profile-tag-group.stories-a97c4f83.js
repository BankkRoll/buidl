import{j as i}from"./jsx-runtime-3cfe299f.js";import{P as u}from"./profile-tag-b6157935.js";import{c as x}from"./clsx.m-1229b3e0.js";/* empty css               */import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./utils-815aea15.js";import"./index-c4dcdd92.js";const s=({className:r,profiles:d,variant:f,size:F})=>{const g=x(r,"ProfileTagGroup","flex items-center gap-x-2");return d.length===0?null:i.jsx("div",{className:g,children:d==null?void 0:d.map(l=>i.jsx(u,{profile:l,variant:f,size:F}))})};try{s.displayName="ProfileTagGroup",s.__docgenInfo={description:"",displayName:"ProfileTagGroup",props:{profiles:{defaultValue:null,description:"",name:"profiles",required:!0,type:{name:"{ address: string; did?: string | undefined; domain?: string | undefined; name?: string | undefined; bio?: string | undefined; pfp?: string | undefined; cover?: string | undefined; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'}]}}}}}catch{}const k={title:"Profile/ProfileTagGroup",component:s,tags:["autodocs"],argTypes:{profiles:{control:"object"},variant:{control:"string",options:["primary","secondary"]},size:{control:"string",options:["base","lg"]}},args:{size:"base"}},a={args:{variant:"primary",profiles:[{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"0xjbass.eth",name:"Justin Bassey",pfp:"https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg"},{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",name:"Vitor Marthendal",pfp:"https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg"},{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"kames.eth",name:"Kames Geraghty",pfp:"https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg"}]}},e={args:{variant:"secondary",profiles:[{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"0xjbass.eth",name:"Justin Bassey",pfp:"https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg"},{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",name:"Vitor Marthendal",pfp:"https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg"},{address:"0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",did:"did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",domain:"kames.eth",name:"Kames Geraghty",pfp:"https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg"}]}};var n,p,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    profiles: [{
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "0xjbass.eth",
      name: "Justin Bassey",
      pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg"
    }, {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      name: "Vitor Marthendal",
      pfp: "https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg"
    }, {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "kames.eth",
      name: "Kames Geraghty",
      pfp: "https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg"
    }]
  }
}`,...(t=(p=a.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var o,m,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    profiles: [{
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "0xjbass.eth",
      name: "Justin Bassey",
      pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg"
    }, {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      name: "Vitor Marthendal",
      pfp: "https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg"
    }, {
      address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
      domain: "kames.eth",
      name: "Kames Geraghty",
      pfp: "https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg"
    }]
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["Primary","Secondary"];export{a as Primary,e as Secondary,v as __namedExportsOrder,k as default};
//# sourceMappingURL=profile-tag-group.stories-a97c4f83.js.map
