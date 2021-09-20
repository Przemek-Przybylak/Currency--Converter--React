import { useEffect, useState } from "react";

export const useCurrentTime = () => {
    const [currentTime, setcurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [setcurrentTime]);

    return currentTime;
};
