import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppHome = () => {
  return (
    <main id="app-main">
      <div className="mb-8">
        <Link to="/tip-calculator">Tip Calculator</Link>
      </div>
    </main>
  );
};

export default AppHome;
