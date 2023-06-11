"use client";
import { splitAndTruncateDID } from "../lib/truncate-did";
import { Linkage } from "../stories/linkage";
import "../styles.css";
import { Profile } from "../types/profile";
import { BackgroundCard } from "./background-card";
import classNames from "clsx";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
	profile: Profile;
	bgCards?: boolean;
};

export const ProfileBadge = ({
	className,
	profile,
	bgCards = false,
}: Props) => {
	const classes = classNames(
		className,
		"ProfileBadge",
		"max-w-lg relative z-10",
		"flex flex-col gap-y-4",
		"bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden",
		"hover:border-neutral-300",
	);
	return (
		<div className="relative max-w-lg group">
			{bgCards && (
				<>
					<BackgroundCard className="scale-90 opacity-70 absolute left-0 right-0 mx-auto -top-4 z-0 group-hover:-top-5 group-hover:opacity-10 " />
					<BackgroundCard className="scale-95 opacity-80 absolute left-0 right-0 mx-auto -top-2 z-0 group-hover:-top-3 group-hover:opacity-20" />
				</>
			)}
			<div className={classes}>
				<div className="h-[100px] flex flex-col justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-white">
					<img
						alt="Cover"
						src={profile.cover}
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="flex-1 flex flex-col text-center pb-6 px-4">
					<div className="relative -mt-20">
						<img
							alt="Avatar"
							src={profile.pfp}
							className="w-32 h-32 rounded-full border-2 border-white shadow-md mx-auto"
						/>
						{profile.name && (
							<h3 className="text-lg lg:text-3xl font-black mt-3">
								{profile.name}
							</h3>
						)}
						<div className="flex items-center justify-center gap-x-2 text-neutral-500 mt-2">
							<Linkage icon={"twitter"} />
							<Linkage icon={"github"} />
							<Linkage icon={"dns"} />
						</div>
						<div className="mt-4">
							{profile.bio && (
								<p className="text-sm font-bold text-neutral-700">
									{profile.bio}
								</p>
							)}
							<div className="flex items-center justify-center gap-x-2 text-neutral-600">
								{profile.domain && (
									<span className="text-xs">{profile.domain}</span>
								)}
								<span className="text-neutral-200">|</span>
								{profile.did && (
									<span className="text-xs">
										{splitAndTruncateDID(profile.did)}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
