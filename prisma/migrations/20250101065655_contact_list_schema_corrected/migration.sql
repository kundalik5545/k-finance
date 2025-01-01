BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
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

-- CreateTable
CREATE TABLE [dbo].[contactLists] (
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
