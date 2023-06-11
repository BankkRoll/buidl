import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    variant?: "primary" | "secondary";
    size?: "base" | "lg";
};
export declare const Tag: ({ children, className, variant, size, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
