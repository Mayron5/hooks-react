import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [count, setCount] = useState(initialValue);

    const incremento = () => {
        setCount(count + 1);
    };

    const decremento = () => {
        setCount(count - 1);
    };

    return [count, incremento, decremento];
};
