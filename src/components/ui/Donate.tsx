import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
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
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  function LiItem(props: { children: React.ReactNode; href: string }) {
    return (
      <a
        className="hover:bg-blue-suave p-2 whitespace-no-wrap rounded-lg text-center bg-gray-400 h-full flex flex-col justify-center w-30 text-gray-900"
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
    <div className="z-10 flex flex-col items-center h-8" ref={dropdownRef}>
      <button
        type="button"
        className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90  focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5  h-full text-center inline-flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="paypal"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
          ></path>
        </svg>
        <span className="hidden md:inline">Donate</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>

      <AnimatePresence presenceAffectsLayout>
        {isOpen && (
          <div className="fixed right-1/2 translate-x-1/2 z-10 top-11 md:right-2 md:translate-x-0 w-8/12">
            <motion.ul
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-20, 20, 0], opacity: 1 }}
              variants={exitVariants}
              exit={{ y: [0, 20, -20], opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col gap-1.5 text-gray-700 p-1.5 bg-gray-200 rounded-lg
                md:w-40  md:h-24 h-28`}
            >
              <LiItem href="https://www.paypal.com/donate/?business=FHWJYG8TT46JW&no_recurring=1&item_name=Help+me+to+develop+my+first+chrome+app.&currency_code=USD">
                PayPal
              </LiItem>
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
