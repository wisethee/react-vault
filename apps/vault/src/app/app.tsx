import { Route, Routes } from 'react-router-dom';
import AppHome from './pages/home/home.component';
import AppProjects from './pages/projects/projects.components';
import AppTipCalculator from './pages/tip-calculator/tip-calculator.component';
import AppWelcomeMessage from './pages/welcome-message/welcome-message.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/projects" element={<AppProjects />}>
        <Route path="/projects/tip-calculator" element={<AppTipCalculator />} />
        <Route
          path="/projects/welcome-message"
          element={<AppWelcomeMessage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
