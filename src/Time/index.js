import { useEffect, useState } from "react";
import "./style.css";

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
        <div className="form__clockContainer">
            <p className="form__clock">Dzisiaj jest {actualTime.toLocaleString("pl", { weekday: "long", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })}</p>
        </div>
    );
};