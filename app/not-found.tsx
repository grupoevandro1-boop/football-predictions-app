export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-5">
      <div className="card w-full p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">404</p>
        <h1 className="mt-3 text-3xl font-black text-white">Página não encontrada</h1>
        <a className="button-primary mt-6" href="/">Voltar ao início</a>
      </div>
    </main>
  );
}
