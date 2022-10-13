import { ChangeEvent, useEffect, useState } from 'react';

type DayTime = 'morning' | 'afternoon' | 'evening';

const AppWelcomeMessage = () => {
  const [title, setTitle] = useState<string>('');
  const [dayTime, setDayTime] = useState<DayTime>('morning');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleClick = () => {
    setTitle('');
  };

  useEffect(() => {
    const timeNow = new Date(Date.now());
    const hours = timeNow.getHours();

    if (hours >= 0 && hours < 12) {
      setDayTime('morning');
    } else if (hours >= 12 && hours < 18) {
      setDayTime('afternoon');
    } else {
      setDayTime('evening');
    }
  }, []);

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      {title ? (
        <h3 className="flex text-2xl font-bold mb-10 normal-case">
          {`Good ${dayTime}`}
          <span className="ml-1 capitalize text-amber-400">{`${title}!`}</span>
        </h3>
      ) : (
        <h3 className="flex text-2xl font-bold mb-10 capitalize">{`Welcome Stranger!`}</h3>
      )}
      <div className="mb-2 flex gap-4 ">
        <input
          className="flex grow border-2 border-amber-100 rounded p-1 focus:border-amber-300 outline-none"
          type="text"
          value={title}
          placeholder="Enter Your Name"
          onChange={handleOnChange}
        />
        <button
          className="px-6 py-1 rounded bg-amber-300"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
      {!title && (
        <span className="flex text-amber-400 text-xs mb-2">
          Please enter your name!
        </span>
      )}
    </div>
  );
};

export default AppWelcomeMessage;
