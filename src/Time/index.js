import { Div, Paragraph } from "./styled";
import { useCurrentTime, } from "./useCurrentTime";

export const Time = () => {
    const time = useCurrentTime();

    return (
        <Div>
            <Paragraph>Dzisiaj jest{" "}
                {time.toLocaleString("pl", {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                })}
            </Paragraph>
        </Div>
    );
};