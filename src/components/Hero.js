import styles from "../style";
import GetStarted from "./GetStarted";
import { FaGift } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="md:mx-12 pt-15 ">
      <div className={`flex flex-col sm:flex-row  `}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col px-6 sm:pl-16 lg:px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4  mb-4 mr-3 bg-discount-gradient rounded mt-4">
            <FaGift className="w-[28px] h-[28px] sm:w-[48px] sm:h-[48px] text-white" />
            <p className="font-poppins font-normal text-dimWhite sm:text-[18px] sm:leading-[24.8px]  ml-4 text-[16px] leading-[18.8px] ">
              <span> Бесплатный </span>
              пробный урок!!! <br />
              <span>И тестирование уровня английского языка!</span>
              <br />
              Запишись сегодня!!!
            </p>
          </div>

          <div className="flex flex-row  justify-between text-center sm:text-left items-center w-full ">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[48px] text-[38px] text-white leading-[45px] ss:leading-[75px]">
              IT'S TIME <br className="hidden sm:block " /> TO LEARN <br />
              <span className="text-info text-[40px] sm:text-[70px] ">
                ENGLISH
              </span>
            </h1>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} my-2 md:my-0 `}>
          <img
            src="./hero-2.jpg"
            alt="английский класс для детей и взрослых"
            className="  w-[80%] h-[100%] sm:w-[90%] sm:h-[100%] md:w-[100%] sm:h-[80%] border-4 sm:mr-16 border-amber-200 border-y-amber-400 rounded"
          />
        </div>
      </div>
      <p className="font-poppins text-dimWhite px-8 text-[16px] sm:text-sm  text-left ">
        Современный мир сейчас невозможен без знания английского языка. Знание
        английского языка открывает перед человеком широкую картину мира,
        возможность получить образование за границей, найти престижную работу и
        путешествовать по миру.
        <br /> Изучать иностранный язык лучше с раннего детства. Раннее
        знакомство ребёнка с английским языком закладывает у него правильное
        произношение и позволяет накопить базовый лексический и словарный
        запасы, и уже за пару лет дети говорят на английском практически без
        акцента.
      </p>
      <div className={`${styles.flexCenter} `} id="about-me">
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
