import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-styling",
			options: {
				// Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
				// For more details on this addon's options.
				// postCss: true,
			},
		},
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	async viteFinal(config, { configType }) {
		return {
			...config,
			define: {
				"process.env.NODE_DEBUG": false,
			},
			resolve: {
				alias: [
					{
						find: "@",
						replacement: path.resolve(__dirname, "./src"),
					},
					{
						find: "@assets",
						replacement: path.resolve(__dirname, "./src/assets"),
					},
					{
						find: "@components",
						replacement: path.resolve(__dirname, "./src/components"),
					},
				],
			},
		};
	},
};
export default config;
