import styles, { layout } from "../style";

function About() {
  return (
    <section className={`${layout.section} pt-6`}>
      <div className={layout.sectionImgReverse}>
        <img
          className="w-[100%] h-[100%]  mt-2"
          src="./anara01.jpeg"
          alt="anara english teacher Анара учитель английского языка"
        />
      </div>
      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className={styles.heading1}>Немного о себе</h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-3`}>
          Меня зовут Анара. Я дипломированный учитель английского языка. Я очень
          люблю работать с детьми и изучать иностранные языки. Действительно
          знание английского языка расширяет возможности для нас. После изучения
          английского языка посетила разные страны, это было очень
          познавательно. <br /> В настоящее время моя главная задача помочь как
          можно большенство детей выучить английский язык, чтобы они смогли
          применять эти знания в достижении своих целей и стать успешными.
        </p>
        <div className="flex  mt-3">
          <div className="flex flex-col w-1/2 text-[16px] mx-4">
            <h3 className="font-bold text-white">Факты обо мне</h3>
            <ul className="text-justify italic text-dimWhite list-disc text-[14px]">
              <li>Мама двоих прекрасных мальчиков.</li>
              <li>Жила в Англий.</li>
              <li>Говорю свободно на 4 языках. </li>
            </ul>
          </div>
          <div className="flex flex-col w-1/2 text-[16px] text-sm mx-4">
            <h3 className="font-bold  text-white">Образование:</h3>
            <ul className="text-justify italic text-dimWhite list-disc text-[14px]">
              <li>Университет КазУМОиМЯ им. Абылай хана, Алматы.</li>
              <li>BRANSFIELD EDUCATION CENTRE, Лондон .</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
