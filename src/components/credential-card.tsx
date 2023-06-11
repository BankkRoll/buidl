"use client";
import "../styles.css";
import { Button } from "./shared/button";
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
import { VerifableCredential } from "@/types/verifiable-credential";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	credential: VerifableCredential;
};

export const CredentialCard = ({ className, credential }: Props) => {
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
		"CredentialCard",
		"flex flex-col justify-between",
		"bg-white border-2 border-neutral-200 rounded-lg overflow-hidden",
	);
	return (
		<div className={classes}>
			<div className="grid grid-cols-2 p-4">
				<div className="col-span-1">
					<span className="text-xs font-bold">Credential</span>
				</div>
				<div className="col-span-1 flex justify-end items-center">
					<Dialog>
						<DialogTrigger>
							<Tag>Details</Tag>
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
											{credentialDetails?.required.map((required) => {
												return (
													<span className="text-xs font-bold">{required}</span>
												);
											})}
										</div>
									</div>
								</div>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<div className="flex-1 flex flex-col p-4">
				<h3 className="text-lg lg:text-4xl font-black">
					{credentialDetails?.title}
				</h3>
				<p className="text-sm lg:text-base text-neutral-500">
					{credentialDetails?.description}
				</p>
				<span className="text-xs text-neutral-700 font-black mt-2">
					Issued on{" "}
					<TimeFromUtc type="DATETIME" date={credential.issuanceDate} />
				</span>
			</div>
			<div className="grid grid-cols-2 bg-neutral-100 p-4">
				<div className="col-span-1 flex flex-col gap-y-2">
					<span className="block break-all text-xs">
						<span className="font-bold">Recipient</span> <br />{" "}
						{credential.credentialSubject.id}
					</span>
					<span className="block break-all text-xs">
						<span className="font-bold">Issuer</span> <br />{" "}
						{credential.issuer.id}
					</span>
				</div>
				<div className="col-span-1 flex justify-end items-center">
					<Button size="sm">Authenticate</Button>
				</div>
			</div>
		</div>
	);
};
