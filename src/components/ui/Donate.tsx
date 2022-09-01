import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { SiBuymeacoffee } from 'react-icons/si';
// import { Input } from "reactstrap";

export default function Donate() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  function LiItem(props: { children: React.ReactNode; href: string }) {
    return (
      <a
        className="h-14 md:h-12 hover:bg-blue-suave p-2 whitespace-no-wrap rounded-lg text-center bg-gray-400 flex flex-col justify-center w-30 text-gray-900"
        href={props.href}
        target="_blank"
        rel="noreferrer"
        draggable={false}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {props.children}
      </a>
    );
  }

  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };

  return (
    <div ref={dropdownRef}>
      <SiBuymeacoffee
        size={28}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-yellow-300 hover:text-yellow-500 cursor-pointer"
      />

      <AnimatePresence presenceAffectsLayout>
        {isOpen && (
          <div className="fixed right-1/2 translate-x-1/2 z-10 top-11 md:right-2 md:translate-x-0 w-8/12 md:w-auto">
            <motion.ul
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-20, 20, 0], opacity: 1 }}
              variants={exitVariants}
              exit={{ y: [0, 20, -20], opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                'flex flex-col gap-1.5 text-gray-700 p-1.5 bg-gray-200 rounded-lg md:w-40'
              }
            >
              {/* <LiItem href="https://www.paypal.com/donate/?business=FHWJYG8TT46JW&no_recurring=1&item_name=Help+me+to+develop+my+first+chrome+app.&currency_code=USD">
                PayPal
              </LiItem> */}
              <LiItem href="https://www.buymeacoffee.com/peve">
                Buy me a coffee
              </LiItem>
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
