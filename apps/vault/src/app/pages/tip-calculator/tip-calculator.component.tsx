import { ChangeEvent, Fragment, useEffect, useState } from 'react';

const AppTipCalculator = () => {
  const [inputValue, setInputValue] = useState<string | number>('');
  const [tip, setTip] = useState(0);
  const [validInput, setvalidInput] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (isNaN(Number(value))) {
      setvalidInput(true);
      return;
    } else {
      setvalidInput(false);
    }

    setInputValue(value);
  };

  const handleClick = () => {
    setInputValue('');
    setvalidInput(false);
  };

  useEffect(() => {
    const inputValueAsNumber = Number(inputValue);
    if (isNaN(inputValueAsNumber)) {
      return;
    }

    const tipFormula = inputValueAsNumber + inputValueAsNumber * 0.15;
    setTip(tipFormula);
  }, [inputValue]);

  return (
    <Fragment>
      <div className="mb-2 flex gap-4 ">
        <input
          className="flex grow border-2 border-amber-100 rounded p-1 focus:border-amber-300 outline-none"
          type="text"
          value={inputValue}
          placeholder="Enter Cost"
          onChange={handleOnChange}
        />
        <button
          className="px-6 py-1 rounded bg-amber-300"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
      {validInput && (
        <span className="flex text-amber-500 text-xs mb-2">
          Please enter a number!
        </span>
      )}

      {inputValue && (
        <span className="flex">{`You should tip £${tip} on £${inputValue}.`}</span>
      )}
    </Fragment>
  );
};

export default AppTipCalculator;
