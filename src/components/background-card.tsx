import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement>;

export const BackgroundCard = ({ className }: Props) => {
	const classes = classNames(
		className,
		"grid grid-cols-12 gap-y-4 min-h-[100px] rounded-3xl bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden transition-all duration-300",
	);
	return (
		<div className={classes}>
			<div className="col-span-4 bg-gradient-to-br from-neutral-700 to-neutral-900">
				{/*  */}
			</div>
			<div className="col-span-8">{/*  */}</div>
		</div>
	);
};
