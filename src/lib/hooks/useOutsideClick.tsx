import { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
): void => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, callback]);
};

export default useOutsideClick;
