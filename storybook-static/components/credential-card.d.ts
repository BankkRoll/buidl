import { VerifableCredential } from "../types/verifiable-credential";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    credential: VerifableCredential;
};
export declare const CredentialCard: ({ className, credential }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
