import { VerifableCredential } from "../types/verifiable-credential";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    credentials: VerifableCredential[];
    img?: React.ReactElement;
};
export declare const CredentialPack: ({ className, credentials, img, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
