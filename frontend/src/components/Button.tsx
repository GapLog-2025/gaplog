// 임시 버튼 컴포넌트 생성

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-blue-500 text-white"
    >
      {children}
    </button>
  );
};

export default Button;
