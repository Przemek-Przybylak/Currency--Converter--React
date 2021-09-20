import { useState } from "react";
import { Section } from "../Section";
import { Time } from "../Time";
import { useCurrentData } from "./useCurrentData";
import {
    StyledForm,
    StyledDiv,
    StyledLabel,
    StyledFieldset,
    StyledLegend,
    StyledSpan,
    StyledInput,
    StyledButton,
    DivEmpty,
    P,
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
        <StyledForm>
            <StyledDiv>
                <Time />
                <StyledLegend>Kalkulator walutowy</StyledLegend>
                {ratesData.state === "loading" ? (
                    <DivEmpty>
                        <P>
                            Proszę czekać, trwa pobieranie danych...
                        </P>
                    </DivEmpty>
                ) : ratesData.state === "error" ? (
                    <DivEmpty>
                        <P>
                            Niestety nie udało się pobrać kursów walut.<br />
                            Sprawdź czy masz internet, jeśli tak to spróbuj później!
                        </P>
                    </DivEmpty>
                ) : (
                    <>
                        <StyledFieldset>
                            <p>
                                <StyledLabel>
                                    <StyledSpan>Podaj kwotę w PLN: </StyledSpan>
                                    <StyledInput
                                        type="number"
                                        min="1" step="1"
                                        placeholder="Wpisz kwotę..."
                                        className="form__input "
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                    />
                                </StyledLabel>
                            </p>
                            <StyledLabel>
                                <StyledSpan>Wybierz walutę</StyledSpan>
                                <StyledInput as="select"
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
                                </StyledInput>
                            </StyledLabel>

                        </StyledFieldset>
                        <P
                            date
                        >
                            Kursy walut pobierane z Europejskiego Banku Centralnego dnia: {ratesData.date}
                        </P>
                        <StyledButton onClick={onFormSubmit}>Przelicz</StyledButton>
                        <StyledButton type="reset" onClick={onClickClear} >Wyczyść formularz</StyledButton>
                        <Section result={result} />
                    </>)}
            </StyledDiv>
        </StyledForm>
    );
};

