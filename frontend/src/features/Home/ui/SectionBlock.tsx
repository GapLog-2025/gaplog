import type React from 'react';

type SectionBlockProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <section className="w-full flex flex-col items-start gap-6 ">
      <p className="typo-subheading text-main">{title}</p>
      <div className="w-full flex justify-between items-center">{children}</div>
    </section>
  );
}
