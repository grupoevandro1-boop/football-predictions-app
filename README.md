export type Fixture = {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  kickoff: string;
  status: 'Ao vivo' | 'Hoje' | 'Próximo' | 'Encerrado';
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  form: {
    home: string;
    away: string;
  };
  prediction: string;
  confidence: number;
};

export const stats = [
  { label: 'Palpites totais', value: '1.248', tone: 'brand' },
  { label: 'Aproveitamento', value: '68.4%', tone: 'emerald' },
  { label: 'ROI médio', value: '+12.8%', tone: 'blue' },
] as const;

export const topLeagues = ['Premier League', 'LaLiga', 'Serie A', 'Bundesliga', 'Ligue 1'];

export const fixtures: Fixture[] = [
  {
    id: '1',
    league: 'Premier League',
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    kickoff: 'Hoje • 18:30',
    status: 'Hoje',
    odds: { home: 1.82, draw: 3.5, away: 3.95 },
    form: { home: 'W W D W', away: 'W D W L' },
    prediction: 'City 2-1',
    confidence: 76,
  },
  {
    id: '2',
    league: 'LaLiga',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    kickoff: 'Hoje • 21:00',
    status: 'Ao vivo',
    odds: { home: 2.1, draw: 3.3, away: 3.15 },
    form: { home: 'W W W D', away: 'D W W L' },
    prediction: 'Empate 2-2',
    confidence: 61,
  },
  {
    id: '3',
    league: 'Serie A',
    homeTeam: 'Juventus',
    awayTeam: 'Inter',
    kickoff: 'Amanhã • 16:00',
    status: 'Próximo',
    odds: { home: 2.55, draw: 3.2, away: 2.7 },
    form: { home: 'W D L W', away: 'W W D W' },
    prediction: 'Inter 1-0',
    confidence: 58,
  },
  {
    id: '4',
    league: 'Bundesliga',
    homeTeam: 'Bayern',
    awayTeam: 'Borussia Dortmund',
    kickoff: 'Hoje • 20:00',
    status: 'Hoje',
    odds: { home: 1.72, draw: 4.1, away: 5.2 },
    form: { home: 'W W W D', away: 'W L W D' },
    prediction: 'Bayern 3-1',
    confidence: 82,
  },
  {
    id: '5',
    league: 'Ligue 1',
    homeTeam: 'Paris Saint-Germain',
    awayTeam: 'Marseille',
    kickoff: 'Domingo • 17:00',
    status: 'Próximo',
    odds: { home: 1.58, draw: 4.2, away: 6.2 },
    form: { home: 'W W W W', away: 'W D L W' },
    prediction: 'PSG 2-0',
    confidence: 80,
  },
  {
    id: '6',
    league: 'Champions League',
    homeTeam: 'Liverpool',
    awayTeam: 'PSV',
    kickoff: 'Quarta • 19:45',
    status: 'Próximo',
    odds: { home: 1.38, draw: 5.2, away: 8.4 },
    form: { home: 'W W D W', away: 'W W L D' },
    prediction: 'Liverpool 2-1',
    confidence: 74,
  },
];

export async function fetchFixturesFromExternalApi(): Promise<Fixture[]> {
  const apiKey = process.env.SPORTS_API_KEY;
  const apiHost = process.env.SPORTS_API_HOST;

  if (!apiKey || !apiHost) {
    return fixtures;
  }

  try {
    const response = await fetch(`https://${apiHost}/fixtures?live=all`, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return fixtures;
    }

    const data = await response.json();
    const items = Array.isArray(data?.response) ? data.response.slice(0, 6) : [];

    if (!items.length) {
      return fixtures;
    }

    return items.map((match: any, index: number) => ({
      id: String(match.fixture?.id ?? index + 1),
      league: match.league?.name ?? `League ${index + 1}`,
      homeTeam: match.teams?.home?.name ?? `Home ${index + 1}`,
      awayTeam: match.teams?.away?.name ?? `Away ${index + 1}`,
      kickoff: match.fixture?.date ? new Date(match.fixture.date).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : fixtures[index]?.kickoff ?? 'Hoje',
      status: match.fixture?.status?.short === 'NS' ? 'Próximo' : 'Ao vivo',
      odds: {
        home: Number(match.bookmakers?.[0]?.bets?.[0]?.values?.[0]?.odd ?? fixtures[index]?.odds.home ?? 2.0),
        draw: Number(match.bookmakers?.[0]?.bets?.[0]?.values?.[1]?.odd ?? fixtures[index]?.odds.draw ?? 3.2),
        away: Number(match.bookmakers?.[0]?.bets?.[0]?.values?.[2]?.odd ?? fixtures[index]?.odds.away ?? 3.8),
      },
      form: {
        home: fixtures[index]?.form.home ?? 'W W D',
        away: fixtures[index]?.form.away ?? 'D W L',
      },
      prediction: fixtures[index]?.prediction ?? 'Home 1-0',
      confidence: fixtures[index]?.confidence ?? 72,
    }));
  } catch {
    return fixtures;
  }
}

export async function getFixtures() {
  return fetchFixturesFromExternalApi();
}
