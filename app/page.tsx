import { getSessionFromCookies } from '@/lib/auth';

export default async function Page() {
  const session = await getSessionFromCookies();

  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-12 rounded-2xl border border-brand-500/30 bg-brand-500/5 p-8 text-center">
        <h1 className="text-4xl font-black text-white md:text-5xl">Bem-vindo ao Futebol Prognósticos</h1>
        <p className="mt-4 text-lg text-slate-300">Aplicativo completo para prognósticos e palpites de futebol</p>
        
        {!session && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/auth/register" className="button-primary">Criar Conta</a>
            <a href="/auth/login" className="button-secondary">Fazer Login</a>
          </div>
        )}
      </div>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="card p-6">
          <div className="text-3xl">⚽</div>
          <h3 className="mt-3 text-xl font-bold text-white">Ligas em Destaque</h3>
          <p className="mt-2 text-slate-300">Premier League, LaLiga, Serie A, Bundesliga, Ligue 1 e Champions League</p>
        </div>

        <div className="card p-6">
          <div className="text-3xl">📊</div>
          <h3 className="mt-3 text-xl font-bold text-white">Análise Inteligente</h3>
          <p className="mt-2 text-slate-300">Odds, forma dos times, histórico de desempenho e estatísticas</p>
        </div>

        <div className="card p-6">
          <div className="text-3xl">🎯</div>
          <h3 className="mt-3 text-xl font-bold text-white">Palpites Seguros</h3>
          <p className="mt-2 text-slate-300">Registre seus palpites e acompanhe seu desempenho e acurácia</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black text-white">Como Funciona</h2>
        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-white">Crie sua Conta</h3>
              <p className="text-slate-300">Cadastro rápido com email e senha segura</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-white">Explore os Jogos</h3>
              <p className="text-slate-300">Veja todos os jogos, odds, formas e históricos</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-white">Registre Palpites</h3>
              <p className="text-slate-300">Faça seus prognósticos com confiança e justificativa</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white font-bold flex-shrink-0">4</div>
            <div>
              <h3 className="font-bold text-white">Acompanhe Desempenho</h3>
              <p className="text-slate-300">Veja seu histórico, acurácia e indicadores no dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {session && (
        <section className="mt-12">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-black text-white">Bem-vindo de Volta, {session.name}!</h2>
            <p className="mt-3 text-slate-300">Acesse seu painel e continue registrando palpites</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="/dashboard" className="button-primary">Ir ao Dashboard</a>
              <a href="/jogos" className="button-secondary">Ver Jogos</a>
              <a href="/palpites" className="button-secondary">Novo Palpite</a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
