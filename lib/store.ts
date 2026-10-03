import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

export type AppUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export type Prediction = {
  id: string;
  userId: string;
  fixtureId: string;
  fixtureLabel: string;
  homeScore: number;
  awayScore: number;
  confidence: number;
  market: string;
  createdAt: string;
};

export const users: AppUser[] = [];
export const predictions: Prediction[] = [];

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function createUserRecord(name: string, email: string, passwordHash: string): AppUser {
  return {
    id: randomUUID(),
    name,
    email,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
}

export function createPredictionRecord(
  userId: string,
  fixtureId: string,
  fixtureLabel: string,
  homeScore: number,
  awayScore: number,
  confidence: number,
  market: string,
): Prediction {
  return {
    id: randomUUID(),
    userId,
    fixtureId,
    fixtureLabel,
    homeScore,
    awayScore,
    confidence,
    market,
    createdAt: new Date().toISOString(),
  };
}

export function getUserByEmail(email: string) {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(userId: string) {
  return users.find((user) => user.id === userId);
}
