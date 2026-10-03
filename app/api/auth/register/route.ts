import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Nome, email e senha são obrigatórios.' }, { status: 400 });
  }

  const { getUserByEmail, hashPassword, createUserRecord, users } = await import('@/lib/store');
  const existingUser = getUserByEmail(email);

  if (existingUser) {
    return NextResponse.json({ error: 'Este email já está cadastrado.' }, { status: 409 });
  }

  const user = createUserRecord(name, email, await hashPassword(password));
  users.push(user);

  return NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
}
