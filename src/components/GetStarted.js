import styles from "../style";
import { FaRegEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} bg-teal-100 my-4 sm:pr-3 py-4 rounded-md `}
    >
      <p className="sm:mx-8 mx-3 uppercase sm:text-[16px] text-[14px] font-semibold tracking-wide text-teal-800 text-center ">
        отправить сообщение
      </p>

      <div className="flex space-x-2 justify-center mr-4">
        <button
          type="button"
          className="inline-block sm:px-6 px-4 py-2.5 bg-teal-600 text-white font-medium text-xs  rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out "
        >
          <a href="mailto:dinara.idrissova@list.ru">
            <span>
              <FaRegEnvelope
                className=" text-info 
              text-[26px] "
              />
            </span>
          </a>
        </button>
        <button
          type="button"
          className="inline-block sm:px-6 px-4 py-2.5 bg-teal-600 text-white font-medium text-xs   rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <a href="https://wa.me/14042457101">
            <span>
              <BsWhatsapp
                className=" text-info 
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
