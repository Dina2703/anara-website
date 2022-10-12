import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className="hidden md:block">
    <div className=" text-center my-4  font-bold bg-white  rounded-tl-xl rounded-br-xl -skew-x-12 bg-opacity-50 mx-20 p-4">
      <h1 className="text-gradient text-md sm:text-2xl ">
        Почему так важно изучать английский?
      </h1>
    </div>
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-2 grid md:grid-cols-3 gap-2 xs:grid-cols-2 grid-cols-1`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row  sm:m-1  border-2  border-teal-600 h-12  sm:h-12  sm:p-2 px-2 py-6 sm:py-8 rounded shadow-lg`}
        >
          <h4 className="font-poppins font-semibold sm:text-[17px] text-[13px]  text-amber-600 italic pr-2">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal sm:text-[10px] text-[8px] uppercase  text-white">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </div>
);

export default Stats;
