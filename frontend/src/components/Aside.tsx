import React from 'react';

export default function Aside({ children }: { children: React.ReactNode }) {
  return <aside className="w-[405px] flex flex-col gap-6">{children}</aside>;
}
