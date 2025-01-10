-- CreateEnum
CREATE TYPE "PolicyTypeEnum" AS ENUM ('TERM_LIFE', 'HEALTH', 'HOME', 'AUTO', 'TRAVEL', 'OTHER');

-- CreateEnum
CREATE TYPE "PremiumTypeEnum" AS ENUM ('MONTHLY', 'QUARTERLY', 'YEARLY', 'ONE_TIME');

-- CreateEnum
CREATE TYPE "CoverageTypeEnum" AS ENUM ('L', 'CR');

-- CreateEnum
CREATE TYPE "PolicyStatusEnum" AS ENUM ('ACTIVE', 'PENDING', 'EXPIRED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policies" (
    "id" SERIAL NOT NULL,
    "policyName" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,
    "policyType" "PolicyTypeEnum" NOT NULL,
    "premium" DOUBLE PRECISION NOT NULL,
    "premiumFrequency" "PremiumTypeEnum" NOT NULL,
    "coverageAmount" DOUBLE PRECISION NOT NULL,
    "coverageAmtIn" "CoverageTypeEnum" NOT NULL,
    "policyStartDate" TIMESTAMP(3) NOT NULL,
    "policyExpireDate" TIMESTAMP(3) NOT NULL,
    "nextDueDate" TIMESTAMP(3) NOT NULL,
    "policyStatus" "PolicyStatusEnum" NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "premium_schedules" (
    "id" SERIAL NOT NULL,
    "policyId" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "premium_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverage_distributions" (
    "id" SERIAL NOT NULL,
    "policyId" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "coverage_distributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_lists" (
    "id" SERIAL NOT NULL,
    "contactTitle" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_lists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkUserId_key" ON "users"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "policies_policyId_key" ON "policies"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "contact_lists_contactPhone_key" ON "contact_lists"("contactPhone");

-- CreateIndex
CREATE UNIQUE INDEX "contact_lists_contactEmail_key" ON "contact_lists"("contactEmail");

-- CreateIndex
CREATE INDEX "contact_lists_userId_idx" ON "contact_lists"("userId");

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premium_schedules" ADD CONSTRAINT "premium_schedules_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "policies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coverage_distributions" ADD CONSTRAINT "coverage_distributions_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "policies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_lists" ADD CONSTRAINT "contact_lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
