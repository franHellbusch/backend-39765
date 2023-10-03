import { useState } from "react";

export const useCatch = (timeout = 5000) => {
  const [error, setError] = useState(false);
  const [errorTimeout, setErrorTimeout] = useState(null);

  const saveError = (message) => {
    setError(message);
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }
    setErrorTimeout(
      setTimeout(() => {
        setError(false);
      }, timeout)
    );
  };

  const closeError = () => {
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }
    setError(false);
  };

  return {
    error,
    saveError,
    closeError,
  };
};
