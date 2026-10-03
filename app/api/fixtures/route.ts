import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';
import { fixtures } from '@/lib/football';

export default async function PalpitesPage() {
  const session = await getSessionFromCookies();

  if (!session) {
    redirect('/auth/login');
  }

  const activeFixture = fixtures[0];

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Palpites</p>
        <h1 className="mt-2 text-3xl font-black text-white">Registrar previsão</h1>
      </div>

      <div className="card p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Partida atual</div>
            <h2 className="mt-2 text-2xl font-bold text-white">{activeFixture.homeTeam} vs {activeFixture.awayTeam}</h2>
          </div>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{activeFixture.kickoff}</span>
        </div>

        <form action="/api/predictions" method="POST" className="space-y-5">
          <input type="hidden" name="fixtureId" value={activeFixture.id} />
          <input type="hidden" name="fixtureLabel" value={`${activeFixture.homeTeam} vs ${activeFixture.awayTeam}`} />
          <input type="hidden" name="market" value="classic" />

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Time da casa</label>
              <input name="homeScore" type="number" min={0} defaultValue={2} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Empate</label>
              <input name="drawScore" type="number" min={0} defaultValue={1} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Confiança (%)</label>
              <input name="confidence" type="number" min={1} max={100} defaultValue={76} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Observações</label>
            <textarea name="notes" rows={4} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" placeholder="Justificativa do palpite e contexto tático..." />
          </div>

          <button type="submit" className="button-primary w-full md:w-auto">Salvar palpite</button>
        </form>
      </div>
    </main>
  );
}
