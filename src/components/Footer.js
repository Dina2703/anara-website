import { FaPhone, FaRegEnvelope, FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="контакты-english-with-anara"
      className="sm:w-full w-[60vw] flex flex-col justify-center mt-8"
    >
      <div className="shadow-inner h-[22px] w-[300%] -ml-[300px] "></div>
      <h2
        className=" text-center my-4 font-bold text-white uppercase  text-[14px] sm:text-[16px] tracking-widest 
      "
      >
        Контакты
      </h2>

      <div className=" flex flex-col sm:flex-row justify-around h-full items-center text-[14px] sm:text-[17px]">
        <div className="mb-2">
          <a
            href="tel:+YOURNUMBERHERE"
            className="flex sm:inline justify-between w-[300px]"
          >
            <div className="flex gap-3 items-center justify-center text-dimWhite mb-2">
              <FaPhone /> телефон
            </div>
            <p className="underline text-[#0000FF] ">+7 747 702 70 55</p>
          </a>
        </div>

        <div className="mb-2">
          <a
            href="https://wa.me/77477027055 "
            className="flex sm:inline justify-between w-[300px]"
          >
            <div className="flex gap-3 items-center justify-center text-dimWhite mb-2">
              <FaWhatsappSquare className="text-[24px]" />
              whatsApp
            </div>
            <p className="underline text-[#0000FF] ">+7 747 702 70 55</p>
          </a>
        </div>
        <div className="mb-3">
          <a
            href="mailto:anekasina@mail.ru"
            className="flex sm:inline justify-between w-[300px]"
          >
            <div className="flex gap-3 items-center justify-center text-dimWhite mb-2">
              <FaRegEnvelope className="text-[24px]" /> эл. почта
            </div>
            <p className="underline text-[#0000FF] text-center">
              anekasina@mail.ru
            </p>
          </a>
        </div>
      </div>

      <p className="text-[12px]  text-center text-[#3B3B38] my-3  w-full">
        Copyright &copy; 2022. All rights reserved. <br /> Website created by
        <a
          className="underline pl-1"
          target="_blank"
          rel="noreferrer"
          href="https://dinaraidrissova.com/"
        >
          Dinara Idrissova
        </a>
        .
      </p>
    </section>
  );
}

export default Footer;
