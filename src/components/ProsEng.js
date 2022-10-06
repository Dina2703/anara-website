import styles, { layout } from "../style";
import { features } from "../constants";
import GetStarted from "./GetStarted";

const Featurecard = ({ title, img, content, index }) => (
  <div
    className={`flex flex-row py-4 items-center ${
      index !== features.length - 1 ? "mb-1" : "mb-0"
    } `}
  >
    <div className="w-1/3 ">
      <img
        src={img}
        alt="индивидуальный и групповой английский курс с учителем"
        className=" w-[100%] h-[100%] object-contain "
      />
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
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Как проходят <br /> наши уроки
          <span className="bg-discount-gradient px-2 block max-w-[400px] tracking-wider italic">
            английского языка
          </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Уроки проходят онлайн, это один из современных форматов обучения.
          Преимущества такого подхода: выбор удобного для вас времени, не выходя
          из дома, экономия времени на дорогу и применение онлайн интерактивных
          ресурсов. Уроки проходят в группе из 4 детей или индивидуально. Можно
          цену указать. Длительность каждого урока 40мин. Чтобы улучшить
          языковые навыки по английскому комплексно будем заниматься чтением,
          письменностью, аудирование и разговорной речью. Мы будем использовать
          увлекательные цифровые материалы в соответствии с уровнем знания и
          потребности ученика.
        </p>
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
