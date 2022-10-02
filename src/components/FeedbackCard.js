import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const FeedbackCard = ({ title, content }) => (
  <div className="flex justify-between flex-col px-5 py-2 rounded-[20px] max-w-[300px] sm:mr-6  my-4 bg-discount-gradient shadow-md">
    <RiDoubleQuotesL className="text-white" />
    <p className="font-poppins font-normal text-[11px] leading-[22px] text-dimWhite ">
      {content}
    </p>
    <div className="flex flex-col self-end">
      <RiDoubleQuotesR className="text-white  " />
    </div>

    <div className="flex flex-row justify-center ">
      <div className="text-[20px] m-0.5">⭐️</div>
      <div className="text-[20px] m-0.5">⭐️</div>
      <div className="text-[20px] m-0.5">⭐️</div>
      <div className="text-[20px] m-0.5">⭐️</div>
      <div className="text-[20px] m-0.5">⭐️</div>
    </div>
  </div>
);

export default FeedbackCard;
