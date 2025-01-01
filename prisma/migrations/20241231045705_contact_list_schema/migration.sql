/*
  Warnings:

  - You are about to drop the `contactList` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[contactList] DROP CONSTRAINT [contactList_userId_fkey];

-- DropTable
DROP TABLE [dbo].[contactList];

-- CreateTable
CREATE TABLE [dbo].[contactLists] (
    [id] NVARCHAR(1000) NOT NULL,
    [contactName] NVARCHAR(1000) NOT NULL,
    [contactPhone] NVARCHAR(1000) NOT NULL,
    [contactEmail] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [contactLists_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [contactLists_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [contactLists_contactPhone_key] UNIQUE NONCLUSTERED ([contactPhone]),
    CONSTRAINT [contactLists_contactEmail_key] UNIQUE NONCLUSTERED ([contactEmail])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [contactLists_userId_idx] ON [dbo].[contactLists]([userId]);

-- AddForeignKey
ALTER TABLE [dbo].[contactLists] ADD CONSTRAINT [contactLists_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
