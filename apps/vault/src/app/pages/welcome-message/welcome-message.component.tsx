import { ChangeEvent, useState } from 'react';

const AppWelcomeMessage = () => {
  const [title, setTitle] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleClick = () => {
    setTitle('');
  };

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      {title ? (
        <h3 className="flex text-2xl font-bold mb-10 capitalize">{`Welcome ${title}!`}</h3>
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
    </div>
  );
};

export default AppWelcomeMessage;
