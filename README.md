# Setup Guide for finance tracking app.

## added/Fork Branch

```
https://github.com/kundalik5545/k-finance.git
```

## Now run npm to add packages

```npm
npm install
```

## Update the .env file with your credentials

```js
DATABASE_URL="sqlserver://localhost:1433;database=KFinance;user=TestJk;password=0807;trustServerCertificate=true"
DATABASE_URLS="postgresql://postgres.xeckznkzjadiaddvjmmu:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.xeckznkzjadiaddvjmmu:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_
CLERK_SECRET_KEY=sk_test_
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_WEBSITENAME=K. Finance
NEXT_PUBLIC_WEBSITE_EMAIL=admin@KFinance.com
NEXT_PUBLIC_WEBSITE_Jurisdiction=Pune
NODE_ENV=dev

```

## Update schema.prisma file and db.config.js file

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

## Write models

```sql
model User {
  id          String        @id @default(uuid())
  clerkUserId String        @unique
  name        String?
  email       String        @unique
  imageUrl    String?
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  ContactList ContactList[]

  @@map("users")
}

```

## Migrate prisma to desired database use this

```npm
npx prisma migrate dev --name init
```

# Added below packages to Next js fullstack project

## react hook form and zod resolver

```npm
npm install react-hook-form @hookform/resolvers zod
```
