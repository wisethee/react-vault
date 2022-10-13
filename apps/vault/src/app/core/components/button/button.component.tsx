import React from 'react';
import { Link } from 'react-router-dom';

type AppButtonProps = {
  children: React.ReactNode;
  to: string;
};

const AppButton = ({ children, to }: AppButtonProps) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 bg-amber-300 rounded text-sm font-medium hover:bg-amber-400"
    >
      {children}
    </Link>
  );
};

export default AppButton;
