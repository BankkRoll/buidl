import type { Meta, StoryObj } from "@storybook/react";

import { CredentialBadge } from "../components/credential-badge";
import "../styles.css";

const meta = {
	title: "Credential/CredentialBadge",
	component: CredentialBadge,
	tags: ["autodocs"],
	argTypes: {
		credential: { control: "object" },
	},
} satisfies Meta<typeof CredentialBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		credential: {
			"@context": ["https://www.w3.org/2018/credentials/v1"],
			credentialSchema: {
				id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",
				type: "JsonSchemaValidator2018",
			},
			credentialSubject: {
				id: "did:3:kjzl6cwe1jw149ofmn3uw261yxv5eio39po2auvgdjxyidmxvqufpnsxrgmo2oa",
			},
			issuanceDate: "2023-03-08T23:50:29.657Z",
			issuer: {
				id: "did:3:kjzl6cwe1jw145hfb9pfeoxwdl32e9f0ilwg3y7p8y5jn2ayksyoh3l3eqzg2ex",
			},
			type: ["VerifiableCredential", "GmCredential"],
			proof: {
				jwt: "eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0NWhmYjlwZmVveHdkbDMyZTlmMGlsd2czeTdwOHk1am4yYXlrc3lvaDNsM2VxemcyZXg_dmVyc2lvbi1pZD0wIzN1ZTc2c1VEbXlIMk5DcCIsImFsZyI6IkVTMjU2SyJ9.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Rpc2NveHl6L2Rpc2NvLXNjaGVtYXMvbWFpbi9qc29uL0dNQ3JlZGVudGlhbC8xLTAtMC5qc29uIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDlvZm1uM3V3MjYxeXh2NWVpbzM5cG8yYXV2Z2RqeHlpZG14dnF1ZnBuc3hyZ21vMm9hIn0sImlkIjoiZGlkOjM6a2p6bDZjd2UxancxNDVoZmI5cGZlb3h3ZGwzMmU5ZjBpbHdnM3k3cDh5NWpuMmF5a3N5b2gzbDNlcXpnMmV4Izc0ZmZlMGQ3LTlhOTItNGE5Ni04MmVlLTA2MDA4MTJkNjlmOSIsImlzc3VhbmNlRGF0ZSI6IjIwMjMtMDMtMDhUMjM6NTA6MjkuNjU3WiIsImlzc3VlciI6eyJpZCI6ImRpZDozOmtqemw2Y3dlMWp3MTQ1aGZiOXBmZW94d2RsMzJlOWYwaWx3ZzN5N3A4eTVqbjJheWtzeW9oM2wzZXF6ZzJleCJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiR21DcmVkZW50aWFsIl19.5-Y9GkZE6M0WXRebtNJlJHyVxTHlK-98UVdiju_Zw1KbCoSkMTN8KTRtmRcdYUnZ3oTV11KINVz8xmH4jepymA",
			},
		},
	},
};
