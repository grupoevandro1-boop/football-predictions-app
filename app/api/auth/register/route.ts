import { NextResponse } from 'next/server';
import { setSessionCookie, signToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries() as Iterable<[string, FormDataEntryValue]>);

    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    const { getUserByEmail, verifyPassword } = await import('@/lib/store');
    const user = getUserByEmail(String(email));

    if (!user) {
      const response = NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
      if (!contentType.includes('application/json')) {
        return NextResponse.redirect(new URL('/auth/login?error=invalid', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
      }
      return response;
    }

    const validPassword = await verifyPassword(String(password), user.passwordHash);
    if (!validPassword) {
      if (!contentType.includes('application/json')) {
        return NextResponse.redirect(new URL('/auth/login?error=invalid', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
      }
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    const token = signToken({ userId: user.id, email: user.email, name: user.name });
    setSessionCookie(token);

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
    }

    return NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch {
    return NextResponse.json({ error: 'Erro no login.' }, { status: 500 });
  }
}
