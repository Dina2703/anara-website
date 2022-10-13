import styles from "../style";
import { FaRegEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} bg-teal-100 my-4 sm:pr-3 py-3 rounded-md `}
    >
      <p className=" mx-4 uppercase sm:text-[16px] text-[14px] font-semibold tracking-wide text-teal-800 text-center ">
        свяжитесь со мной
      </p>

      <div className="flex space-x-2 justify-center mr-4">
        <button
          type="button"
          className="inline-block sm:px-6 px-4 py-2.5 bg-red-600 text-white font-medium text-xs  rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out "
        >
          <a href="mailto:anekasina@mail.ru">
            <span>
              <FaRegEnvelope
                className=" text-white 
              text-[26px] "
              />
            </span>
          </a>
        </button>
        <button
          type="button"
          className="inline-block sm:px-6 px-4 py-2.5 bg-red-600 text-white font-medium text-xs   rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <a href="https://wa.me/77477027055">
            <span>
              <BsWhatsapp
                className=" text-white 
              text-[26px]"
              />
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
