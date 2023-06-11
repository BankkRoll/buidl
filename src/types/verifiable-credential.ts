import { z } from "zod";

export const VerifableCredential = z.object({
	"@context": z.array(z.string()),
	type: z.array(z.string()),
	issuer: z.object({
		id: z.string(),
	}),
	issuanceDate: z.string(),
	expirationDate: z.string().optional(),
	credentialSchema: z.object({
		id: z.string(),
		type: z.string(),
	}),
	credentialSubject: z.object({
		id: z.string(),
	}),
	proof: z.any(),
});

export type VerifableCredential = z.infer<typeof VerifableCredential>;
