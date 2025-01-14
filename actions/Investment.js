"use server";
import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const fetchInvestments = async () => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 2. Get all investments
    const investments = await prisma.transaction.findMany({
      where: { userId: user.id, type: "Investment" },
    });

    return {
      data: investments,
      success: true,
      message: "Investments fetched successfully",
    };
  } catch (error) {
    console.error("Error getting investments:", error.message);
  }
};
