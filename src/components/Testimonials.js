import { feedbacks } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col  `}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col italic mb-1  ">
      <h1 className={`${styles.heading1} text-center `}>
        What parents of my students are <br className="hidden sm:block" />
        saying about the class
      </h1>
    </div>

    <div className="flex flex-row flex-wrap justify-center md:justify-start feedback-container ">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} {...feedback} />
      ))}
    </div>
  </section>
);

export default Testimonials;
