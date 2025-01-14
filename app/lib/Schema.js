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

export const addTransactionSchema = z.object({
  type: z.enum(["Income", "Expense", "Transfer", "Investment"], {
    errorMap: () => ({ message: "Type is required." }),
  }),
  category: z.string().min(1, { message: "Category is required." }),
  amount: z.preprocess(
    (val) => parseFloat(val),
    z.number().min(1, "Premium must be greater than 0")
  ),
  date: z.date({ required_error: "Please select a valid transaction date." }),
  status: z.enum(["Completed", "Pending"], {
    errorMap: () => ({ message: "Please select a valid transaction status." }),
  }),
  description: z.union([
    z
      .string()
      .max(200, { message: "Description should not exceed 200 characters." }),
    z.string().optional(),
  ]),
});

// export const addTransactionSchema = z.object({
//   type: z.string().nonempty("Type is required"),
//   category: z.string().nonempty("Category is required"),
//   amount: z.number().min(0, "Amount must be a positive number"),
//   date: z
//     .date()
//     .nullable()
//     .refine((val) => val !== null, "Date is required"),
//   status: z.string().nonempty("Status is required"),
//   descriptions: z.string().optional(),
// });

export const addExpenseSchema = z.object({
  category: z.string().nonempty("Category is required"),
  type: z.string().nonempty("Type is required"),
  amount: z.number().min(0.01, "Amount must be a positive number"),
  date: z
    .date()
    .nullable()
    .refine((val) => val !== null, "Date is required"),
  status: z.enum(["Completed", "Pending"]),
  description: z.string().optional(),
  isRecurring: z.boolean().optional(),
  recurringStartDate: z.date().optional(),
  recurringEndDate: z.date().optional(),
  recurringInterval: z.enum(["Day", "Week", "Month", "Year"]).optional(),
});
export const addEFormSchemas = z.object({
  category: z.string().nonempty("Category is required"),
  type: z.string().nonempty("Type is required"),
  amount: z.number().min(0.01, "Amount must be a positive number"),
  date: z
    .date()
    .nullable()
    .refine((val) => val !== null, "Date is required"),
  status: z.enum(["Completed", "Pending"]),
  description: z.string().optional(),
  isRecurring: z.boolean().optional(),
  recurringStartDate: z.date().optional(),
  recurringEndDate: z.date().optional(),
  recurringInterval: z.enum(["Day", "Week", "Month", "Year"]).optional(),
});

export const addEFormSchema = z
  .object({
    category: z.string().nonempty("Category is required"),
    type: z.string().nonempty("Type is required"),
    amount: z.number().min(0.01, "Amount must be greater than 0"),
    date: z.date().optional(),
    status: z.string().nonempty("Status is required"),
    description: z.string().optional(),
    isRecurring: z.boolean().default(false),
    recurringStartDate: z.date().optional(),
    recurringEndDate: z.date().optional(),
    recurringInterval: z
      .enum(["Day", "Week", "Month", "Year"])
      .optional()
      .nullable(),
  })
  .superRefine((data, ctx) => {
    // Only validate recurring fields if isRecurring is true
    if (data.isRecurring) {
      if (!data.recurringStartDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Recurring start date is required",
          path: ["recurringStartDate"],
        });
      }
      if (!data.recurringEndDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Recurring end date is required",
          path: ["recurringEndDate"],
        });
      }
      if (!data.recurringInterval) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Recurring interval is required",
          path: ["recurringInterval"],
        });
      }
    }
  });
