import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        setTimeout(() => setDebounceValue(value), delay);
    }, [value]);
    return debounceValue;
}

export default useDebounce;
