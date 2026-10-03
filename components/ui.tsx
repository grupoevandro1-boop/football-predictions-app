import React from 'react';

export function StatChip({ label, value, tone }: { label: string; value: string; tone: 'brand' | 'emerald' | 'blue' }) {
  const colors = {
    brand: 'border-brand-500/30 bg-brand-500/10 text-brand-300',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  };

  return (
    <div className={`rounded-2xl border p-5 ${colors[tone]}`}>
      <div className="text-sm uppercase tracking-[0.2em] text-slate-200/70">{label}</div>
      <div className="mt-2 text-3xl font-black">{value}</div>
    </div>
  );
}

export function FixtureCard({ fixture }: { fixture: any }) {
  return (
    <article className="card p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
        <span>{fixture.league}</span>
        <span>{fixture.status}</span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-700" />
          <span className="truncate font-semibold text-white">{fixture.homeTeam}</span>
        </div>
        <span className="text-sm text-slate-400">vs</span>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
          <span className="truncate font-semibold text-white">{fixture.awayTeam}</span>
          <div className="h-10 w-10 rounded-full bg-slate-700" />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
        <span>{fixture.kickoff}</span>
        <span className="text-brand-400">{fixture.confidence}% conf.</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-slate-300">
        <div className="rounded-xl bg-slate-800 p-2 text-center">
          <div className="text-slate-400">1</div>
          <div className="mt-1 font-semibold text-white">{fixture.odds.home}</div>
        </div>
        <div className="rounded-xl bg-slate-800 p-2 text-center">
          <div className="text-slate-400">X</div>
          <div className="mt-1 font-semibold text-white">{fixture.odds.draw}</div>
        </div>
        <div className="rounded-xl bg-slate-800 p-2 text-center">
          <div className="text-slate-400">2</div>
          <div className="mt-1 font-semibold text-white">{fixture.odds.away}</div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm text-slate-300">Palpite</div>
        <div className="rounded-lg bg-brand-500/10 px-2 py-1 text-sm font-semibold text-brand-300">{fixture.prediction}</div>
      </div>
    </article>
  );
}

export function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {[
        ['Vitórias', '76'],
        ['Aproveitamento', '68.4%'],
        ['Odds médias', '2.41'],
        ['Streak', '5J'],
      ].map(([label, value]) => (
        <div key={label} className="card p-5">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</div>
          <div className="mt-3 text-3xl font-black text-white">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function FixtureTable({ fixtures }: { fixtures: any[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm text-slate-200">
        <thead className="bg-slate-950 text-slate-400">
          <tr>
            <th className="px-5 py-3">Partida</th>
            <th className="px-5 py-3">Liga</th>
            <th className="px-5 py-3">Palpite</th>
            <th className="px-5 py-3">Confiança</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture) => (
            <tr key={fixture.id} className="border-t border-slate-800">
              <td className="px-5 py-4">{fixture.homeTeam} vs {fixture.awayTeam}</td>
              <td className="px-5 py-4">{fixture.league}</td>
              <td className="px-5 py-4">{fixture.prediction}</td>
              <td className="px-5 py-4 text-brand-300">{fixture.confidence}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FixtureList({ fixtures }: { fixtures: any[] }) {
  return (
    <div className="space-y-4">
      {fixtures.map((fixture) => (
        <div key={fixture.id} className="card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{fixture.league}</div>
            <div className="mt-2 text-lg font-bold text-white">{fixture.homeTeam} vs {fixture.awayTeam}</div>
            <div className="mt-1 text-sm text-slate-400">{fixture.kickoff}</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300">{fixture.prediction}</span>
            <span className="text-sm text-slate-300">{fixture.confidence}% conf.</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PredictionForm({ fixture }: { fixture: any }) {
  return (
    <div className="card p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Partida atual</div>
          <h2 className="mt-2 text-2xl font-bold text-white">{fixture.homeTeam} vs {fixture.awayTeam}</h2>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{fixture.kickoff}</span>
      </div>

      <form className="space-y-5">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Time da casa</label>
            <input type="number" defaultValue={2} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Empate</label>
            <input type="number" defaultValue={0} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Fora</label>
            <input type="number" defaultValue={1} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">Observações</label>
          <textarea rows={4} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-brand-500" placeholder="Justificativa do palpite e contexto tático..." />
        </div>

        <button className="button-primary w-full md:w-auto">Salvar palpite</button>
      </form>
    </div>
  );
}
