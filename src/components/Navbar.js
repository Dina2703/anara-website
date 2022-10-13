import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "../style";

function Navbar() {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={ref}
      className={`${styles.paddingX} ${styles.flexCenter} w-full  flex pt-5 pb-4  bg-primary shadow-lg justify-center items-center  sticky top-0 z-[100] cursor-pointer `}
    >
      <div className={`${styles.boxWidth} flex w-[90%] md:w-[80%] `}>
        <h1 className="font-extrabold text-white text-2xl sm:text-3xl tracking-wider ">
          English with Anara
        </h1>
        <ul className="list-none md:flex hidden justify-end items-end flex-1  uppercase">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` cursor-pointer hover:underline  ${
                index === navLinks.length - 1 ? "mr-10" : "mr-5"
              }  text-white text-base tracking-wider font-semibold`}
            >
              <a href={`#${nav.id}`} className=" text-[12px]">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* menu icons in mobile size*/}
        <div className="md:hidden flex flex-1 justify-end items-center">
          {isMenuOpen ? (
            <FaTimes
              className="w-[32px] h-[32px] object-contain text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          ) : (
            <FaBars
              className="w-[32px] h-[32px] object-contain text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          )}

          {/*mobile menu */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-mono font-normal cursor-pointer text-[16px] hover:underline ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }  text-gray-600 text-base mr-6`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
