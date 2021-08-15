import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 20px auto;
    max-width: 600px;
`;

export const StyledDiv = styled.div`
    padding: 10px 20px 10px 20px;
    background-color: white;
    border: 1px solid #ccc;
`;

export const StyledLabel = styled.label`
    display: flex;
    justify-content: center;
`;

export const StyledFieldset = styled.fieldset`
    padding: 15px;
    border: none;
    width: 100%;
    margin-bottom: 20px;
`;

export const StyledLegend = styled.legend`
    margin: auto;
    background-color: rgb(4, 164, 228);
    color: white;
    font-weight: 700;
`;

export const StyledSpan = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 200px;
    margin: 5px;
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
    margin: 5px auto;
    width: 100%;
    border: none;
    padding: 3px;
    background-color: rgb(4, 164, 228);
    color: white;
`;