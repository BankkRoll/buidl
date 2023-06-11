import { cva } from "class-variance-authority";
import classNames from "clsx";
import * as React from "react";

const button = cva(["font-normal", "rounded-lg"], {
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
				"border-neutral-200",
				"hover:bg-gray-100",
			],
		},
		size: {
			xs: ["text-xs", "py-1", "px-2", "rounded-sm"],
			sm: ["text-sm", "py-2", "px-3", "rounded-sm"],
			base: ["text-base", "py-2", "px-3"],
			lg: ["text-lg", "py-2", "px-4"],
		},
	},
	compoundVariants: [
		{
			intent: "primary",
		},
	],
	defaultVariants: {
		intent: "primary",
		size: "base",
	},
});

type Props = React.ButtonHTMLAttributes<HTMLElement> & {
	variant?: "primary" | "secondary";
	size?: "xs" | "sm" | "base" | "lg";
};

export const Button = ({
	children,
	className,
	variant = "primary",
	size = "base",
}: Props) => {
	const classes = classNames(
		className,
		"Button",
		button({
			intent: variant,
			size,
		}),
	);
	return (
		<button type="button" className={classes}>
			{children}
		</button>
	);
};
