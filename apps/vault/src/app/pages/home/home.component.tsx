import AppButton from '../../core/components/button/button.component';

const AppHome = () => {
  return (
    <main id="app-main" className="m-12">
      <div className="container mx-auto py-12 flex flex-col gap-12">
        <div>
          <h1 className="text-4xl font-bold">Vault</h1>
          <span className="text-sm font-medium text-stone-600">
            A couple of projects to get familiar with the React framework.
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <AppButton to="/projects/tip-calculator">Tip Calculator</AppButton>
          <AppButton to="/projects/welcome-message">Welcome Message</AppButton>
          <AppButton to="/projects/coin-toss">Coin Toss</AppButton>
        </div>
      </div>
    </main>
  );
};

export default AppHome;
