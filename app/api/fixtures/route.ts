import { NextResponse } from 'next/server';
import { fixtures } from '@/lib/football';

export async function GET() {
  return NextResponse.json({ fixtures });
}
