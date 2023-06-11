import type { Meta, StoryObj } from "@storybook/react";

import { ProfileTag } from "../components/profile-tag";
import "../styles.css";

const meta = {
	title: "Profile/ProfileTag",
	component: ProfileTag,
	tags: ["autodocs"],
	argTypes: {
		profile: { control: "object" },
		size: { control: "string", options: ["sm", "base", "lg"] },
		variant: { control: "string", options: ["primary", "secondary"] },
	},
} satisfies Meta<typeof ProfileTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		size: "base",
		variant: "primary",
		profile: {
			address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			name: "Justin Bassey",
			pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
		},
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		profile: {
			address: "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31",
			name: "Justin Bassey",
			pfp: "https://pbs.twimg.com/profile_images/1568015094465892352/M8lpJnuE_400x400.jpg",
		},
	},
};
