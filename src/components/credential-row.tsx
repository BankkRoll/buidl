import { splitAndTruncateDID } from "../lib/truncate-did";
import { VerifableCredential } from "../types/verifiable-credential";
import { TimeFromUtc } from "./shared/time-from-utc";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	credential: VerifableCredential;
};

export const CredentialRow = ({ className, credential }: Props) => {
	const classes = classNames(
		className,
		"CredentialRow",
		"grid grid-cols-12 w-full",
		"bg-white rounded-lg border-2 border-neutral-200 p-4",
	);
	return (
		<div className={classes}>
			<div className="col-span-12 md:col-span-4">
				<span className="text-xs text-neutral-700 font-black mt-2">
					{splitAndTruncateDID(credential.credentialSubject.id)}
					<br />
					<span className="text-gray-500 font-normal">Receiver</span>
				</span>
			</div>
			<div className="col-span-12 md:col-span-3">
				<span className="text-xs text-neutral-700 font-black mt-2">
					<TimeFromUtc type="DATETIME" date={credential.issuanceDate} />
					<br />
					<span className="text-gray-500 font-normal">Issuance Date</span>
				</span>
			</div>
			<div className="col-span-12 md:col-span-5 text-right">
				<span className="text-xs text-neutral-700 font-black mt-2">
					{splitAndTruncateDID(credential.issuer.id)}
					<br />
					<span className="text-gray-500 font-normal">Issued By</span>
				</span>
			</div>
		</div>
	);
};
