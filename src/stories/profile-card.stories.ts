import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "../components/profile-card";
import "../styles.css";

const meta = {
	title: "Profile/ProfileCard",
	component: ProfileCard,
	tags: ["autodocs"],
	argTypes: {
		bgCards: { control: "boolean" },
		profile: { control: "object" },
	},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		profile: {
			address: "0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
			did: "did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
			domain: "mashpit.eth",
			name: "Masha Healy",
			pfp: "https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",
			bio: "Head Ecosystem Partnerships @discoxyz",
		},
	},
};

export const BackgroundCards: Story = {
	args: {
		bgCards: true,
		profile: {
			address: "0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
			did: "did:pkh:0xDdbcf0cbf6a7663a6ffD2972B0A50a6219E5C5ab",
			domain: "mashpit.eth",
			name: "Masha Healy",
			pfp: "https://pbs.twimg.com/profile_images/1537281964071432192/Gfl8txYt_400x400.jpg",
			bio: "Head Ecosystem Partnerships @discoxyz",
		},
	},
};
