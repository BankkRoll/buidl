import { Profile } from "../types/profile";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    profiles: Profile[];
    variant?: "primary" | "secondary";
    size?: "base" | "lg";
};
export declare const ProfileTagGroup: ({ className, profiles, variant, size, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
