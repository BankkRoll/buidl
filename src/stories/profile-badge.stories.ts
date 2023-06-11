import type { Meta, StoryObj } from "@storybook/react";

import { ProfileBadge } from "../components/profile-badge";
import "../styles.css";

const meta = {
	title: "Profile/ProfileBadge",
	component: ProfileBadge,
	tags: ["autodocs"],
	argTypes: {
		bgCards: { control: "boolean" },
		profile: { control: "object" },
	},
} satisfies Meta<typeof ProfileBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		profile: {
			address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			domain: "0xjbass.eth",
			name: "Justin Bassey",
			pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
			cover:
				"https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",
			bio: "Co-founder & CEO at @district_labs",
		},
	},
};

export const BackgroundCards: Story = {
	args: {
		bgCards: true,
		profile: {
			address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			did: "did:pkh:0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			domain: "0xjbass.eth",
			name: "Justin Bassey",
			pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
			cover:
				"https://pbs.twimg.com/profile_banners/1512070810898366468/1663007942/1500x500",
			bio: "Co-founder & CEO at @district_labs",
		},
	},
};
