import { socialMedia } from "../constants";

function Footer() {
  return (
    <section id="footer">
      <h2 className="w-full text-center my-2">GET CONNECTED</h2>

      <div className="w-full flex justify-center ">
        <div className=" flex">
          {socialMedia.map((footerLink) => (
            <div
              key={footerLink.id}
              className=" my-2 min-w-[100px] flex justify-center "
            >
              <a href={footerLink.link}>
                <footerLink.icon className="text-[30px]" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[12px] p-6 text-center text-[#3B3B38] ">
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
