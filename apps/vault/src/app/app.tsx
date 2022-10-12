import { Route, Routes } from 'react-router-dom';
import AppHome from './pages/home/home.component';
import AppTipCalculator from './pages/tip-calculator/tip-calculator.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/tip-calculator" element={<AppTipCalculator />} />
    </Routes>
  );
};

export default App;
