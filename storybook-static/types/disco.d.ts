import { z } from "zod";
export declare const DiscoLinkage: z.ZodObject<{
    attestaions: z.ZodArray<z.ZodAny, "many">;
    claim: z.ZodString;
    host: z.ZodString;
    id: z.ZodString;
    protocol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    attestaions: any[];
    claim: string;
    host: string;
    protocol: string;
}, {
    id: string;
    attestaions: any[];
    claim: string;
    host: string;
    protocol: string;
}>;
export declare const DiscoProfile: z.ZodObject<{
    creds: z.ZodArray<z.ZodAny, "many">;
    isDiscoOrg: z.ZodBoolean;
    linkages: z.ZodArray<z.ZodObject<{
        twitter: z.ZodObject<{
            attestaions: z.ZodArray<z.ZodAny, "many">;
            claim: z.ZodString;
            host: z.ZodString;
            id: z.ZodString;
            protocol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }>;
        discord: z.ZodObject<{
            attestaions: z.ZodArray<z.ZodAny, "many">;
            claim: z.ZodString;
            host: z.ZodString;
            id: z.ZodString;
            protocol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }>;
        dns: z.ZodObject<{
            attestaions: z.ZodArray<z.ZodAny, "many">;
            claim: z.ZodString;
            host: z.ZodString;
            id: z.ZodString;
            protocol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }, {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        twitter: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        dns: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        discord: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
    }, {
        twitter: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        dns: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        discord: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
    }>, "many">;
    profile: z.ZodObject<{
        avatar: z.ZodString;
        bio: z.ZodString;
        ethAddress: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        bio: string;
        avatar: string;
        ethAddress: string;
    }, {
        name: string;
        bio: string;
        avatar: string;
        ethAddress: string;
    }>;
}, "strip", z.ZodTypeAny, {
    profile: {
        name: string;
        bio: string;
        avatar: string;
        ethAddress: string;
    };
    creds: any[];
    isDiscoOrg: boolean;
    linkages: {
        twitter: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        dns: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        discord: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
    }[];
}, {
    profile: {
        name: string;
        bio: string;
        avatar: string;
        ethAddress: string;
    };
    creds: any[];
    isDiscoOrg: boolean;
    linkages: {
        twitter: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        dns: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
        discord: {
            id: string;
            attestaions: any[];
            claim: string;
            host: string;
            protocol: string;
        };
    }[];
}>;
export type DiscoLinkage = z.infer<typeof DiscoLinkage>;
export type DiscoProfile = z.infer<typeof DiscoProfile>;
