import { useState } from "react";
import { Section } from "../Section";
import { Time } from "../Time";
import { useCurrentData } from "./useCurrentData";
import {
    StyledForm,
    Div,
    Label,
    Fieldset,
    Legend,
    Span,
    Input,
    Button,
    StateDiv,
    Paragraph,
} from "./styled";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useCurrentData();

    const getResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(currency, amount);
    };

    const onClickClear = () => {
        setAmount("");
        setResult("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Div>
                <Time />
                <Legend>Kalkulator walutowy</Legend>
                {ratesData.state === "loading" ? (
                    <StateDiv>
                        <Paragraph>
                            Proszę czekać, trwa pobieranie danych...
                        </Paragraph>
                    </StateDiv>
                ) : ratesData.state === "error" ? (
                    <StateDiv>
                        <Paragraph>
                            Niestety nie udało się pobrać kursów walut.<br />
                            Sprawdź czy masz internet, jeśli tak to spróbuj później!
                        </Paragraph>
                    </StateDiv>
                ) : (
                    <>
                        <Fieldset>
                            <p>
                                <Label>
                                    <Span>Podaj kwotę w PLN: </Span>
                                    <Input
                                        type="number"
                                        min="1" step="1"
                                        placeholder="Wpisz kwotę..."
                                        className="form__input "
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                    />
                                </Label>
                            </p>
                            <Label>
                                <Span>Wybierz walutę</Span>
                                <Input as="select"
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                                >
                                    {Object.keys(ratesData.rates).map((currency => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )))};
                                </Input>
                            </Label>
                        </Fieldset>
                        <Paragraph
                            date
                        >
                            Kursy walut pobierane z Europejskiego Banku Centralnego dnia: {ratesData.date}
                        </Paragraph>
                        <Button>Przelicz</Button>
                        <Button type="reset" onClick={onClickClear} >Wyczyść formularz</Button>
                        <Section result={result} />
                    </>)}
            </Div>
        </StyledForm>
    );
};

