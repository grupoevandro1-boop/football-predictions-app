export async function GET() {
  return Response.json({
    ok: true,
    app: 'football-predictions-app',
    status: 'running',
  });
}
