import { NextResponse } from 'next/server';
import { getSessionFromCookies } from '@/lib/auth';

export async function GET() {
  const session = await getSessionFromCookies();

  if (!session) {
    return NextResponse.json({ ok: false, predictions: [] }, { status: 401 });
  }

  const { predictions } = await import('@/lib/store');
  const userPredictions = predictions.filter((item) => item.userId === session.userId);

  return NextResponse.json({
    ok: true,
    predictions: userPredictions,
  });
}

export async function POST(request: Request) {
  try {
    const session = await getSessionFromCookies();

    if (!session) {
      return NextResponse.json({ error: 'Você precisa estar autenticado.' }, { status: 401 });
    }

    const body = await request.json();
    const { fixtureId, fixtureLabel, homeScore, awayScore, confidence, market } = body ?? {};

    if (!fixtureId || !fixtureLabel || !market) {
      return NextResponse.json({ error: 'Dados insuficientes do palpite.' }, { status: 400 });
    }

    const { createPredictionRecord, predictions } = await import('@/lib/store');
    const prediction = createPredictionRecord(
      session.userId,
      String(fixtureId),
      String(fixtureLabel),
      Number(homeScore ?? 0),
      Number(awayScore ?? 0),
      Number(confidence ?? 0),
      String(market),
    );

    predictions.push(prediction);

    return NextResponse.json({ ok: true, prediction });
  } catch {
    return NextResponse.json({ error: 'Erro ao registrar palpite.' }, { status: 500 });
  }
}
