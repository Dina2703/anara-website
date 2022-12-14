import styles, { layout } from "../style";
import { features } from "../constants";
import GetStarted from "./GetStarted";

const Featurecard = ({ title, img, content, index, link }) => (
  <div
    className={`flex flex-col sm:flex-row sm:py-4 py-0 items-center  ${
      index !== features.length - 1 ? "mb-1" : "mb-0"
    } `}
  >
    <div className="w-[80%] sm:w-1/3  my-5  sm:my-0">
      <a href={link && link} alt={title} target="_blank" rel="noreferrer">
        <img
          src={img}
          alt="индивидуальный и групповой английский курс с учителем"
          className=" w-[100%] h-[100%] object-contain "
        />
      </a>
    </div>
    <div className="flex-1 flex flex-col  ml-3">
      <h4 className="font-poppins font-semibold text-white  text-[16px] leading-[18px] mb-2 text-center">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px] text-left">
        {content}
      </p>
    </div>
  </div>
);

function ProsEng() {
  return (
    <section
      id="курс-английского-english-with-anara"
      className={`${layout.section} sm:pt-16  `}
    >
      <div className="flex flex-col flex-1 justify-around sm:my-8   ">
        <div className="space-y-6 uppercase">
          <h2 className={styles.heading2}>
            Как проходят <br className="hidden sm:block" /> наши уроки
            <span className="bg-discount-gradient px-2 block max-w-[400px] tracking-widest italic text-[17px] sm:text-[30.5px]">
              английского языка
            </span>
          </h2>
          <p className="font-poppins font-semibold text-dimWhite text-[12px] sm:text-[16px] tracking-wider mt-5  text-center sm:text-left">
            Длительность занятии: <br /> индивидуальные - 50 мин, <br /> в паре
            - 60 мин, <br /> в группе - 70 мин.
          </p>
        </div>
        <div className="hidden sm:block">
          <GetStarted />
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col -mt-1 `}>
        {features.map((feature, index) => (
          <Featurecard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className="block sm:hidden">
        <GetStarted />
      </div>
    </section>
  );
}

export default ProsEng;
