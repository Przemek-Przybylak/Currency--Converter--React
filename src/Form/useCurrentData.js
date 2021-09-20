import { useEffect, useState } from "react";

export const useCurrentData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

                if (!response.ok) {
                    throw new Error(response.statusText);
                };

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            };
        };

        setTimeout(fetchData, 1000);
    }, []);

    return ratesData;
};