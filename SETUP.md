# Guia de Execução - Futebol Prognósticos

Este é um aplicativo completo de prognósticos e palpites de futebol, pronto para uso.

## Setup Rápido

### 1. Instalação de Dependências

```bash
npm install
```

### 2. Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Edite `.env.local` e configure:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
JWT_SECRET=seu-secret-seguro-aqui
SPORTS_API_KEY=
SPORTS_API_HOST=api-football-v1.p.rapidapi.com
```

**Nota**: O app funciona com dados mockados sem a API esportiva. Se quiser dados reais:
1. Acesse https://rapidapi.com/api-sports/api/api-football
2. Cadastre-se e pegue sua chave
3. Cole no `.env.local`

### 3. Rodando o App

```bash
npm run dev
```

O app abrirá em: **http://localhost:3000**

## Funcionalidades

### Acesso Público
- **Home** (`/`): Página inicial com destaque de jogos

### Acesso com Cadastro
- **Cadastro** (`/auth/register`): Criar nova conta
- **Login** (`/auth/login`): Entrar com email e senha
- **Dashboard** (`/dashboard`): Painel de desempenho pessoal
- **Jogos** (`/jogos`): Lista completa de jogos
- **Palpites** (`/palpites`): Registrar novos palpites

## Fluxo de Uso

1. Acesse http://localhost:3000
2. Clique em "Criar conta"
3. Preencha nome, email e senha
4. Você será redirecionado para o dashboard
5. Explore os jogos e registre seus palpites
6. Veja o histórico no dashboard

## Dados de Teste

O app vem com dados mockados de:
- 6 ligas principais (Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, Champions League)
- Jogos com odds e formas de times
- Palpites pré-configurados com confiança

## Autenticação

- Sessão segura por JWT em cookie
- Páginas privadas protegidas
- Logout automático após 7 dias

## Próximas Etapas para Produção

1. **Banco Real**: Integrar PostgreSQL com Prisma
2. **API Esportiva Real**: Conectar API-Football ou Sportmonks
3. **Deploy**: Vercel, Heroku ou seu servidor
4. **Domínio**: Configurar seu domínio personalizado
5. **SSL**: Certificado HTTPS

## Stack Técnico

- Next.js 14
- TypeScript
- Tailwind CSS
- JWT + bcrypt
- Prisma (preparado)
- PostgreSQL (preparado)

## Suporte

Para questões ou melhorias, abra uma issue no repositório.

---

**App pronto para uso!** 🚀
