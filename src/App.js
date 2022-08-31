import { useState, useEffect } from "react";

function App() {
  const [calculator, setCalculator] = useState("")
  const [result, setResult] = useState("")
  const signs = ['+', '-', '*', '/', '.']

  const inputToCalculator = (input) => {
      if (signs.includes(input) && calculator === '' || 
          signs.includes(input) && signs.includes(calculator.slice(-1))) {
        return;
      }
      setCalculator(calculator + input)

      if (!signs.includes(input)) {
        setResult(eval(calculator + input).toString())
      }
  }

  const runCalculator = () => {
    setCalculator(eval(calculator).toString())
  }

  const deleteButton = () => {
    if (calculator == '') {
      return;
    } else {
      const val = calculator.replace(calculator, "")
      setCalculator(val)
    }
  }

  return (
    <div className="App">
        <div className="calc">
          <div className="westernlogo">
            Western Express
          </div>
          <div className="calcdisplay">
              { calculator || "0" }
          </div>

          <div className="mathSigns">
              <button onClick={() => inputToCalculator('+')}>+</button>
              <button onClick={() => inputToCalculator('-')}>-</button>
              <button onClick={() => inputToCalculator('*')}>*</button>
              <button onClick={() => inputToCalculator('/')}>/</button>
              <button onClick={() => deleteButton()}>C</button>
          </div>

          <div className="numbers">
              <button onClick={() => inputToCalculator('1')}>1</button>
              <button onClick={() => inputToCalculator('2')}>2</button>
              <button onClick={() => inputToCalculator('3')}>3</button>
              <button onClick={() => inputToCalculator('4')}>4</button>
              <button onClick={() => inputToCalculator('5')}>5</button>
              <button onClick={() => inputToCalculator('6')}>6</button>
              <button onClick={() => inputToCalculator('7')}>7</button>
              <button onClick={() => inputToCalculator('8')}>8</button>
              <button onClick={() => inputToCalculator('9')}>9</button>
              <button onClick={() => inputToCalculator('.')}>.</button>
              <button onClick={() => inputToCalculator('0')}>0</button>
              <button onClick={() => runCalculator()}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
