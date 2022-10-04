import styles from "../style";
import { FaRegEnvelope } from "react-icons/fa";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} rounded bg-teal-600 cursor-pointer px-10 py-2 my-4`}
    >
      <div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[17px] ">
            <span className="text-info uppercase tracking-wider font-semibold">
              отправить сообщение
            </span>
          </p>
          <span className="text-[25px] ml-[6px]">
            <FaRegEnvelope className="ml-2 text-info" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
