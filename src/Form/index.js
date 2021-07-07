import "./style.css";

const Form = ({ amount, resultValue }) => {
    const eur = 4.55;
    const usd = 3.79;
    const chf = 4.13;

    return (
        <form className="form js-form">
            <fieldset className="form__container">
                <legend className="form__description">Kalkulator walutowy</legend>
                <p className="forn__paragraph">
                    <label className="form__item"><span className="form__ItemDescription">Podaj kwotę w PLN: </span>
                        <input type="number" min="1" step="1" placeholder="Wpisz kwotę..." className="form__input js-pln"
                            name="pln" />
                    </label>
                </p>
                <label className="form__item"> <span className="form__ItemDescription">Wybierz walutę</span>
                    <select className="form__input js-currency" name="currency">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="CHF">CHF</option>
                    </select>
                </label>

            </fieldset>
            <button className="form__button js-button">Przelicz</button>
            <button type="reset" className="form__button js-buttonReset">Wyczyść formularz</button>
        </form>
    )
}

export default Form;