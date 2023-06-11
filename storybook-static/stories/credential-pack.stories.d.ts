/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ className, credentials, img, }: import("react").HTMLAttributes<HTMLElement> & {
        credentials: {
            "@context": string[];
            type: string[];
            issuer: {
                id: string;
            };
            issuanceDate: string;
            credentialSchema: {
                type: string;
                id: string;
            };
            credentialSubject: {
                id: string;
            };
            expirationDate?: string | undefined;
            proof?: any;
        }[];
        img?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        credentials: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
