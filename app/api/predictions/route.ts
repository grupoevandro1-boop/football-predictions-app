import { NextResponse } from 'next/server';
import { getFixtures } from '@/lib/football';

export async function GET() {
  const fixtures = await getFixtures();

  return NextResponse.json({
    ok: true,
    source: process.env.SPORTS_API_KEY ? 'external' : 'mock',
    fixtures,
  });
}
