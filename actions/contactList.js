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

    return {
      success: true,
      message: "Added to contact list",
      data: createdContact,
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

export const updateContact = async (contactId, data) => {
  try {
    // Validate input
    if (!contactId || !data || !data.contactPhone) {
      throw new Error("Invalid input data");
    }

    // Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized User!");
    }

    // Fetch user from the database
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Update contact in the database
    const updatedContact = await prisma.contactList.update({
      where: {
        id: contactId,
      },
      data: {
        contactPhone: data.contactPhone,
        contactEmail: data.contactEmail,
        contactName: data.contactName,
        contactTitle: data.contactTitle,
      },
    });

    return {
      success: true,
      message: "Contact updated successfully",
      data: updatedContact,
    };
  } catch (error) {
    // Log the error for debugging
    console.error("🚀 Error in backend server:", error.message || error);

    return {
      success: false,
      message:
        error.message || "Failed to update contact. Please contact admin.",
    };
  }
};

// New deleteContact function
export const deleteContact = async (contactId) => {
  console.log("Test contact id:- ", contactId);

  try {
    // Check if user exists and is logged in
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized User!");

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    await prisma.contactList.delete({
      where: {
        id: contactId,
      },
    });

    return {
      success: true,
      message: "Contact deleted successfully",
    };
  } catch (error) {
    console.error("🚀 Error in backend server:", error);
    return {
      success: false,
      message: "Failed to delete contact. Please contact admin.",
    };
  }
};
