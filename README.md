# Futebol Prognósticos

Aplicativo completo de prognósticos e palpites de futebol com autenticação, dashboard, estatísticas, comparação de odds e gestão de palpites.

## Stack

- Next.js 14+
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- JWT + bcrypt
- API de futebol com fallback para dados mockados

## Funcionalidades

- autenticação segura
- dashboard com métricas gerais
- lista de jogos e ligas
- registro de palpites por partida
- comparação de odds
- histórico de acertos e erros
- filtros por liga e status
- proteção de rotas privadas
- configuração para API externa de futebol

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste os valores.

## Scripts

```bash
npm install
npm run prisma:generate
npm run dev
```

## Deploy

- Vercel
- PostgreSQL (Supabase ou Neon)
- API-Football ou Sportmonks para dados reais

## Observação

O projeto inclui fallback de dados para funcionar sem API externa, mas para dados em tempo real é recomendável configurar a chave da sua API esportiva.
