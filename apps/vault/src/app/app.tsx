import { Route, Routes } from 'react-router-dom';
import AppCoinToss from './pages/coin-toss/coin-toss.component';
import AppHome from './pages/home/home.component';
import AppProjects from './pages/projects/projects.components';
import AppRockPaperScissors from './pages/rock-paper-scissors/rock-paper-scissors.component';
import AppTipCalculator from './pages/tip-calculator/tip-calculator.component';
import AppWelcomeMessage from './pages/welcome-message/welcome-message.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/projects" element={<AppProjects />}>
        <Route path="tip-calculator" element={<AppTipCalculator />} />
        <Route path="welcome-message" element={<AppWelcomeMessage />} />
        <Route path="coin-toss" element={<AppCoinToss />} />
        <Route path="rock-paper-scissors" element={<AppRockPaperScissors />} />
      </Route>
    </Routes>
  );
};

export default App;
