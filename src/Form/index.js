import "./style.css";

const Form = ({eur, amount, currency, onFormSubmit, onInputChange, onSelectChange }) => {
    const usd = 3.79;
    const chf = 4.13;

    return (
        <form className="form"
            onSubmit={onFormSubmit}
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
                            name="pln"
                            value={amount}
                            onChange={onInputChange}
                        />
                    </label>
                </p>
                <label className="form__item"> <span className="form__ItemDescription">Wybierz walutę</span>
                    <select
                        value={currency}
                        onChange={onSelectChange}
                        className="form__input"
                        >
                        <option value={eur}>EUR</option>
                        <option value={usd}>USD</option>
                        <option value={chf}>CHF</option>
                    </select>
                </label>

            </fieldset>
            <button className="form__button">Przelicz</button>
            <button className="form__button">Wyczyść formularz</button>
        </form>
    )
}

export default Form;