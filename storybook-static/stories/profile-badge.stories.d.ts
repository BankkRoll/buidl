/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ className, profile, bgCards, }: import("react").HTMLAttributes<HTMLElement> & {
        profile: {
            address: string;
            did?: string | undefined;
            domain?: string | undefined;
            name?: string | undefined;
            bio?: string | undefined;
            pfp?: string | undefined;
            cover?: string | undefined;
        };
        bgCards?: boolean | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        bgCards: {
            control: string;
        };
        profile: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Normal: Story;
export declare const BackgroundCards: Story;
