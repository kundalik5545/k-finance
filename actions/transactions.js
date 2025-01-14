"use server";

import { addTransactionSchema } from "@/app/lib/Schema";
import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const addTransaction = async (data) => {
  try {
    const validatedData = addTransactionSchema.parse(data);
    // 1. Authenticate the user
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized User!");
    }

    // 2. Find the user in the database
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // 3. Add the transaction
    const transaction = await prisma.transaction.create({
      data: {
        ...validatedData,
        userId: user.id, // Associate the transaction with the user
      },
    });

    return {
      success: true,
      message: "Transaction added successfully.",
      data: transaction,
    };
  } catch (error) {
    console.error("Error adding transaction:", error);

    // Return a structured error response
    return {
      success: false,
      message: error.message || "Failed to add transaction.",
      error: error,
    };
  }
};

export const getTransactions = async () => {
  try {
    // 1. Authenticate the user
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized User!");
    }

    // 2. Find the user in the database
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // 3. Fetch all transactions for the user
    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
    });

    return {
      success: true,
      message: "Transactions fetched successfully.",
      data: transactions,
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);

    // Return a structured error response
    return {
      success: false,
      message: error.message || "Failed to fetch transactions.",
      error: error,
    };
  }
};
