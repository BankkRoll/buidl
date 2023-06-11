import { DiscoLinkage } from "../types/disco";
import * as React from "react";
declare const icons: {
    twitter: import("react/jsx-runtime").JSX.Element;
    github: import("react/jsx-runtime").JSX.Element;
    dns: import("react/jsx-runtime").JSX.Element;
};
type Props = React.HTMLAttributes<HTMLElement> & {
    icon: keyof typeof icons;
    linkage?: DiscoLinkage;
};
export declare const Linkage: ({ children, className, icon }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
