import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
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
      return NextResponse.json({ error: 'Este email já está cadastrado.' }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const newUser = createUserRecord(name, email, passwordHash);
    users.push(newUser);

    return NextResponse.json({
      ok: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao registrar usuário.' }, { status: 500 });
  }
}
