import { z } from "zod";
export declare const VerifableCredential: z.ZodObject<{
    "@context": z.ZodArray<z.ZodString, "many">;
    type: z.ZodArray<z.ZodString, "many">;
    issuer: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    issuanceDate: z.ZodString;
    expirationDate: z.ZodOptional<z.ZodString>;
    credentialSchema: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
    credentialSubject: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    proof: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    "@context": string[];
    type: string[];
    issuer: {
        id: string;
    };
    issuanceDate: string;
    credentialSchema: {
        type: string;
        id: string;
    };
    credentialSubject: {
        id: string;
    };
    expirationDate?: string | undefined;
    proof?: any;
}, {
    "@context": string[];
    type: string[];
    issuer: {
        id: string;
    };
    issuanceDate: string;
    credentialSchema: {
        type: string;
        id: string;
    };
    credentialSubject: {
        id: string;
    };
    expirationDate?: string | undefined;
    proof?: any;
}>;
export type VerifableCredential = z.infer<typeof VerifableCredential>;
