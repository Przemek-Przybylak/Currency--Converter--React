import "./style.css";

export const Section = ({ result }) => (
  <section className="section">
    <p className="section__body">
      <span className="section__description">Wynik to: </span>
      <strong className="section__result">
        {result && (
          <>
            {result.sourceAmount
              ? ` ${result.sourceAmount.toFixed(2)} PLN =`
              : ""}
            {result.targetAmount ? result.targetAmount.toFixed(2) : ""}
            {result.sourceAmount ? result.currency : ""}
          </>
        )}
      </strong>
    </p>
  </section>
);

