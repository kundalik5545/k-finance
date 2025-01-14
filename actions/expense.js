"use server";
import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const addExpense = async (data) => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 2. Validate the input data (optional but recommended)
    if (!data.category || !data.type || !data.amount || !data.date) {
      throw new Error("Invalid input data");
    }

    // 3. Add the expense
    const expense = await prisma.expense.create({
      data: {
        category: data.category,
        type: data.type,
        amount: data.amount,
        date: new Date(data.date), // Ensure date is a Date object
        status: data.status,
        description: data.description,
        isRecurring: data.isRecurring,
        recurringStartDate: data.recurringStartDate,
        recurringEndDate: data.recurringEndDate,
        recurringInterval: data.recurringInterval,
        userId: user.id, // Linking the expense to the user
      },
    });

    console.log("Backend db added expense is ", expense);

    return {
      success: true,
      data: expense,
      message: "Expense added successfully",
    };
  } catch (error) {
    console.error("Error in addExpense:", error.message);
    return {
      success: false,
      message: error.message || "An error occurred while adding the expense",
    };
  }
};
