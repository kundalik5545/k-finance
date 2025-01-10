"use server";

import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";
import { PolicyStatusEnum } from "@prisma/client";

export const addNewPolicy = async (data) => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 2. Check if all fields are provided
    // const { contactName, contactPhone, contactEmail } = data;
    // if (!contactName || !contactPhone || !contactEmail) {
    //   throw new Error("All fields are requried.");
    // }

    //create records
    const addedPolicy = await prisma.policy.create({
      data: { ...data, userId: user.id },
    });
    return { success: true, message: "New policy added.", data: addedPolicy };
  } catch (error) {
    console.log("🚀 Error in backend server:- ", error);
    return { success: false, message: "Please contact admin." };
  }
};

export const fetchInsurancePolicy = async () => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    // 2. Fetch the user from the database
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 3. Fetch policies for the user and calculate the total premium
    const policies = await prisma.policy.findMany({
      where: {
        userId: user.id,
      },
    });

    const totalPremium = await prisma.policy.aggregate({
      where: {
        userId: user.id,
        policyStatus: "ACTIVE",
      },
      _sum: {
        premium: true,
        coverageAmount: true,
      },
    });

    const totalPolicy = await prisma.policy.count({
      where: {
        policyStatus: "ACTIVE",
      },
    });

    return {
      success: true,
      message: "Policies fetched successfully.",
      data: policies,
      totalPremium: totalPremium._sum.premium || 0,
      totalPolicy: totalPolicy || 0,
      totalCoverage: totalPremium._sum.coverageAmount || 0,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const updateInsurancePolicy = async (policyId, data) => {};
export const deleteInsurancePolicy = async (policyId) => {};

export const allInsurancePolicyForChart = async () => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    // 2. Fetch the user from the database
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 3. Fetch policies for the user and calculate the total premium
    const policies = await prisma.policy.findMany({
      where: {
        userId: user.id,
      },
    });

    const totalCoverageByPolicyType = await prisma.policy.groupBy({
      by: ["policyType"],

      _sum: {
        coverageAmount: true,
      },
    });

    return {
      success: true,
      message: "Policies fetched successfully.",
      data: totalCoverageByPolicyType,
    };
  } catch (error) {}
};
