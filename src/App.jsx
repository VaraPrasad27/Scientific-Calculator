import {
  complexLabels,
  constValuesLabels,
  hypLabels,
  inverseHypLabels,
  inverseTriLabel,
  numOperatorsLabels,
  triLabels,
} from './constants/constants.js';
import { useEffect, useState } from 'react';
import calculations from './calculations.js';

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
    <div className="flex flex-col">
      <section className="h-40 w-full">
        <div className="h-full w-full">{displayArray.join(' ')}</div>
      </section>

      <div className="w-full flex flex-row gap-2">
        <section
          id="sci-operators"
          className="grid grid-cols-5 gap-2 justify-items-center"
        >
          {complexLabels.map(({ label, value }) => (
            <button
              key={label}
              className="w-20 h-10 border rounded-[40px]"
              value={value}
              onClick={handleClick}
            >
              {label}
            </button>
          ))}
          {dynamicBtns.map(({ label, value }) => (
            <button
              key={label}
              className="w-20 h-10 border rounded-[40px]"
              value={value}
              onClick={handleClick}
            >
              {label}
            </button>
          ))}
          {constValuesLabels.map(({ label, value }) => (
            <button
              key={label}
              className="w-20 h-10 border rounded-[40px]"
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
              className="w-10 h-10 border rounded-[40px]"
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
