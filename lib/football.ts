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
];

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

export async function getFixtures() {
  return fixtures;
}
