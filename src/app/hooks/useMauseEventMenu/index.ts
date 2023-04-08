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

  const positionLeft = globalCoords.left > screenSize.left / 2;
  const positionTop = globalCoords.top > screenSize.top / 2;

  const offsetPossition = {
    left: globalCoords.left - (positionLeft ? offset.left : 0),
    top: globalCoords.top - (positionTop ? offset.top : 0),
  };

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);
    // document.addEventListener('contextmenu', handleWindowMouseMove);
    // window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
      // document.removeEventListener('contextmenu', handleWindowMouseMove);
      // window.removeEventListener('resize', handleResize);
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

  return { ref, offsetPossition };
};
