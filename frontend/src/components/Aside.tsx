import React from 'react';

export default function Aside({ children }: { children: React.ReactNode }) {
  return <aside className="w-[30%] flex flex-col gap-6">{children}</aside>;
}
