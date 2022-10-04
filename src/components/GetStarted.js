import styles from "../style";
import { FaRegEnvelope } from "react-icons/fa";

function GetStarted() {
  return (
    <button
      className={`${styles.flexCenter} rounded bg-teal-600 hover:bg-teal-700 cursor-pointer px-10 py-2 my-4`}
    >
      <a href="mailto:dinara.idrissova@list.ru">
        <div className={`${styles.flexStart} flex-row  items-center`}>
          <p className="font-poppins font-medium text-xs sm:text-sm ">
            <span className="text-info uppercase tracking-wider font-semibold">
              отправить сообщение
            </span>
          </p>
          <span className="text-[25px] ml-[6px]">
            <FaRegEnvelope className="ml-2 text-info" />
          </span>
        </div>
      </a>
    </button>
  );
}

export default GetStarted;
