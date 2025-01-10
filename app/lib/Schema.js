import { z } from "zod";

export const contactListSchema = z.object({
  contactName: z.string().min(1, "Name is required"),
  contactPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  contactEmail: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .transform((val) => (val === undefined ? undefined : val.trim())),
  contactTitle: z.string().min(1, "Title is required."),
});

export const addPolicySchema = z.object({
  policyName: z.string().nonempty("Policy name is required"),
  policyId: z.string(),
  policyType: z.enum(["TERM_LIFE", "HEALTH", "HOME", "TRAVEL", "AUTO"]),
  premium: z.preprocess(
    (val) => parseFloat(val),
    z.number().min(1, "Premium must be greater than 0")
  ),
  premiumFrequency: z.enum(["MONTHLY", "QUARTERLY", "YEARLY", "ONE_TIME"]),
  coverageAmount: z.preprocess(
    (val) => parseFloat(val),
    z.number().min(1, "Coverage must be greater than 0")
  ),
  coverageAmtIn: z.enum(["CR", "L"]),
  nextDueDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),
  policyStartDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),
  policyExpireDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),
  policyStatus: z.enum(["ACTIVE", "EXPIRED", "PENDING"]),
});

export const addOnePolicySchema = z.object({
  policyName: z.string().nonempty("Policy name is required"),
  coverageAmtIn: z.enum(["CR", "L"]),
});
