import { MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppCoinToss = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.substring(10).split('-').join(' ');

  const [playerScore, setPlayerScore] = useState('');
  const [computerScore, setComputerScore] = useState('');
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState(() => ({ player: 0, computer: 0 }));

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const playerChoice = event.currentTarget.id;
    const computerChoice = Math.round(Math.random());

    computerChoice === 0
      ? setComputerScore('tails')
      : setComputerScore('heads');

    setPlayerScore(playerChoice);

    if (playerScore !== computerScore) {
      setWinner('Computer');
      setScore((initialScore) => {
        return { ...initialScore, computer: initialScore.computer + 1 };
      });
    } else if (playerScore === computerScore) {
      setWinner('Player');
      setScore((initialScore) => {
        return { ...initialScore, player: initialScore.player + 1 };
      });
    }
  };

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      <h3 className="flex text-2xl font-bold mb-10 capitalize">{pageTitle}</h3>

      <div className="mb-6 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="font-medium text-sm">
            Computer:{' '}
            <span className="text-amber-400 font-bold">{score.computer}</span>
          </div>
          <div className="font-medium text-sm">
            Player:{' '}
            <span className="text-amber-400 font-bold">{score.player}</span>
          </div>
        </div>

        {winner ? (
          <div className="flex flex-col">
            <h5 className="font-medium text-sm normal-case">
              Computer selected:{' '}
              <span className="font-bold">{computerScore}</span>.
            </h5>
            <h5 className="font-medium text-sm normal-case">
              <span className="font-bold">{winner}</span> wins!
            </h5>
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="font-bold text-md normal-case">
              Select Either Heads or Tails
            </h3>
          </div>
        )}
      </div>

      <div className="mb-2 flex gap-3 ">
        <button
          id="heads"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Heads
        </button>
        <button
          id="tails"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Tails
        </button>
      </div>
    </div>
  );
};

export default AppCoinToss;
