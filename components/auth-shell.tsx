import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getSessionFromCookies();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="mb-6 flex items-center justify-between">
          <a href="/" className="text-lg font-black text-white">Futebol Prognósticos</a>
          {session ? (
            <a href="/dashboard" className="button-secondary">Painel</a>
          ) : (
            <a href="/auth/login" className="button-primary">Entrar</a>
          )}
        </div>

        {children}
      </div>
    </main>
  );
}
