# Futebol Prognósticos

Aplicativo completo e pronto para usar de prognósticos e palpites de futebol.

## 🚀 Início Rápido

```bash
# 1. Instale dependências
npm install

# 2. Configure o ambiente
cp .env.example .env.local

# 3. Rode o app
npm run dev
```

Acesse: **http://localhost:3000**

## 📋 Funcionalidades

✅ Autenticação segura com JWT
✅ Dashboard de desempenho
✅ Registro de palpites por partida
✅ Lista de jogos e ligas
✅ Comparação de odds
✅ Histórico de acertos e erros
✅ Rotas protegidas para usuários
✅ Integração com API esportiva (com fallback)
✅ Interface moderna e responsiva
✅ Suporte para PostgreSQL e Prisma

## 🎯 Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Autenticação**: JWT em cookie + bcrypt
- **Banco**: PostgreSQL + Prisma (preparado)
- **API**: Integração com API-Football (opcional)

## 📖 Documentação

Veja [SETUP.md](./SETUP.md) para guia completo de instalação e uso.

## 🔧 Configuração de Produção

Para deploy em produção:

1. Configure um banco PostgreSQL (Supabase, Neon, etc)
2. Adicione sua chave de API esportiva (API-Football)
3. Deploy no Vercel, Heroku ou seu servidor
4. Configure variáveis de ambiente em produção

## 📞 Suporte

Para dúvidas ou melhorias, abra uma issue no repositório.

---

**Pronto para usar!** ⚽🎯
