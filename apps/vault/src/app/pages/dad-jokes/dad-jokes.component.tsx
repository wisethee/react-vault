import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppDadJokes = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.substring(10).split('-').join(' ');

  const [data, setData] = useState('');
  const [change, setChange] = useState(false);

  const handleOnClick = useCallback(() => {
    setChange(true);
  }, []);

  useEffect(() => {
    const jokes = async () => {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'learning app',
        },
      });
      const data = await response.json();
      setData(data.joke);
    };

    if (change) {
      jokes();
      setChange(false);
    }
  }, [change]);

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      <h3 className="flex text-2xl font-bold mb-10 capitalize">{pageTitle}</h3>
      {data && <div className="mb-4 flex gap-4">{data}</div>}
      <div className="mb-4 flex gap-4">
        <div>
          <button
            id="rock"
            className="px-6 py-1 rounded bg-amber-300 hover:bg-amber-400 text-sm"
            onClick={handleOnClick}
          >
            Tell A Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDadJokes;
