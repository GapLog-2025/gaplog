import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';

interface LayoutProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export default function Layout({ children, aside }: LayoutProps) {
  return (
    <div className="flex flex-col w-screen h-screen ">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="flex flex-1 justify-center pt-14 mx-auto gap-14 w-full px-4 lg:px-10 min-w-[1024px] lg:max-w-[1440px] ">
        {/* Main Content Area */}
        <main className="flex-none w-[665px] lg:min-w-[65%]">{children}</main>
        {/* Right Aside (optional) */}
        {aside && <Aside>{aside}</Aside>}
      </div>
      {/* Fotter */}
      <Footer />
    </div>
  );
}
