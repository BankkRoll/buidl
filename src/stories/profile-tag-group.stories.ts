import type { Meta, StoryObj } from "@storybook/react";

import { ProfileTagGroup } from "../components/profile-tag-group";
import "../styles.css";

const meta = {
	title: "Profile/ProfileTagGroup",
	component: ProfileTagGroup,
	tags: ["autodocs"],
	argTypes: {
		profiles: { control: "object" },
		variant: { control: "string", options: ["primary", "secondary"] },
		size: { control: "string", options: ["base", "lg"] },
	},
	args: {
		size: "base",
	},
} satisfies Meta<typeof ProfileTagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		profiles: [
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				domain: "0xjbass.eth",
				name: "Justin Bassey",
				pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
			},
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				name: "Vitor Marthendal",
				pfp: "https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg",
			},
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				domain: "kames.eth",
				name: "Kames Geraghty",
				pfp: "https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg",
			},
		],
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		profiles: [
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				domain: "0xjbass.eth",
				name: "Justin Bassey",
				pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
			},
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				name: "Vitor Marthendal",
				pfp: "https://pbs.twimg.com/profile_images/1526608940389347328/6h7sTK2B_400x400.jpg",
			},
			{
				address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
				domain: "kames.eth",
				name: "Kames Geraghty",
				pfp: "https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg",
			},
		],
	},
};
