import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata = {
  title: 'Futebol Prognósticos',
  description: 'Aplicativo de prognósticos e palpites de futebol.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
