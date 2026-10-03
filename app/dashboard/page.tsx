import { DashboardSummary, FixtureTable } from '@/components/ui';
import { fixtures } from '@/lib/football';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Painel</p>
        <h1 className="mt-2 text-3xl font-black text-white">Dashboard de desempenho</h1>
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
