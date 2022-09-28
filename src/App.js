import styles from "./style";

import {
  Navbar,
  Hero,
  About,
  Comments,
  ClickAction,
  ContactForm,
  Footer,
} from "./components";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden lg:px-24">
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

          <About />
          <Comments />
          <ClickAction />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
