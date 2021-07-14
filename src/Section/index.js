import "./style.css";

export const Section = ({ result }) => (
    <section className="section">
        <span className="section__description">Wynik to: </span>
        <strong className="section__result">
            {result !== undefined && (
                <>
                    {result.sourceAmount.toFixed(2)}{" "}PLN{" "}={" "}
                    {result.targetAmount.toFixed(2)}{" "}{result.currency}
                </>
            )}
        </strong>
    </section>
)
    ;
