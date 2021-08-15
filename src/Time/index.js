import { useEffect, useState } from "react";
import { StyledDiv, StyledParagraph } from "./styled";

export const Time = () => {
    const [actualTime, setActualTime] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setActualTime(new Date());
        }, 1000);

        return () => {
            clearInterval(setIntervalId);
        };
    }, [setActualTime]);

    return (
        <StyledDiv>
            <StyledParagraph>Dzisiaj jest 
                {actualTime.toLocaleString("pl", { 
                weekday: "long", 
                day: "numeric", 
                month: "numeric", 
                year: "numeric", 
                hour: "numeric", 
                minute: "numeric", 
                second: "numeric" 
                })}
                </StyledParagraph>
        </StyledDiv>
    );
};