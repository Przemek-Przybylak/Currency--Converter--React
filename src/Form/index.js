import { useState } from "react";
import { currencies } from "./currencies";
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
    StyledButton
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
                <StyledFieldset>
                    {ratesData.state === "loading" ? (
                        <p>
                            Proszę czekać, trwa pobieranie danych...
                        </p>
                    ) : ratesData.state === "error" ? (
                        <p>
                            Niestety nie udało się załadować walut<br />
                            Sprawdz czy masz internet, jeśli masz to spróbuj później!
                        </p>
                    ) : (
                        <>
                            <StyledLegend>Kalkulator walutowy</StyledLegend>
                            <p>
                                <StyledLabel>
                                    {currencies}
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
                        </>)}
                </StyledFieldset>
                <StyledButton onClick={onFormSubmit}>Przelicz</StyledButton>
                <StyledButton type="reset" onClick={onClickClear} >Wyczyść formularz</StyledButton>
                <Section result={result} />
            </StyledDiv>
        </StyledForm>
    );
};

