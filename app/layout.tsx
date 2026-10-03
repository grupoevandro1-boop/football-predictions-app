import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Futebol Prognósticos',
  description: 'Aplicativo de palpites e prognósticos de futebol',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
