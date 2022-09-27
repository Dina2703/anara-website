import styles from "../style";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section id="home">
      <div className={`flex flex-col md:flex-row ${styles.paddingY} `}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
        >
          <div className="flex flex-row items-center py-[6px] px-4  mb-2 bg-discount-gradient rounded">
            <img
              src="https://www.pngplay.com/wp-content/uploads/8/Special-offer-Free-PNG.png"
              alt="free first lesson"
              className="w-[52px] h-[52px] object-fill"
            />
            <p className={`${styles.paragraph} ml-2`}>
              <span>Free </span>
              trial lesson. <span>Sign up for the lesson today!</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text:[72px] text-[52px] text-white leading-[75px] ss:leading-[100px]">
              IT'S TIME <br className="hidden sm:block " /> TO LEARN <br />
              <span className="text-info text-[70px]  ">ENGLISH</span>
            </h1>
            <div className="hidden ss:flex  md_mr-4 mr-o">
              <GetStarted />
            </div>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} my-2 md:my-0 `}>
          <img
            src="./hero-2.jpg"
            alt="learn-english"
            className="w-[70%] h-[82%]  "
          />
        </div>
      </div>
      <p className="text-white px-16">
        Knowing English increases your chances of getting a good job in a
        multinational company within your home country or for finding work
        abroad. It's also the language of international communication, the media
        and the internet, so learning English is important for socialising and
        entertainment as well as work!
      </p>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
