import { useState } from "react";
import { navLinks } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "../style";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} ${styles.flexCenter} w-full  flex pt-6 pb-4  bg-primary shadow-lg justify-between items-center  sticky top-0 z-[100] cursor-pointer`}
    >
      <div className={`${styles.boxWidth} flex`}>
        <h1 className="font-extrabold text-white text-2xl tracking-wider sm:pl-[50px]">
          English with Anara
        </h1>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` font-normal cursor-pointer hover:underline  text-[14px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-6"
              }  text-white text-base mr-10`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* menu icons in mobile size*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <FaTimes
              className="w-[32px] h-[32px] object-contain text-white"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <FaBars
              className="w-[32px] h-[32px] object-contain text-white"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}

          {/*mobile menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
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
