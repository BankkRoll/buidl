"use client";
import "../styles.css";
import { VerifableCredential } from "../types/verifiable-credential";
import { CredentialRow } from "./credential-row";
import { Tag } from "./shared/tag";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	credentials: VerifableCredential[];
	img?: React.ReactElement;
};

export const CredentialPack = ({
	className,
	credentials,
	img = (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
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
	const [credentialDetails, setCredentialDetails] = React.useState<
		| {
				id: string;
				title: string;
				description: string;
				required: Array<string>;
				properties: any;
		  }
		| undefined
	>();
	React.useEffect(() => {
		if (credentials) {
			(async () => {
				const schema = await fetch(credentials[0].credentialSchema.id);
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
	}, [credentials]);

	const classes = classNames(
		className,
		"CredentialPack",
		"max-w-md min-h-[340px] relative z-10",
		"grid grid-cols-12 gap-y-4",
		"bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden",
		"hover:border-neutral-300",
	);
	return (
		<div className="relative max-w-md group">
			<BackgroundCard className="scale-90 opacity-70 absolute left-0 right-0 mx-auto -top-4 z-0 group-hover:-top-5 group-hover:opacity-10 " />
			<BackgroundCard className="scale-95 opacity-80 absolute left-0 right-0 mx-auto -top-2 z-0 group-hover:-top-3 group-hover:opacity-20" />
			<div className={classes}>
				<div className="col-span-4 flex flex-col justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-white">
					<span className="font-black text-5xl block">
						{credentials.length}
					</span>
					<span className="text-xs block">Credentials</span>
					<span className="mt-5">
						<DialogCredentialPack
							credentials={credentials}
							credentialDetails={credentialDetails}
						/>
					</span>
				</div>
				<div className="col-span-8 flex-1 flex flex-col p-7">
					<div className="flex-1">
						{img}
						<h3 className="text-lg lg:text-4xl font-black mt-3">
							{credentialDetails?.title}
						</h3>
						<p className="text-sm lg:text-sm text-neutral-500 mt-2">
							{credentialDetails?.description}
						</p>
					</div>
					<div className="">
						<DialogCredentialDetails
							credentials={credentials}
							credentialDetails={credentialDetails}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const BackgroundCard = ({ className }: any) => {
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

const DialogCredentialDetails = ({
	credentialDetails,
}: {
	credentials: VerifableCredential[];
	credentialDetails?: {
		id: string;
		title: string;
		description: string;
		required: Array<string>;
		properties: any;
	};
}) => {
	return (
		<Dialog>
			<DialogTrigger>
				<Tag>Details</Tag>
			</DialogTrigger>
			<DialogContent className="sm:max-w-xl">
				<DialogHeader>
					<DialogTitle>Credential Pack</DialogTitle>
					<DialogDescription className="sr-only">
						Technical details about the credential and its schema.
					</DialogDescription>
				</DialogHeader>
				<div className="mt-2 block">
					<h3 className="text-lg lg:text-4xl font-black">
						{credentialDetails?.title}
					</h3>
					<p className="text-xs lg:text-base text-neutral-500">
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
			</DialogContent>
		</Dialog>
	);
};

const DialogCredentialPack = ({
	credentialDetails,
	credentials,
}: {
	credentials: VerifableCredential[];
	credentialDetails?: {
		id: string;
		title: string;
		description: string;
		required: Array<string>;
		properties: any;
	};
}) => {
	return (
		<Dialog>
			<DialogTrigger>
				<Tag variant="secondary">View Pack</Tag>
			</DialogTrigger>
			<DialogContent className="sm:max-w-3xl">
				<DialogHeader>
					<DialogTitle>Credential Pack</DialogTitle>
					<DialogDescription className="sr-only">
						Technical details about the credential and its schema.
					</DialogDescription>
				</DialogHeader>
				<div className="mt-4 block">
					<h3 className="text-lg lg:text-4xl font-black">
						{credentialDetails?.title}
					</h3>
					<p className="text-sm lg:text-base text-neutral-500">
						{credentialDetails?.description}
					</p>
					<ScrollArea className="h-[360px] w-full rounded-md border border-neutral-200 p-4 mt-5">
						<div className="flex flex-col gap-y-5">
							{credentials.map((credential: VerifableCredential) => (
								<CredentialRow credential={credential} />
							))}
						</div>
					</ScrollArea>
				</div>
			</DialogContent>
		</Dialog>
	);
};
