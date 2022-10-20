import { Route, Routes } from 'react-router-dom';
import AppCoinToss from './pages/coin-toss/coin-toss.component';
import AppDadJokes from './pages/dad-jokes/dad-jokes.component';
import AppDiceGame from './pages/dice-game/dice-game.component';
import AppHome from './pages/home/home.component';
import AppProducts from './pages/products/products.component';
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
        <Route path="dice-game" element={<AppDiceGame />} />
        <Route path="dad-jokes" element={<AppDadJokes />} />
        <Route path="products" element={<AppProducts />} />
      </Route>
    </Routes>
  );
};

export default App;
