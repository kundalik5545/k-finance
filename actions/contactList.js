"use server";

import { prisma } from "@/DB/db.config";
import { auth } from "@clerk/nextjs/server";

export const createNewContact = async (data) => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // 2. Check if all fields are provided
    const { contactName, contactPhone, contactEmail } = data;
    if (!contactName || !contactPhone || !contactEmail) {
      throw new Error("All fields are requried.");
    }

    // 3. Check if the contact phone or email already exists
    const existingContact = await prisma.contactList.findFirst({
      where: {
        userId: user.id,
        OR: [{ contactPhone }, { contactEmail }],
      },
    });

    if (existingContact) {
      throw new Error("Either email or Phone already exist.");
    }

    // 4. Create new contact
    const createdContact = await prisma.contactList.create({
      data: { ...data, userId: user.id },
    });

    // 5. Fetch and return all previous contacts
    const allContacts = await prisma.contactList.findMany({
      where: { userId: user.id },
    });
    return {
      success: true,
      message: "Added to contact list",
      data: allContacts,
    };
  } catch (error) {
    console.log("🚀 Error in backend server:- ", error);
    return { success: false, message: "Please contact admin." };
  }
};

export const getContacts = async () => {
  try {
    // 1. Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const allContacts = await prisma.contactList.findMany({
      where: { userId: user.id },
    });

    return {
      success: true,
      message: "Added to contact list",
      data: Array.isArray(allContacts) ? allContacts : [],
    };
  } catch (error) {
    console.log("🚀 Error in backend server:- ", error);
    return { success: false, message: "Please contact admin." };
  }
};
