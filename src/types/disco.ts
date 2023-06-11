import { z } from "zod";

export const DiscoLinkage = z.object({
	attestaions: z.array(z.any()),
	claim: z.string(),
	host: z.string(),
	id: z.string(),
	protocol: z.string(),
});

export const DiscoProfile = z.object({
	creds: z.array(z.any()),
	isDiscoOrg: z.boolean(),
	linkages: z.array(
		z.object({
			twitter: DiscoLinkage,
			discord: DiscoLinkage,
			dns: DiscoLinkage,
		}),
	),
	profile: z.object({
		avatar: z.string(),
		bio: z.string(),
		ethAddress: z.string(),
		name: z.string(),
	}),
});

export type DiscoLinkage = z.infer<typeof DiscoLinkage>;
export type DiscoProfile = z.infer<typeof DiscoProfile>;
