import styles from "../style";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="flex flex-row items-center py-[6px] px-4  mb-2">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Special-offer-Free-PNG.png"
            alt="british and kazakhstan flags"
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
            <span className="text-gradient">ENGLISH</span>
          </h1>
          <div className="hidden ss:flex  md_mr-4 mr-o">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
