import { FixtureList } from '@/components/ui';
import { fixtures } from '@/lib/football';

export default function JogosPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Calendário</p>
          <h1 className="mt-2 text-3xl font-black text-white">Jogos e palpites</h1>
        </div>
        <button className="button-secondary">Filtrar ligas</button>
      </div>
      <FixtureList fixtures={fixtures} />
    </main>
  );
}
