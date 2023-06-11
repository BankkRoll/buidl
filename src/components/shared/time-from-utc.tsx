import * as React from "react";

import { selectDateTimeTypeAndLength } from "../../lib/select-date-time-type-and-length";
import classNames from "clsx";
import { DateTime } from "luxon";

interface TimeFromUtcProps {
	className?: string;
	date: string;
	length?: number;
	type?: "DATETIME" | "DATE" | "TIME";
}

export const TimeFromUtc = ({
	className,
	date,
	type = "DATE",
	length = 1,
}: TimeFromUtcProps) => {
	const [timestamp, setTimestamp] = React.useState<string>("");
	React.useEffect(() => {
		if (date) {
			setTimestamp(
				DateTime.fromISO(date).toLocaleString(
					selectDateTimeTypeAndLength(type, length),
				),
			);
		}
	}, []);
	const containerClassName = classNames(className, "TimeFromUtc");
	return <span className={containerClassName}>{timestamp}</span>;
};
