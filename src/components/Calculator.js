import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

import { useState } from 'react';

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [screenValue, setScreenValue] = useState('0');
  const [screenStack, setScreenStack] = useState('');

  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (screenValue === '0') {
      setScreenValue(value);
    } else {
      setScreenValue(screenValue + value);
    }

  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value === 'clear') {
      setOperand('');
      setOperator('');
      setScreenValue('0');
      setScreenStack('');
    } else if (value === '=') {
      let operand1 = 0;
      let operand2 = 0;
      let answer = 0;
      try {
        operand1 = parseInt(operand);
        operand2 = parseInt(screenValue);
      } catch (ex) {
        console.log(ex);
        setScreenValue('Error');
        return;
      }
      try {
        switch (operator) {
          case '+':
            answer = operand1 + operand2;
            break;
          case '/':
            answer = operand1 / operand2;
            break;
          case '*':
            answer = operand1 * operand2;
            break;
          case '-':
            answer = operand1 - operand2;
            break;
          default:
            console.log('Error!');
            setScreenValue('Error');
        }
        setScreenValue(answer + '');
        setScreenStack(screenStack + screenValue + ' = ' + answer);
        setOperator('');
        setOperand('')
      } catch (ex) {
        console.log(ex);
        setScreenValue('Error');
      }
    } else {
      setOperand(screenValue);
      setOperator(value);
      setScreenValue('0');
      if (operator === '') {
        setScreenStack(screenValue + ' ' + value);
      } else {
        setScreenStack(screenStack + screenValue + ' ' + value);
      }
    }
  };

  return (
    <div>
      <Screen value={screenValue} stack={screenStack} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 27 }}>
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
        <div style={{ paddingLeft: 27 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
