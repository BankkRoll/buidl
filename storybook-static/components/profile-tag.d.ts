import { Profile } from "../types/profile";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    variant?: "primary" | "secondary";
    size?: "base" | "lg";
    profile: Profile;
};
export declare const ProfileTag: ({ className, profile, variant, size, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
