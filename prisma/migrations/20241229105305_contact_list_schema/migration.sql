/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[contactList] (
    [id] NVARCHAR(1000) NOT NULL,
    [contactName] NVARCHAR(1000) NOT NULL,
    [contactPhone] NVARCHAR(1000) NOT NULL,
    [contactEmail] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [contactList_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [contactList_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [contactList_contactPhone_key] UNIQUE NONCLUSTERED ([contactPhone]),
    CONSTRAINT [contactList_contactEmail_key] UNIQUE NONCLUSTERED ([contactEmail])
);

-- RedefineTables
BEGIN TRANSACTION;
ALTER TABLE [dbo].[users] DROP CONSTRAINT [users_clerkUserId_key];
ALTER TABLE [dbo].[users] DROP CONSTRAINT [users_email_key];
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'users'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_users] (
    [id] NVARCHAR(1000) NOT NULL,
    [clerkUserId] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    [email] NVARCHAR(1000) NOT NULL,
    [imageUrl] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_clerkUserId_key] UNIQUE NONCLUSTERED ([clerkUserId]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);
IF EXISTS(SELECT * FROM [dbo].[users])
    EXEC('INSERT INTO [dbo].[_prisma_new_users] ([clerkUserId],[createdAt],[email],[id],[imageUrl],[name],[updatedAt]) SELECT [clerkUserId],[createdAt],[email],[id],[imageUrl],[name],[updatedAt] FROM [dbo].[users] WITH (holdlock tablockx)');
DROP TABLE [dbo].[users];
EXEC SP_RENAME N'dbo._prisma_new_users', N'users';
COMMIT;

-- CreateIndex
CREATE NONCLUSTERED INDEX [contactList_userId_idx] ON [dbo].[contactList]([userId]);

-- AddForeignKey
ALTER TABLE [dbo].[contactList] ADD CONSTRAINT [contactList_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
