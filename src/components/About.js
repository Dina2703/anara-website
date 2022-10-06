import styles, { layout } from "../style";

function About() {
  return (
    <section className={`${layout.section} pt-6`}>
      <div className={layout.sectionImgReverse}>
        <img
          className="w-[100%] h-[100%]  mt-2"
          src="https://img.freepik.com/free-vector/cartoon-businesswoman-working-with-laptop-gesture-pose-clip-art_40876-3410.jpg?w=2000&t=st=1664451705~exp=1664452305~hmac=c06d9974cd5aba53da2838092b9a47986c9f274f00a46982bee330fddb24b7b0"
          alt="anara english teacher Анара учитель английского языка"
        />
      </div>
      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className={styles.heading2}>About me</h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          optio dolorem in ab, reiciendis minus blanditiis repellendus quis
          consequuntur architecto quos commodi dolores ipsam nihil! Autem
          asperiores fugiat velit, vel rem quis, sunt repellat deserunt magnam,
          sint officiis voluptatibus corporis?
        </p>
      </div>
    </section>
  );
}

export default About;
