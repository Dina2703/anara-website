import { FaQuoteRight, FaStar } from "react-icons/fa";
const FeedbackCard = ({ title, content }) => (
  <div className="flex justify-between flex-col px-5 py-6 rounded-[20px] max-w-[300px] sm:mr-6 mr-0 my-5 bg-discount-gradient ">
    <FaQuoteRight className="w-[32px] h-[17px] object-contain text-teal-600" />
    <p className="font-poppins font-normal text-[18px] leading-[28px] text-dimWhite my-4 ">
      {content}
    </p>
    <div className="flex flex-row justify-center ">
      <FaStar className="text-white text-[30px] m-0.5" />
      <FaStar className="text-white text-[30px] m-0.5" />
      <FaStar className="text-white text-[30px] m-0.5" />
      <FaStar className="text-white text-[30px] m-0.5" />
      <FaStar className="text-white text-[30px] m-0.5" />
    </div>
  </div>
);

export default FeedbackCard;
