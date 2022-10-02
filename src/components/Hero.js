import styles from "../style";
import GetStarted from "./GetStarted";
import { FaGift } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="md:mx-12 pt-15 ">
      <div className={`flex flex-col sm:flex-row  `}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col px-6 sm:pl-16 lg:px-0`}
        >
          <div className="flex flex-row items-center py-[6px] px-4  mb-4 mr-3 bg-discount-gradient rounded mt-4">
            <FaGift className="w-[48px] h-[48px] text-white" />
            <p className={`${styles.paragraph} ml-2 `}>
              <span>Free </span>
              trial lesson. <span>Sign up for the lesson today!</span>
            </p>
          </div>

          <div className="flex flex-row  justify-between text-center sm:text-left items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text:[72px] text-[52px] text-white leading-[65px] ss:leading-[75px]">
              IT'S TIME <br className="hidden sm:block " /> TO LEARN <br />
              <span className="text-info text-[70px]  ">ENGLISH</span>
            </h1>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} my-2 md:my-0 `}>
          <img
            src="./hero-2.jpg"
            alt="learn-english"
            className="  w-[65%] h-[100%] sm:w-[90%] sm:h-[100%] md:w-[100%] sm:h-[80%] border-4 sm:mr-16 border-amber-200 border-y-amber-400 rounded"
          />
        </div>
      </div>
      <p className="text-white px-16 text-sm text-center">
        It is the language of science, aviation, computers, diplomacy and
        tourism. Last but not least, it is the language of international
        communication, the media and the internet. Whether it is for
        professional or personal reasons, understanding the importance of
        English will help you reach your goals.
      </p>
      <div className={`${styles.flexCenter} `}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
