generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String       @id @default(cuid())
  name         String?
  email        String       @unique
  passwordHash String
  createdAt    DateTime     @default(now())
  predictions  Prediction[]
}

model Fixture {
  id         String      @id @default(cuid())
  externalId String?     @unique
  league     String
  homeTeam   String
  awayTeam   String
  kickoffAt  DateTime
  status     String
  predictions Prediction[]
}

model Prediction {
  id         String   @id @default(cuid())
  userId     String
  fixtureId  String
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  fixture    Fixture  @relation(fields: [fixtureId], references: [id], onDelete: Cascade)
  homeScore  Int
  awayScore  Int
  confidence Int
  market     String
  createdAt  DateTime @default(now())
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  tokenHash String
  createdAt DateTime @default(now())
  expiresAt DateTime
}
