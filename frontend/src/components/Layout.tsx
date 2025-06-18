import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';

interface LayoutProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export default function Layout({ children, aside }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen px-20">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="flex flex-1 w-full pt-14 max-w-[1440px] mx-auto gap-[33px]">
        {/* Main Content Area */}
        <main className="w-[842px] flex-none">{children}</main>
        {/* Right Aside (optional) */}
        {aside && <Aside>{aside}</Aside>}
      </div>
      {/* Fotter */}
      <Footer />
    </div>
  );
}
