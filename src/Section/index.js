import "./style.css";

const Section = (props) =>(
    <section className="section">
        <span className="section__description">Wynik to: </span>
        <strong className="section__result">{props.result}</strong>
    </section>
)
    ;

export default Section;