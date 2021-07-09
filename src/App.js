import { useState } from 'react';
import Form from './Form';
import Section from './Section';
import Container from "./Container";


function App() {

  const eur = 4.55;
    

  const clearAmount = () =>{ 
    setAmount(amount => amount = "")
  }

  const clearCurrency = () => {
    setCurrency(currency => currency =  eur)
  }

  const [currency, setCurrency] = useState("");

  const onSelectChange = ({target}) => setCurrency(target.value);

  const [amount, setAmount] = useState("");

  const onInputChange = ({target}) => setAmount(target.value);

  const getResult = () => {
    setResultValue(resultValue => resultValue = amount/currency )
  };

  const [resultValue, setResultValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    getResult();
    clearAmount();
    clearCurrency();
    console.log(amount);
    console.log(currency);
    console.log(resultValue);
    
  }

  return (
    <Container >
      <Form 
      amount={amount} 
      currency={currency}  
      onFormSubmit={onFormSubmit} 
      onInputChange={onInputChange}
      onSelectChange={onSelectChange} />
      <Section result={resultValue} />
    </ Container>
  );
}

export default App;
