import { z } from "zod";

export const Account = z.object({
	address: z.string(),
	did: z.string(),
});

export type Account = z.infer<typeof Account>;
