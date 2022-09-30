import { FaQuoteRight } from "react-icons/fa";

const FeedbackCard = ({ title, content }) => (
  <div className="flex justify-between flex-col px-5 py-6 rounded-[20px] max-w-[300px] sm:mr-6  my-1 bg-discount-gradient shadow-md">
    <FaQuoteRight className="w-[32px] h-[17px] object-contain text-teal-600" />
    <p className="font-poppins font-normal text-[15px] leading-[28px] text-dimWhite my-2 ">
      {content}
    </p>
    <div className="flex flex-row justify-center ">
      <div className="text-[30px] m-0.5">⭐️</div>
      <div className="text-[30px] m-0.5">⭐️</div>
      <div className="text-[30px] m-0.5">⭐️</div>
      <div className="text-[30px] m-0.5">⭐️</div>
      <div className="text-[30px] m-0.5">⭐️</div>
    </div>
  </div>
);

export default FeedbackCard;
