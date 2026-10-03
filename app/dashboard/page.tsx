import { FixtureCard, StatChip } from '@/components/ui';
import { fixtures, stats, topLeagues } from '@/lib/football';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <span className="inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
            Futebol inteligente
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Prognósticos e palpites de futebol em um só lugar.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Analise jogos, compare odds, acompanhe tendências e registre palpites com base em estatísticas e histórico.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/jogos" className="button-primary">Ver jogos</a>
            <a href="/palpites" className="button-secondary">Meus palpites</a>
          </div>
        </div>

        <div className="card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Acurácia geral</p>
          <div className="mt-4 text-5xl font-black text-brand-400">68.4%</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="rounded-xl bg-slate-800 p-3">
              <div className="text-slate-400">Jogos</div>
              <div className="mt-1 text-xl font-bold text-white">142</div>
            </div>
            <div className="rounded-xl bg-slate-800 p-3">
              <div className="text-slate-400">Acertos</div>
              <div className="mt-1 text-xl font-bold text-white">97</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <StatChip key={item.label} label={item.label} value={item.value} tone={item.tone} />
        ))}
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Ligas em destaque</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Jogos de hoje</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {topLeagues.map((league) => (
              <span key={league} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                {league}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {fixtures.slice(0, 6).map((fixture) => (
            <FixtureCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
      </section>
    </main>
  );
}
