import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSessionFromCookies } from '@/lib/auth';

export async function GET() {
  const session = await getSessionFromCookies();

  if (!session) {
    return NextResponse.json({ ok: false, user: null });
  }

  return NextResponse.json({ ok: true, user: { id: session.userId, email: session.email, name: session.name } });
}
