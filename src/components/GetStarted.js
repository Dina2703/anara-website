import styles from "../style";
import { FiArrowUpRight } from "react-icons/fi";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} rounded bg-teal-600 cursor-pointer px-10 py-2 my-4`}
    >
      <div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[17px] ">
            <span className="text-info">GET STARTED</span>
          </p>
          <span className="text-[25px] ml-[6px]">
            <FiArrowUpRight color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
