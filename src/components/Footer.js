import { socialMedia } from "../constants";

function Footer() {
  return (
    <section
      id="footer"
      className="sm:w-full w-[70vw] flex flex-col justify-center"
    >
      <div className="shadow-inner h-[18px]  w-[200vw] -ml-[200px] "></div>
      <h2
        className=" text-center mt-4 font-bold text-white
      "
      >
        GET CONNECTED
      </h2>

      <div className=" flex justify-center  ">
        <div className=" flex">
          {socialMedia.map((footerLink) => (
            <div key={footerLink.id} className=" my-2 min-w-[70px] flex ">
              <a href={footerLink.link}>
                <footerLink.icon className="text-[40px] text-white hover:bg-white hover:text-primary  shadow-md border rounded  " />
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[12px] p-3 text-center text-[#3B3B38] ">
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
