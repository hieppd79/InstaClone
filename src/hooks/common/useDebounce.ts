import {useEffect, useState} from 'react';

export const useDebounce = <T>(
  value: T,
  delay: number,
  onTick?: () => void,
): T => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
        onTick?.();
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
