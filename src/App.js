import { Form } from './Form';
import { Container } from "./Container";
import { useCurrentData } from './Form/useCurrentData';

function App(result, getResult) {
  const currenciess = useCurrentData();

  return (
    <Container >
      <Form
        result={result}
        currenciess={currenciess}
        getResult={getResult} />
    </ Container>
  );
};

export default App;
