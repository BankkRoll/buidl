import { z } from "zod";

export const Profile = z.object({
	address: z.string(),
	did: z.string().optional(),
	domain: z.string().optional(),
	name: z.string().optional(),
	bio: z.string().optional(),
	pfp: z.string().optional(),
	cover: z.string().optional(),
});

export type Profile = z.infer<typeof Profile>;
