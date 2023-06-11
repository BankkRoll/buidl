"use client";
import { splitAndTruncateDID } from "../lib/truncate-did";
import "../styles.css";
import { VerifableCredential } from "../types/verifiable-credential";
import { Tag } from "./shared/tag";
import { TimeFromUtc } from "./shared/time-from-utc";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	credential: VerifableCredential;
	img?: React.ReactElement;
};

export const CredentialBadge = ({
	className,
	credential,
	img = (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="62"
			height="62"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 4h.01" />
			<path d="M20 12h.01" />
			<path d="M12 20h.01" />
			<path d="M4 12h.01" />
			<path d="M17.657 6.343h.01" />
			<path d="M17.657 17.657h.01" />
			<path d="M6.343 17.657h.01" />
			<path d="M6.343 6.343h.01" />
		</svg>
	),
}: Props) => {
	const [credentialDetails, setCredentialDetails] = React.useState<{
		id: string;
		title: string;
		description: string;
		required: Array<string>;
		properties: any;
	} | null>();
	React.useEffect(() => {
		if (credential) {
			(async () => {
				const schema = await fetch(credential.credentialSchema.id);
				const schemaJson = await schema.json();
				setCredentialDetails({
					id: schemaJson.$id,
					title: schemaJson.title,
					description: schemaJson.description,
					required: schemaJson.required,
					properties: schemaJson.properties,
				});
			})();
		}
	}, [credential]);

	const classes = classNames(
		className,
		"CredentialBadge",
		"max-w-xs min-h-[340px]",
		"flex flex-col justify-between",
		"bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden",
		"bg-gradient-to-b from-white to-slate-100",
	);
	return (
		<div className={classes}>
			<div className="grid grid-cols-2 p-4 lg:p-7 flex-1">{img}</div>
			<div className="flex flex-col p-4">
				<span className="text-xs font-light">Credential</span>
				<h3 className="text-lg lg:text-4xl font-black">
					{credentialDetails?.title}
				</h3>
				<span className="mt-4">
					<DialogManager credentialDetails={credentialDetails} />
				</span>
			</div>
			<div className="grid grid-cols-2 bg-neutral-100 p-4 border-t-2">
				<div className="col-span-1 flex flex-col gap-y-2">
					<span className="text-xs text-neutral-700 font-black mt-2">
						<TimeFromUtc type="DATETIME" date={credential.issuanceDate} />
						<br />
						<span className="text-gray-500 font-normal">Issuance</span>
					</span>
				</div>
				<div className="col-span-1 flex justify-end items-center text-right">
					<span className="text-xs text-neutral-700 font-black mt-2">
						{splitAndTruncateDID(credential.issuer.id)}
						<br />
						<span className="text-gray-500 font-normal">Issued By</span>
					</span>
				</div>
			</div>
		</div>
	);
};

const DialogManager = ({ credentialDetails }: any) => {
	return (
		<Dialog>
			<DialogTrigger>
				<Tag variant="secondary">Details</Tag>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Credential Details</DialogTitle>
					<DialogDescription className="sr-only">
						Technical details about the credential and its schema.
					</DialogDescription>
					<div className="mt-12 block">
						<h3 className="text-lg lg:text-4xl font-black">
							{credentialDetails?.title}
						</h3>
						<p className="text-sm lg:text-base text-neutral-500">
							{credentialDetails?.description}
						</p>
						<div className="">
							<span className="">Required Field</span>
							<div className="flex flex-row gap-x-2">
								{credentialDetails?.required.map((required: string) => {
									return <span className="text-xs font-bold">{required}</span>;
								})}
							</div>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
