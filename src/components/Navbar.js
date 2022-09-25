import { useState } from "react";
import { navLinks } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="font-extrabold text-orange-500   text-xl">
        English with Anara
      </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-mono font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  text-blue-800 text-base mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* menu icons in mobile size*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <FaTimes
            className="w-[32px] h-[32px] object-contain text-blue-800"
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <FaBars
            className="w-[32px] h-[32px] object-contain text-blue-800"
            onClick={() => setToggle((prev) => !prev)}
          />
        )}

        {/*mobile menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-mono font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }  text-blue-800 text-base mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
