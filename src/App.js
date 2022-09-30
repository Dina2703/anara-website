import styles from "./style";

import { Navbar, Hero, About, Footer, Testimonials } from "./components";
import Stats from "./components/Stats";
import ProsEng from "./components/ProsEng";
import SocialVerticalLinks from "./components/SocialVerticalLinks";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden lg:px-24 pl-[50px]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />

          <ProsEng />
          <About />
          <Testimonials />

          <Footer />
          <SocialVerticalLinks />
        </div>
      </div>
    </div>
  );
};

export default App;
