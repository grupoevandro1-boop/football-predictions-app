import { NextResponse } from 'next/server';
import { getSessionFromCookies } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getSessionFromCookies();

    if (!session) {
      return NextResponse.json({ error: 'Você precisa estar autenticado.' }, { status: 401 });
    }

    const formData = await request.formData();
    const fixtureId = String(formData.get('fixtureId') ?? '');
    const fixtureLabel = String(formData.get('fixtureLabel') ?? '');
    const homeScore = Number(formData.get('homeScore') ?? 0);
    const awayScore = Number(formData.get('drawScore') ?? 0);
    const confidence = Number(formData.get('confidence') ?? 0);
    const market = String(formData.get('market') ?? 'classic');

    if (!fixtureId || !fixtureLabel || !market) {
      return NextResponse.json({ error: 'Dados insuficientes do palpite.' }, { status: 400 });
    }

    const { createPredictionRecord, predictions } = await import('@/lib/store');
    const prediction = createPredictionRecord(
      session.userId,
      fixtureId,
      fixtureLabel,
      homeScore,
      awayScore,
      confidence,
      market,
    );

    predictions.push(prediction);

    return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
  } catch {
    return NextResponse.json({ error: 'Erro ao registrar palpite.' }, { status: 500 });
  }
}
