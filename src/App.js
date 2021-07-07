import { useState } from 'react';
import logo from './logo.svg';
import Form from './Form';
import Section from './Section';
import Container from "./Container";


function App() {

  const [amount, setAmount] = useState();
  const [resultValue, setResultValue] = useState();

  return (
    <Container >
      <Form />
      <Section />
    </ Container>
  );
}

export default App;
