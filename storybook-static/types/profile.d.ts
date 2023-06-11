import { z } from "zod";
export declare const Profile: z.ZodObject<{
    address: z.ZodString;
    did: z.ZodOptional<z.ZodString>;
    domain: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    pfp: z.ZodOptional<z.ZodString>;
    cover: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    address: string;
    did?: string | undefined;
    domain?: string | undefined;
    name?: string | undefined;
    bio?: string | undefined;
    pfp?: string | undefined;
    cover?: string | undefined;
}, {
    address: string;
    did?: string | undefined;
    domain?: string | undefined;
    name?: string | undefined;
    bio?: string | undefined;
    pfp?: string | undefined;
    cover?: string | undefined;
}>;
export type Profile = z.infer<typeof Profile>;
