import { VerifableCredential } from "../types/verifiable-credential";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    credential: VerifableCredential;
    img: React.ReactElement;
};
export declare const CredentialBadge: ({ className, credential, img, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
