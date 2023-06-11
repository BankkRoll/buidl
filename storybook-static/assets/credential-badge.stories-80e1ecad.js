import{j as e}from"./jsx-runtime-3cfe299f.js";import{s as h}from"./truncate-did-7236717b.js";/* empty css               */import{T as j,D as M,a as Z,b as u,c as y,d as I,e as N,f as g}from"./dialog-7620ffa6.js";import{c as b}from"./clsx.m-1229b3e0.js";import{r as c}from"./index-c4905b50.js";import"./utils-815aea15.js";import"./extends-98964cd2.js";import"./index-c4dcdd92.js";import"./_commonjsHelpers-042e6b4d.js";const i=({className:t,credential:s,img:m=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 4h.01"}),e.jsx("path",{d:"M20 12h.01"}),e.jsx("path",{d:"M12 20h.01"}),e.jsx("path",{d:"M4 12h.01"}),e.jsx("path",{d:"M17.657 6.343h.01"}),e.jsx("path",{d:"M17.657 17.657h.01"}),e.jsx("path",{d:"M6.343 17.657h.01"}),e.jsx("path",{d:"M6.343 6.343h.01"})]})})=>{const[n,p]=c.useState();c.useEffect(()=>{s&&(async()=>{const a=await(await fetch(s.credentialSchema.id)).json();p({id:a.$id,title:a.title,description:a.description,required:a.required,properties:a.properties})})()},[s]);const x=b(t,"CredentialBadge","max-w-xs min-h-[340px]","flex flex-col justify-between","bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden","bg-gradient-to-b from-white to-slate-100");return e.jsxs("div",{className:x,children:[e.jsx("div",{className:"grid grid-cols-2 p-4 lg:p-7 flex-1",children:m}),e.jsxs("div",{className:"flex flex-col p-4",children:[e.jsx("span",{className:"text-xs font-light",children:"Credential"}),e.jsx("h3",{className:"text-lg lg:text-4xl font-black",children:n==null?void 0:n.title}),e.jsx("span",{className:"mt-4",children:e.jsx(w,{credentialDetails:n})})]}),e.jsxs("div",{className:"grid grid-cols-2 bg-neutral-100 p-4 border-t-2",children:[e.jsx("div",{className:"col-span-1 flex flex-col gap-y-2",children:e.jsxs("span",{className:"text-xs text-neutral-700 font-black mt-2",children:[e.jsx(j,{type:"DATETIME",date:s.issuanceDate}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-500 font-normal",children:"Issuance"})]})}),e.jsx("div",{className:"col-span-1 flex justify-end items-center text-right",children:e.jsxs("span",{className:"text-xs text-neutral-700 font-black mt-2",children:[h(s.issuer.id),e.jsx("br",{}),e.jsx("span",{className:"text-gray-500 font-normal",children:"Issued By"})]})})]})]})},w=({credentialDetails:t})=>e.jsxs(M,{children:[e.jsx(Z,{children:e.jsx(u,{variant:"secondary",children:"Details"})}),e.jsx(y,{children:e.jsxs(I,{children:[e.jsx(N,{children:"Credential Details"}),e.jsx(g,{className:"sr-only",children:"Technical details about the credential and its schema."}),e.jsxs("div",{className:"mt-12 block",children:[e.jsx("h3",{className:"text-lg lg:text-4xl font-black",children:t==null?void 0:t.title}),e.jsx("p",{className:"text-sm lg:text-base text-neutral-500",children:t==null?void 0:t.description}),e.jsxs("div",{className:"",children:[e.jsx("span",{className:"",children:"Required Field"}),e.jsx("div",{className:"flex flex-row gap-x-2",children:t==null?void 0:t.required.map(s=>e.jsx("span",{className:"text-xs font-bold",children:s}))})]})]})]})})]});try{i.displayName="CredentialBadge",i.__docgenInfo={description:"",displayName:"CredentialBadge",props:{credential:{defaultValue:null,description:"",name:"credential",required:!0,type:{name:'{ "@context": string[]; type: string[]; issuer: { id: string; }; issuanceDate: string; credentialSchema: { type: string; id: string; }; credentialSubject: { id: string; }; expirationDate?: string | undefined; proof?: any; }'}},img:{defaultValue:{value:`(
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="62"
			height="62"
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
	)`},description:"",name:"img",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const R={title:"Credential/CredentialBadge",component:i,tags:["autodocs"],argTypes:{credential:{control:"object"}}},l={args:{credential:{"@context":["https://www.w3.org/2018/credentials/v1"],credentialSchema:{id:"https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",type:"JsonSchemaValidator2018"},credentialSubject:{id:"did:3:kjzl6cwe1jw149ofmn3uw261yxv5eio39po2auvgdjxyidmxvqufpnsxrgmo2oa"},issuanceDate:"2023-03-08T23:50:29.657Z",issuer:{id:"did:3:kjzl6cwe1jw145hfb9pfeoxwdl32e9f0ilwg3y7p8y5jn2ayksyoh3l3eqzg2ex"},type:["VerifiableCredential","GmCredential"],proof:{jwt:"eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0NWhmYjlwZmVveHdkbDMyZTlmMGlsd2czeTdwOHk1am4yYXlrc3lvaDNsM2VxemcyZXg_dmVyc2lvbi1pZD0wIzN1ZTc2c1VEbXlIMk5DcCIsImFsZyI6IkVTMjU2SyJ9.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Rpc2NveHl6L2Rpc2NvLXNjaGVtYXMvbWFpbi9qc29uL0dNQ3JlZGVudGlhbC8xLTAtMC5qc29uIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDlvZm1uM3V3MjYxeXh2NWVpbzM5cG8yYXV2Z2RqeHlpZG14dnF1ZnBuc3hyZ21vMm9hIn0sImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDVoZmI5cGZlb3h3ZGwzMmU5ZjBpbHdnM3k3cDh5NWpuMmF5a3N5b2gzbDNlcXpnMmV4Izc0ZmZlMGQ3LTlhOTItNGE5Ni04MmVlLTA2MDA4MTJkNjlmOSIsImlzc3VhbmNlRGF0ZSI6IjIwMjMtMDMtMDhUMjM6NTA6MjkuNjU3WiIsImlzc3VlciI6eyJpZCI6ImRpZDozOmtqemw2Y3dlMWp3MTQ1aGZiOXBmZW94d2RsMzJlOWYwaWx3ZzN5N3A4eTVqbjJheWtzeW9oM2wzZXF6ZzJleCJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiR21DcmVkZW50aWFsIl19.5-Y9GkZE6M0WXRebtNJlJHyVxTHlK-98UVdiju_Zw1KbCoSkMTN8KTRtmRcdYUnZ3oTV11KINVz8xmH4jepymA"}}}};var r,d,o;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    credential: {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      credentialSchema: {
        id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",
        type: "JsonSchemaValidator2018"
      },
      credentialSubject: {
        id: "did:3:kjzl6cwe1jw149ofmn3uw261yxv5eio39po2auvgdjxyidmxvqufpnsxrgmo2oa"
      },
      issuanceDate: "2023-03-08T23:50:29.657Z",
      issuer: {
        id: "did:3:kjzl6cwe1jw145hfb9pfeoxwdl32e9f0ilwg3y7p8y5jn2ayksyoh3l3eqzg2ex"
      },
      type: ["VerifiableCredential", "GmCredential"],
      proof: {
        jwt: "eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0NWhmYjlwZmVveHdkbDMyZTlmMGlsd2czeTdwOHk1am4yYXlrc3lvaDNsM2VxemcyZXg_dmVyc2lvbi1pZD0wIzN1ZTc2c1VEbXlIMk5DcCIsImFsZyI6IkVTMjU2SyJ9.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Rpc2NveHl6L2Rpc2NvLXNjaGVtYXMvbWFpbi9qc29uL0dNQ3JlZGVudGlhbC8xLTAtMC5qc29uIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDlvZm1uM3V3MjYxeXh2NWVpbzM5cG8yYXV2Z2RqeHlpZG14dnF1ZnBuc3hyZ21vMm9hIn0sImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDVoZmI5cGZlb3h3ZGwzMmU5ZjBpbHdnM3k3cDh5NWpuMmF5a3N5b2gzbDNlcXpnMmV4Izc0ZmZlMGQ3LTlhOTItNGE5Ni04MmVlLTA2MDA4MTJkNjlmOSIsImlzc3VhbmNlRGF0ZSI6IjIwMjMtMDMtMDhUMjM6NTA6MjkuNjU3WiIsImlzc3VlciI6eyJpZCI6ImRpZDozOmtqemw2Y3dlMWp3MTQ1aGZiOXBmZW94d2RsMzJlOWYwaWx3ZzN5N3A4eTVqbjJheWtzeW9oM2wzZXF6ZzJleCJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiR21DcmVkZW50aWFsIl19.5-Y9GkZE6M0WXRebtNJlJHyVxTHlK-98UVdiju_Zw1KbCoSkMTN8KTRtmRcdYUnZ3oTV11KINVz8xmH4jepymA"
      }
    }
  }
}`,...(o=(d=l.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const F=["Primary"];export{l as Primary,F as __namedExportsOrder,R as default};
//# sourceMappingURL=credential-badge.stories-80e1ecad.js.map
