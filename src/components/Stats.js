import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <>
    <div className="  text-center my-6  font-bold bg-white  rounded-tl-xl rounded-br-xl -skew-x-12 bg-opacity-50 mx-20 py-2">
      <h1 className="text-gradient text-2xl ">Did you know?</h1>
    </div>
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-2  w-[25%] border-2 h-[70px] p-1 border-teal-600`}
        >
          <h4 className="font-poppins font-semibold xs:text-[20px] text-[10px]  text-amber-600 italic pr-2">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[10px] text-[px] uppercase  text-white">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </>
);

export default Stats;
