/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ className, profile, variant, size, }: import("react").HTMLAttributes<HTMLElement> & {
        variant?: "primary" | "secondary" | undefined;
        size?: "base" | "lg" | undefined;
        profile: {
            address: string;
            did?: string | undefined;
            domain?: string | undefined;
            name?: string | undefined;
            bio?: string | undefined;
            pfp?: string | undefined;
            cover?: string | undefined;
        };
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        profile: {
            control: string;
        };
        size: {
            control: string;
            options: string[];
        };
        variant: {
            control: string;
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
