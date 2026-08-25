import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimatedBackground from './components/AnimatedBackground';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TikBoost - SMM Panel',
  description: 'Boost TikTok views, likes & followers instantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AnimatedBackground />
        <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">TikBoost</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Beranda</a>
            <a href="#" className="hover:text-white transition">Layanan</a>
            <a href="#" className="hover:text-white transition">Harga</a>
            <a href="#" className="hover:text-white transition">Dashboard</a>
          </div>
        </nav>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
