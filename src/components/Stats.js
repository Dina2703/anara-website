import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <>
    <div className="  text-center my-6  font-bold bg-white  rounded-tl-xl rounded-br-xl -skew-x-12 bg-opacity-50 mx-20 py-2">
      <h1 className="text-gradient text-2xl ">Did you know?</h1>
    </div>
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-2 grid md:grid-cols-3 gap-2 xs:grid-cols-2 grid-cols-1`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row  sm:m-1  border-2  border-teal-600 h-12  sm:h-12  sm:p-2 px-2  rounded shadow-lg`}
        >
          <h4 className="font-poppins font-semibold sm:text-[17px] text-[13px]  text-amber-600 italic pr-2">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal sm:text-[12px] text-[9px] uppercase  text-white">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </>
);

export default Stats;
