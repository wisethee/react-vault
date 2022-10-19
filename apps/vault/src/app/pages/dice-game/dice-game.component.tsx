import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppDiceGame = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.substring(10).split('-').join(' ');

  const [p1Score, setP1Score] = useState<number | string>('');
  const [p2Score, setP2Score] = useState<number | string>('');
  const [winner, setWinner] = useState<number | string>('');
  const [init, setInit] = useState(false);

  const handleOnClick = () => {
    const player1Score = 1 + Math.floor(Math.random() * 6);
    const player2Score = 1 + Math.floor(Math.random() * 6);

    setP1Score(player1Score);
    setP2Score(player2Score);

    if (!init) setInit(true);

    console.log(player1Score, player2Score);
  };

  useEffect(() => {
    if (!init) return;

    if (p1Score === p2Score) {
      setWinner('draw');
    } else {
      p1Score > p2Score ? setWinner('player 1') : setWinner('player 2');
    }
    setInit(false);
  }, [init, p1Score, p2Score]);

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      <h3 className="flex text-2xl font-bold mb-10 capitalize">{pageTitle}</h3>
      {winner === 'draw' ? (
        <div className="mb-4 font-medium text-sm">
          It is a <span className="text-amber-400 font-bold">{winner}</span>
        </div>
      ) : (
        winner && (
          <div className="mb-4 font-medium text-sm">
            Winner: <span className="text-amber-400 font-bold">{winner}</span>
          </div>
        )
      )}
      <div className="mb-4 flex gap-4">
        {p1Score && (
          <div className="flex flex-col justify-center">
            <span className="mb-1 text-xs">Player 1</span>
            <img
              src={`../../../assets/icons/dice-${p1Score}.svg`}
              alt={`dice-${p1Score}`}
            />
          </div>
        )}
        {p2Score && (
          <div className="flex flex-col justify-center">
            <span className="mb-1 text-xs">Player 2</span>
            <img
              src={`../../../assets/icons/dice-${p2Score}.svg`}
              alt={`dice-${p2Score}`}
            />
          </div>
        )}
      </div>
      <div>
        <button
          id="rock"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default AppDiceGame;
