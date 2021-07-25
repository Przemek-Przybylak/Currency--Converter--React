import { Form } from './Form';
import { Container } from "./Container";

function App(result, getResult) {

  return (
    <Container >
      <Form
        result={result}
        getResult={getResult} />
    </ Container>
  );
};

export default App;
