/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ className, profiles, variant, size, }: import("react").HTMLAttributes<HTMLElement> & {
        profiles: {
            address: string;
            did?: string | undefined;
            domain?: string | undefined;
            name?: string | undefined;
            bio?: string | undefined;
            pfp?: string | undefined;
            cover?: string | undefined;
        }[];
        variant?: "primary" | "secondary" | undefined;
        size?: "base" | "lg" | undefined;
    }) => import("react/jsx-runtime").JSX.Element | null;
    tags: string[];
    argTypes: {
        profiles: {
            control: string;
        };
        variant: {
            control: string;
            options: string[];
        };
        size: {
            control: string;
            options: string[];
        };
    };
    args: {
        size: "base";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
