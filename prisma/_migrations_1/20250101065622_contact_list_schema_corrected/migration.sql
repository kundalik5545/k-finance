/*
  Warnings:

  - The primary key for the `contactLists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `contactLists` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- RedefineTables
BEGIN TRANSACTION;
ALTER TABLE [dbo].[contactLists] DROP CONSTRAINT [contactLists_contactEmail_key];
ALTER TABLE [dbo].[contactLists] DROP CONSTRAINT [contactLists_contactPhone_key];
DROP INDEX [contactLists_userId_idx] ON [dbo].[contactLists];
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'contactLists'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_contactLists] (
    [id] INT NOT NULL IDENTITY(1,1),
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
SET IDENTITY_INSERT [dbo].[_prisma_new_contactLists] ON;
IF EXISTS(SELECT * FROM [dbo].[contactLists])
    EXEC('INSERT INTO [dbo].[_prisma_new_contactLists] ([contactEmail],[contactName],[contactPhone],[createdAt],[id],[updatedAt],[userId]) SELECT [contactEmail],[contactName],[contactPhone],[createdAt],[id],[updatedAt],[userId] FROM [dbo].[contactLists] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_contactLists] OFF;
DROP TABLE [dbo].[contactLists];
EXEC SP_RENAME N'dbo._prisma_new_contactLists', N'contactLists';
CREATE NONCLUSTERED INDEX [contactLists_userId_idx] ON [dbo].[contactLists]([userId]);
COMMIT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
