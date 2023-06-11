import { Profile } from "../types/profile";
import * as React from "react";
type Props = React.HTMLAttributes<HTMLElement> & {
    profile: Profile;
    bgCards?: boolean;
};
export declare const ProfileBadge: ({ className, profile, bgCards, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
