import "./style.css";
import { useState } from "react";
import { currencies } from "./currencies";
import { Section } from "../Section";

export const Form = ({ getResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        getResult(currency, amount);
    }

    return (
        <form className="form"
            onSubmit={onSubmit}
        >
            <fieldset className="form__container">
                <legend className="form__description">Kalkulator walutowy</legend>
                <p className="forn__paragraph">
                    <label className="form__item">
                        <span className="form__ItemDescription">Podaj kwotę w PLN: </span>
                        <input
                            type="number"
                            min="1" step="1"
                            placeholder="Wpisz kwotę..."
                            className="form__input "
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <label className="form__item"> <span className="form__ItemDescription">Wybierz walutę</span>
                    <select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        className="form__input"
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.name}
                                value={currency.name}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>

            </fieldset>
            <button className="form__button">Przelicz</button>
            <button className="form__button">Wyczyść formularz</button>
            <Section result={result} />
        </form>
    )
}

