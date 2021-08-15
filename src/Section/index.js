import { StyledSection, StyledParagraph } from "./styled";

export const Section = ({ result }) => (
  <StyledSection>
    <StyledParagraph>
      <span>Wynik to: </span>
      <strong>
        {result && (
          <>
            {result.sourceAmount
              ? ` ${result.sourceAmount.toFixed(2)} PLN = `
              : ""}
            {result.targetAmount ? `${result.targetAmount.toFixed(2)} ` : ""}
            {result.sourceAmount ? result.currency : ""}
          </>
        )}
      </strong>
    </StyledParagraph>
  </StyledSection>
);

