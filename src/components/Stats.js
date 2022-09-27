import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[20px] text-[10px]  text-amber-600">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[13px] text-[px] uppercase  text-white">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
