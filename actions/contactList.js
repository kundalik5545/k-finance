"use server";

import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const createNewContact = async (data) => {
  // Steps to follow
  //1. Check user is exist and logged in
  //3. check all fields are provoided
  //4. Check previous number exist
  //5. create new contact
  //6. return all previous contacts

  try {
    //Check user is correct
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // Checking all fields are provoided
    if (!data.contactName && !data.contactPhone && !data.contactEmail) {
      return {
        success: false,
        message: "Please provoide all fileds.",
        status: 400,
      };
    }

    const createdContact = await prisma.contactList.create({
      data: { ...data, userId: user.id },
    });

    return {
      success: true,
      message: "Added to contact list",
      data: createdContact,
    };
  } catch (error) {
    console.log("🚀 Error in backend server:- ", error);
    return { success: false, message: error };
  }
};
