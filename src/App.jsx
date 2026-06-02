import { numOperatorsLabels } from './constants/constants.js';
import { useEffect, useState } from 'react';
import calculations from './calculations.js';
import { evaluate } from 'mathjs';

function App() {
  const [displayArray, setDisplayArray] = useState([]);
  const [expressionArray, setExpressionArray] = useState([]);

  useEffect(() => {
    console.log(displayArray);
    console.log(expressionArray);
    console.log(evaluate('sin(90)'));
  }, [displayArray, expressionArray]);

  const handleClick = event => {
    const { value, innerText } = event.target;
    console.log(innerText);
    if (value === 'ac') {
      setDisplayArray([]);
      setExpressionArray([]);
    } else if (value === 'del') {
      setDisplayArray(prevState => prevState.slice(0, -1));
      setExpressionArray(prevState => prevState.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = calculations(expressionArray);
        setExpressionArray([result]);
        setDisplayArray([result]);
      } catch {
        setDisplayArray(['Error']);
      }
    } else {
      setDisplayArray(prevState => [...prevState, innerText]);
      setExpressionArray(prevState => [...prevState, value]);
    }
  };

  return (
    <div>
      <section className="h-40 w-full">
        <div className="h-full w-full">{displayArray.join(' ')}</div>
      </section>

      <div className="w-full">
        <section className="w-1/2 grid grid-cols-5 gap-2 justify-items-center">
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
