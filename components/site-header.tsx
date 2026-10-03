import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';

export default async function SiteHeader() {
  const session = await getSessionFromCookies();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="/" className="text-lg font-black tracking-tight text-white">
          Futebol <span className="text-brand-400">Prognósticos</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/" className="hover:text-white">Início</a>
          <a href="/dashboard" className="hover:text-white">Dashboard</a>
          <a href="/jogos" className="hover:text-white">Jogos</a>
          <a href="/palpites" className="hover:text-white">Palpites</a>
        </nav>

        {session ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-300 md:inline">{session.name}</span>
            <form action="/api/auth/logout" method="POST">
              <button type="submit" className="button-secondary text-sm">Sair</button>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <a href="/auth/login" className="button-secondary text-sm">Entrar</a>
            <a href="/auth/register" className="button-primary text-sm">Criar conta</a>
          </div>
        )}
      </div>
    </header>
  );
}
