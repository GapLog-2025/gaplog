import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';

interface LayoutProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export default function Layout({ children, aside }: LayoutProps) {
  return (
    <div className="flex flex-col w-full h-full ">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="flex flex-1 justify-center w-full pt-40">
        <div className="w-full px-10 pt-14">
          <div className="flex justify-between w-full min-w-[1024px] max-w-[1440px] mx-auto">
            <main className="w-[65%]">{children}</main>
            {aside && <Aside>{aside}</Aside>}
          </div>
        </div>
      </div>

      {/* Fotter */}
      <Footer />
    </div>
  );
}
