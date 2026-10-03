import { NextResponse } from 'next/server';
import { setSessionCookie, signToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    const { getUserByEmail, verifyPassword } = await import('@/lib/store');
    const user = getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    const validPassword = await verifyPassword(password, user.passwordHash);
    if (!validPassword) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    const token = signToken({ userId: user.id, email: user.email, name: user.name });
    setSessionCookie(token);

    return NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch {
    return NextResponse.json({ error: 'Erro no login.' }, { status: 500 });
  }
}
