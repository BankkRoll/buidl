import { Profile } from "../types/profile";
import { ProfileTag } from "./profile-tag";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	profiles: Profile[];
	variant?: "primary" | "secondary";
	size?: "base" | "lg";
};

export const ProfileTagGroup = ({
	className,
	profiles,
	variant,
	size,
}: Props) => {
	const classes = classNames(
		className,
		"ProfileTagGroup",
		"flex items-center gap-x-2",
	);

	if (profiles.length === 0) {
		return null;
	} else {
		return (
			<div className={classes}>
				{profiles?.map((profile) => (
					<ProfileTag profile={profile} variant={variant} size={size} />
				))}
			</div>
		);
	}
};
