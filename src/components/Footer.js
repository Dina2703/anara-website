import { socialMedia } from "../constants";
import { FaFacebookSquare } from "react-icons/fa";

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
                <FaFacebookSquare />
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[14px] p-8 text-center ">
        Copyright &copy; 2022. Website by
        <a
          className="underline pl-1"
          target="_blank"
          rel="noreferrer"
          href="https://dinaraidrissova.com/"
        >
          Dinara Idrissova
        </a>
        . <br /> All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
