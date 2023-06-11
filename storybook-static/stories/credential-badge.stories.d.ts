/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ className, credential, img, }: import("react").HTMLAttributes<HTMLElement> & {
        credential: {
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
        };
        img: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        credential: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
