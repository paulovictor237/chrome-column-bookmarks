import { useCallback, useEffect, useRef, useState } from 'react';

export const useMauseEventMenu = (closeMenu: () => void) => {
  const [globalCoords, setGlobalCoords] = useState({ left: 0, top: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleWindowMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    setGlobalCoords({ left: event.pageX, top: event.pageY });
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = ref.current;
    if (target && !target.contains(event.target as Node)) closeMenu();
  };

  const closeOnEscapeKey = (event: KeyboardEvent) => {
    event.key === 'Escape' && closeMenu();
  };

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscapeKey);
    document.addEventListener('contextmenu', handleWindowMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleWindowMouseMove);
    };
  }, []);

  return { globalCoords, ref };
};
