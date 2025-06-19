import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';

interface LayoutProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export default function Layout({ children, aside }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="flex flex-1 w-full min-w-[1440px] pt-14 mx-auto justify-between px-40 ">
        {/* Main Content Area */}
        <main className="flex-none min-w-[850px]">{children}</main>
        {/* Right Aside (optional) */}
        {aside && <Aside>{aside}</Aside>}
      </div>
      {/* Fotter */}
      <Footer />
    </div>
  );
}
