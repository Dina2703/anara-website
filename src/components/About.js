import styles, { layout } from "../style";
import SlideShow from "./Carousel";

function About() {
  return (
    <section className={`${layout.section} pt-6`}>
      <div className={layout.sectionImgReverse}>
        <div className="w-[85%] h-[100%]  ">
          <SlideShow />
        </div>
      </div>
      <div className={`${layout.sectionInfo} text-center mt-4 md:mt-0`}>
        <h2 className={styles.heading1}>Hi there!</h2>
        <p
          className={`${styles.paragraph}  md:max-w-[470px] mt-3 tracking-wider`}
        >
          Рада знакомству! <span className="ml-[12px]"></span> Меня зовут Анара
          и я - дипломированный учитель английского языка. Владение английским
          языком открыло для меня многие возможности, я пометила множество
          разных стран и встретила много замечательных людей, со многим из
          которых я поддерживаю связь. Возможность свободно общаться с людьми из
          разных частей мира трудно переоценить. Английский язык - поистине язык
          международного общения. Я очень рада, что я могу совместить мою
          страсть к языкам с моей любовью к преподаванию. Я очень люблю работать
          с детьми, видеть как с моей помощью они осваивают язык, который
          поможет им общаться на равных с их друзьями, коллегами, или партнерами
          из других стран, открывать для себя профессиональные возможности даже
          за пределами страны проживания.
        </p>
      </div>
    </section>
  );
}

export default About;
