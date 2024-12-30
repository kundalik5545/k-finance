"use server";

import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const createNewContact = async (data) => {
  // Steps to follow
  //1. Check user is correct
  //2. Check user is logged in
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

    if (!data || !data.contactName) {
      throw new Error("Invalid data payload");
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
