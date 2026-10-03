export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4">
      <div className="card w-full p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Acesso</p>
        <h1 className="mt-2 text-3xl font-black text-white">Entrar</h1>

        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-brand-500" placeholder="voce@email.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Senha</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none placeholder:text-slate-500 focus:border-brand-500" placeholder="********" />
          </div>
          <button type="submit" className="button-primary w-full">Entrar</button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-400">
          Não tem conta? <a href="/cadastro" className="text-brand-400">Crie agora</a>
        </p>
      </div>
    </main>
  );
}
