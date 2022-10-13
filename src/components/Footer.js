import { FaPhone, FaRegEnvelope, FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="contact"
      className="sm:w-full w-[70vw] flex flex-col justify-center"
    >
      <div className="shadow-inner h-[22px]  w-[200vw] -ml-[200px] "></div>
      <h2
        className=" text-center my-4 font-bold text-white uppercase  text-[30px] tracking-widest 
      "
      >
        Контактные данные
      </h2>

      <div className=" flex flex-col sm:flex-row justify-around h-full items-center ">
        <div className="mb-6">
          <a
            href="tel:+YOURNUMBERHERE"
            className="flex flex-col text-dimWhite "
          >
            <div className="flex gap-3 items-center justify-center mb-2">
              <FaPhone /> телефон
            </div>
            <p className="underline text-[#0000FF] ">+777 555 55 55</p>
          </a>
        </div>

        <div className="mb-6">
          <a href="https://wa.me/14042457101">
            <div className="flex gap-3 items-center justify-center text-dimWhite mb-2">
              <FaWhatsappSquare className="text-[24px]" />
              WhatsApp
            </div>
            <p className="underline text-[#0000FF] ">+777 555 55 55</p>
          </a>
        </div>
        <div className="mb-6">
          <a href="mailto:anekasina@mail.ru">
            <div className="flex gap-3 items-center justify-center text-dimWhite mb-2">
              <FaRegEnvelope className="text-[24px]" /> электронная почта
            </div>
            <p className="underline text-[#0000FF] text-center">
              example@gmail.com
            </p>
          </a>
        </div>
      </div>

      <p className="text-[12px] p-3 text-center text-[#3B3B38] mt-6">
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
