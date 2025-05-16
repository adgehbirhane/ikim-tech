import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
} 