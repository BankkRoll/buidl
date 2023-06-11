import { cva } from "class-variance-authority";
import classNames from "clsx";
import * as React from "react";

const tag = cva(
	[
		"flex",
		"justify-center items-center",
		"font-bold",
		"rounded-full",
		"inline-block",
	],
	{
		variants: {
			intent: {
				primary: [
					"bg-black",
					"text-white",
					"border-transparent",
					"hover:bg-neutral-800",
				],
				secondary: [
					"bg-white",
					"border-2",
					"border-neutral-100",
					"text-gray-800",
					"hover:bg-neutral-100 hover:border-neutral-200",
				],
			},
			size: {
				base: ["text-2xs", "py-1", "px-3"],
				lg: ["text-base", "py-2", "px-4"],
			},
		},
		compoundVariants: [
			{
				intent: "primary",
				class: "uppercase",
			},
		],
		defaultVariants: {
			intent: "primary",
			size: "base",
		},
	},
);

type Props = React.HTMLAttributes<HTMLElement> & {
	variant?: "primary" | "secondary";
	size?: "base" | "lg";
};

export const Tag = ({
	children,
	className,
	variant = "primary",
	size = "base",
}: Props) => {
	const classes = classNames(
		className,
		"Tag",
		tag({
			intent: variant,
			size,
		}),
	);
	return <div className={classes}>{children}</div>;
};
