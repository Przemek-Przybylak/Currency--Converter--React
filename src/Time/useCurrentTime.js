import { useEffect, useState } from "react";

export const useCurrentTime = () => {
    const [actualTime, setActualTime] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setActualTime(new Date());
        }, 1000);

        return () => {
            clearInterval(setIntervalId);
        };
    }, [setActualTime]);

    return actualTime;
}
