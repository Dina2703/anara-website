import styles, { layout } from "../style";
import { features } from "../constants";
import GetStarted from "./GetStarted";

const Featurecard = ({ title, img, content, index, link }) => (
  <div
    className={`flex flex-row py-4 items-center ${
      index !== features.length - 1 ? "mb-1" : "mb-0"
    } `}
  >
    <div className="w-1/3 ">
      <a href={link && link} alt={title} target="_blank" rel="noreferrer">
        <img
          src={img}
          alt="индивидуальный и групповой английский курс с учителем"
          className=" w-[100%] h-[100%] object-contain "
        />
      </a>
    </div>
    <div className="flex-1 flex flex-col  ml-3">
      <h4 className="font-poppins font-semibold text-white  text-[15px] leading-[18px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[13px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

function ProsEng() {
  return (
    <section id="features" className={`${layout.section} pt-16`}>
      <div className="flex flex-col flex-1 justify-between ">
        <div className="space-y-10">
          <h2 className={styles.heading2}>
            Как проходят <br /> наши уроки
            <span className="bg-discount-gradient px-2 block max-w-[400px] tracking-wider italic">
              английского языка
            </span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
            Уроки проходят в группе или индивидуально. Длительность каждого
            урока 40мин.
          </p>
        </div>
        <GetStarted />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Featurecard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProsEng;
