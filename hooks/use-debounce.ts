import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}
