/*
  Warnings:

  - Added the required column `contactTitle` to the `contactLists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contactLists" ADD COLUMN     "contactTitle" TEXT NOT NULL;
