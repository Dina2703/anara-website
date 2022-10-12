import React from "react";

function AboutEduc() {
  return (
    <div className="flex flex-row mb-10 mx-10 text-center px-8  justify-between">
      <div className="flex flex-col  sm:text-[20px] text-[16px]  ">
        <h3 className="font-bold text-white mb-2">Факты обо мне</h3>
        <ul className="text-justify italic text-dimWhite list-disc text-[14px]  sm:text-[18px]">
          <li>Говорю свободно на 4 языках.</li>
          <li>Стажировку проходила в Англии</li>
          <li>Мама двух прекрасных мальчиков </li>
        </ul>
      </div>
      <div className="flex flex-col sm:text-[20px] text-[16px]  text-sm mx-4">
        <h3 className="font-bold  text-white mb-2">Образование:</h3>
        <ul className="text-justify italic text-dimWhite list-disc text-[14px]  sm:text-[18px]">
          <li>Университет КазУМОиМЯ им. Абылай хана, Алматы.</li>
          <li>BRANSFIELD EDUCATION CENTRE, Лондон .</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutEduc;
