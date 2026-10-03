export default function CadastroPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4">
      <div className="card w-full p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Cadastro</p>
        <h1 className="mt-2 text-3xl font-black text-white">Criar conta</h1>

        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Nome</label>
            <input type="text" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none focus:border-brand-500" placeholder="Seu nome" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none focus:border-brand-500" placeholder="voce@email.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Senha</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none focus:border-brand-500" placeholder="********" />
          </div>
          <button type="submit" className="button-primary w-full">Criar conta</button>
        </form>
      </div>
    </main>
  );
}
