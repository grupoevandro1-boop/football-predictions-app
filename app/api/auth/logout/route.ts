import { NextResponse } from 'next/server';
import { setSessionCookie, signToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries() as Iterable<[string, FormDataEntryValue]>);

    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Nome, email e senha são obrigatórios.' }, { status: 400 });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
    }

    const { getUserByEmail, hashPassword, createUserRecord, users } = await import('@/lib/store');
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      const response = NextResponse.json({ error: 'Este email já está cadastrado.' }, { status: 409 });
      if (!contentType.includes('application/json')) {
        return NextResponse.redirect(new URL('/auth/register?error=exists', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
      }
      return response;
    }

    const passwordHash = await hashPassword(password);
    const newUser = createUserRecord(name, email, passwordHash);
    users.push(newUser);

    const token = signToken({ userId: newUser.id, email: newUser.email, name: newUser.name });
    setSessionCookie(token);

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
    }

    return NextResponse.json({
      ok: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch {
    return NextResponse.json({ error: 'Erro ao registrar usuário.' }, { status: 500 });
  }
}
