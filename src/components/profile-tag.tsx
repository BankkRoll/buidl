import { Profile } from "../types/profile";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { cva } from "class-variance-authority";
import classNames from "clsx";
import * as React from "react";
const tag = cva(
	[
		"inline-flex justify-center items-center gap-x-2 cursor-pointer rounded-full",
	],
	{
		variants: {
			intent: {
				primary: [
					"bg-white",
					"border-2",
					"border-neutral-100",
					"text-gray-800",
					"hover:bg-neutral-100 hover:border-neutral-200",
				],
				secondary: [
					"bg-black",
					"text-white",
					"border-transparent",
					"hover:bg-neutral-800",
				],
			},
			size: {
				base: ["text-2xs", "py-1", "pl-1 pr-3"],
				lg: ["text-base", "py-2", "pl-2 pr-3"],
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "base",
		},
	},
);

type Props = React.HTMLAttributes<HTMLElement> & {
	variant?: "primary" | "secondary";
	size?: "base" | "lg";
	profile: Profile;
};

export const ProfileTag = ({
	className,
	profile,
	variant = "primary",
	size = "base",
}: Props) => {
	const classes = classNames(
		className,
		"ProfileTag",
		tag({
			intent: variant,
			size,
		}),
	);
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{" "}
					<span className={classes}>
						<img
							alt="Avatar"
							src={profile.pfp}
							className="w-6 h-6 rounded-full border-white mx-auto"
						/>
						<span className="font-normal">{profile.name}</span>
					</span>
				</TooltipTrigger>
				<TooltipContent>
					<span className="">{profile.address}</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
