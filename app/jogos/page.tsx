import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';
import { DashboardSummary, FixtureTable } from '@/components/ui';
import { fixtures } from '@/lib/football';

export default async function DashboardPage() {
  const session = await getSessionFromCookies();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Painel</p>
        <h1 className="mt-2 text-3xl font-black text-white">Dashboard de desempenho</h1>
        <p className="mt-2 text-slate-300">Olá, {session.name}. Aqui está o resumo do seu desempenho.</p>
      </div>

      <DashboardSummary />

      <section className="mt-10 card overflow-hidden">
        <div className="border-b border-slate-800 p-5">
          <h2 className="text-xl font-bold text-white">Últimos palpites</h2>
        </div>
        <FixtureTable fixtures={fixtures.slice(0, 5)} />
      </section>
    </main>
  );
}
