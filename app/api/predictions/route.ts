import { NextResponse } from 'next/server';
import { setSessionCookie, signToken } from '@/lib/auth';
import { fixtures } from '@/lib/football';

export async function GET() {
  return NextResponse.json({ fixtures });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fixtureId, fixtureLabel, homeScore, awayScore, confidence, market } = body ?? {};

    if (!fixtureId || !fixtureLabel || !market) {
      return NextResponse.json({ error: 'Dados insuficientes do palpite.' }, { status: 400 });
    }

    const { getSessionFromCookies } = await import('@/lib/auth');
    const session = await getSessionFromCookies();

    if (!session) {
      return NextResponse.json({ error: 'Você precisa estar autenticado.' }, { status: 401 });
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
