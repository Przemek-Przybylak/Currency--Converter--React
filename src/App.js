import { useState } from 'react';
import { Form } from './Form';
import { currencies } from './Form/currencies';
import { Container } from "./Container";

function App() {
  const [result, setResult] = useState();

  const getResult = (currency, amount) => {
    if (amount <= 0)
    return "";
    
    const rate = currencies.find(
      ({ name }) => name === currency).rate

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency
    })
  };

  return (
    <Container >
      <Form
        result={result}
        getResult={getResult} />
    </ Container>
  );
}

export default App;
