import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false); // Track whether to show the result

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evaluatedResult = eval(input); // Evaluate the expression
        setResult(evaluatedResult.toString()); 
        setShowResult(true); // Show the result
      } catch (error) {
        setResult('Error');
        setShowResult(true); 
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
      setShowResult(false); // Clear everything
    } else {
      if (showResult) {
        // If the result is currently displayed, start a new input
        setInput(value);
        setShowResult(false);
      } else {
        // Otherwise, continue building the expression
        setInput(input + value);
      }
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <Display input={input} result={result} showResult={showResult} />
        <div className="buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
