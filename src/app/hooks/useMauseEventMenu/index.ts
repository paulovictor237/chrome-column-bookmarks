import { useCallback, useEffect, useRef, useState } from 'react';

export const useMauseEventMenu = (closeMenu: () => void) => {
  const [screenSize, setScreenSize] = useState({ left: 0, top: 0 });
  const [globalCoords, setGlobalCoords] = useState({ left: 0, top: 0 });
  const [offset, setOffset] = useState({ left: 0, top: 0 });
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

  const handleResize = () => {
    const { innerWidth: left, innerHeight: top } = window;
    setScreenSize({ left, top });
  };

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscapeKey);
    document.addEventListener('contextmenu', handleWindowMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleWindowMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      setOffset({
        left: ref.current.offsetWidth,
        top: ref.current.offsetHeight,
      });
    }
  }, [ref.current]);

  return { ref, globalCoords, screenSize, offset };
};
