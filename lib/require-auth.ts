import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';

export default async function requireAuth() {
  const session = await getSessionFromCookies();

  if (!session) {
    redirect('/auth/login');
  }

  return session;
}
