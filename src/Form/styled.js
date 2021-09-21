import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    margin: 20px auto;
    max-width: 600px;
`;

export const Div = styled.div`
    padding: 10px 20px 10px 20px;
    background-color: white;
    border: 1px solid #ccc;
    opacity: 95%;
`;

export const StateDiv = styled(Div)`
    height: 234px;
    max-width: 600px;
    text-align: center;
    border: none;
`;

export const Label = styled.label`
    display: flex;
    justify-content: center;
`;

export const Fieldset = styled.fieldset`
    padding: 15px;
    border: none;
    width: 100%;
    margin-bottom: 15px;
`;

export const Legend = styled.legend`
    margin: auto;
    background-color: rgb(4, 164, 228);
    color: white;
    font-weight: 700;
`;

export const Span = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 200px;
    margin: 5px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 3px;
    border: 1px solid #ccc;
    text-align: center;
    font-weight: 700;

    @media (max-width:836px) {
        max-width: none;
    };

    &:invalid {
        background-color: rgb(255, 180, 180);
    };
`;

export const Button = styled.button`
    margin: 5px auto;
    width: 100%;
    border: none;
    padding: 3px;
    background-color: rgb(4, 164, 228);
    color: white;
`;

export const Paragraph = styled.p`
    margin: 90px auto;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1,5px;
    color: rgb(4, 164, 228);

    ${({ date }) => date && css`
    margin: 2px auto;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 1px;
    color: rgb(172,172,172);
    text-align: center;
        `};
`;