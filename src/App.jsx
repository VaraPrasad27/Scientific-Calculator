import {
  complexLabels,
  hypLabels,
  inverseHypLabels,
  inverseTriLabel,
  numOperatorsLabels,
  triLabels,
} from './constants/constants.js';
import { useEffect, useState } from 'react';
import calculations from './calculations.js';
import clsx from 'clsx';

function App() {
  const [displayArray, setDisplayArray] = useState([]);
  const [expressionArray, setExpressionArray] = useState([]);
  const [dynamicBtns, setDynamicBtns] = useState(triLabels);

  useEffect(() => {
    console.log(displayArray);
    console.log(expressionArray);
  }, [displayArray, expressionArray]);

  const handleClick = event => {
    const { value, innerText } = event.target;
    console.log(innerText);

    switch (value) {
      case 'ac':
        setDisplayArray([]);
        setExpressionArray([]);
        break;
      case 'del':
        setDisplayArray(prevState => prevState.slice(0, -1));
        setExpressionArray(prevState => prevState.slice(0, -1));
        break;
      case '=':
        try {
          const result = calculations(expressionArray);
          setExpressionArray([result]);
          setDisplayArray([result]);
        } catch {
          setDisplayArray(['Error']);
        }
        break;
      case 'tri':
        setDynamicBtns(triLabels);
        break;
      case 'arc':
        setDynamicBtns(inverseTriLabel);
        break;
      case 'hyp':
        setDynamicBtns(hypLabels);
        break;
      case 'ahyp':
        setDynamicBtns(inverseHypLabels);
        break;
      default:
        setDisplayArray(prevState => [...prevState, innerText]);
        setExpressionArray(prevState => [...prevState, value]);
        break;
    }
  };

  return (
    <div className="h-fit w-1/4 m-5 flex flex-col items-center bg-[hsl(0,0%,5%)] rounded-2xl">
      <section className="h-30 w-full mb-2">
        <div className="h-full w-full p-5 bg-black text-white text-4xl rounded-2xl">
          {displayArray.join(' ')}
        </div>
      </section>

      <div className="mb-5 flex flex-col gap-2">
        <section
          id="sci-operators"
          className="grid grid-cols-6 gap-2 gap-x-0 justify-items-center place-items-center"
        >
          {complexLabels.map(({ label, value }) => (
            <button
              key={label}
              className="w-10 h-10 rounded-[40px] bg-[hsl(0,0%,10%)] text-white"
              value={value}
              onClick={handleClick}
            >
              {label}
            </button>
          ))}
          {dynamicBtns.map(({ label, value }) => (
            <button
              key={label}
              className="w-12 h-7 rounded-[40px] text-xs bg-[hsl(0,0%,10%)] text-white"
              value={value}
              onClick={handleClick}
            >
              {label}
            </button>
          ))}
        </section>
        <section
          id="num-oper"
          className="grid grid-cols-5 gap-2 justify-items-center"
        >
          {numOperatorsLabels.map(({ label, value }) => (
            <button
              key={label}
              className={clsx(
                'w-10 h-10 rounded-[40px] bg-[hsl(0,0%,10%)] text-white',
                {
                  'bg-red-600 text-white font-bold':
                    value === 'ac' || value === 'del',
                }
              )}
              value={value}
              onClick={handleClick}
            >
              {label}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
