import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppRockPaperScissors = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.substring(10).split('-').join(' ');

  const [computerScore, setComputerScore] = useState('');
  const [playerScore, setPlayerScore] = useState('');
  const [winner, setWinner] = useState('');
  const [init, setInit] = useState(false);
  const [score, setScore] = useState({ computer: 0, player: 0, draw: 0 });

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const playerChoice = event.currentTarget.id;
    const computerChoice = Number(Math.random().toFixed(2));

    setPlayerScore(playerChoice);

    if (computerChoice < 0.33) {
      setComputerScore('rock');
    } else if (computerChoice > 0.33 && computerChoice < 0.66) {
      setComputerScore('paper');
    } else {
      setComputerScore('scissors');
    }

    if (!init) setInit(true);
  };

  const itIsDraw = () => {
    setWinner('draw');
    setScore((initScore) => {
      return { ...initScore, draw: initScore.draw + 1 };
    });
  };

  const computerWins = () => {
    setWinner('Computer');
    setScore((initScore) => {
      return { ...initScore, computer: initScore.computer + 1 };
    });
  };

  const playerWins = () => {
    setWinner('Player');
    setScore((initScore) => {
      return { ...initScore, player: initScore.player + 1 };
    });
  };

  const checkWinner = useCallback(() => {
    if (computerScore === playerScore) {
      itIsDraw();
    } else {
      if (computerScore === 'rock') {
        if (playerScore === 'scissors') {
          computerWins();
        } else if (playerScore === 'paper') {
          playerWins();
        }
      } else if (computerScore === 'scissors') {
        if (playerScore === 'paper') {
          computerWins();
        } else if (playerScore === 'rock') {
          playerWins();
        }
      } else if (computerScore === 'paper') {
        if (playerScore === 'rock') {
          computerWins();
        } else if (playerScore === 'scissors') {
          playerWins();
        }
      }
    }
  }, [computerScore, playerScore]);

  useEffect(() => {
    if (!init) return;
    checkWinner();
    setInit(false);
  }, [init, checkWinner]);

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
          <div className="font-medium text-sm">
            Draws:{' '}
            <span className="text-amber-400 font-bold">{score.draw}</span>
          </div>
        </div>

        {winner ? (
          <div className="flex flex-col">
            <h5 className="font-medium text-sm normal-case">
              Computer selected:{' '}
              <span className="font-bold">{computerScore}</span>, Player
              selected: <span className="font-bold">{playerScore}</span>
            </h5>
            {winner !== 'draw' ? (
              <h5 className="font-medium text-sm normal-case">
                <span className="font-bold">{winner}</span> wins!
              </h5>
            ) : (
              <h5 className="font-medium text-sm normal-case">
                <span className="font-bold">It is a draw!</span>
              </h5>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="font-bold text-md normal-case">
              Pick one at random
            </h3>
          </div>
        )}
      </div>

      <div className="mb-2 flex gap-3 ">
        <button
          id="rock"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Rock
        </button>
        <button
          id="paper"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Paper
        </button>
        <button
          id="scissors"
          className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
          onClick={handleOnClick}
        >
          Scissors
        </button>
      </div>
    </div>
  );
};

export default AppRockPaperScissors;
