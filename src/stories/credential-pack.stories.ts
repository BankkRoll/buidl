import type { Meta, StoryObj } from "@storybook/react";

import { CredentialPack } from "../components/credential-pack";
import "../styles.css";
import { gmCredential } from "./credentials";

const credentials = [gmCredential];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: "Credential/CredentialPack",
	component: CredentialPack,
	tags: ["autodocs"],
	argTypes: {
		credentials: { control: "object" },
	},
} satisfies Meta<typeof CredentialPack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		credentials: [gmCredential, gmCredential, gmCredential],
	},
};
