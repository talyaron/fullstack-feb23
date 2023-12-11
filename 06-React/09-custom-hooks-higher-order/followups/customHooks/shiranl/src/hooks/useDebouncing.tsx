import { useEffect, useState } from 'react'

const useDebouncing =  (searchTerm: string, delay:number) => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedSearchTerm(searchTerm);
        }, delay);
    
        // Clear the timeout on each render, effectively resetting the timer
        return () => clearTimeout(timerId);
      }, [searchTerm]);
    
    return debouncedSearchTerm;
}

export default useDebouncing;