import { useCallback, useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const reset = useCallback(() => {
    setCounter(initialState);
  }, [initialState]);

  return { counter, increment, decrement, reset };
};
