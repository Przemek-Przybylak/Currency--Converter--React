import { useState } from "react";
import { currencies } from "./currencies";
import { Section } from "../Section";
import { Time } from "../Time";
import { StyledForm, StyledDiv, StyledLabel, StyledFieldset, StyledLegend, StyledSpan, StyledInput, StyledButton } from "./styled";

export const Form = () => {
    const [result, setResult] = useState("");
    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");

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
                    <StyledLegend>Kalkulator walutowy</StyledLegend>
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
                            {currencies.map((currency => (
                                <option
                                    key={currency.name}
                                    value={currency.name}
                                >
                                    {currency.name}
                                </option>
                            )))};
                        </StyledInput>
                    </StyledLabel>
                </StyledFieldset>
                <StyledButton onClick={onFormSubmit}>Przelicz</StyledButton>
                <StyledButton type="reset" onClick={onClickClear} >Wyczyść formularz</StyledButton>
                <Section result={result} />
            </StyledDiv>
        </StyledForm>
    );
};

