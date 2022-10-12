import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const FeedbackCard = ({ title, content, user }) => (
  <div className="flex justify-between flex-col px-5 py-2 rounded-[20px] h-[360px] sm:h-[230px] bg-discount-gradient shadow-md">
    <RiDoubleQuotesL className="text-white" />
    <p className="font-poppins font-normal text-[12px] leading-[20px] text-white  sm:px-16  ">
      {content}
    </p>
    <div className="flex flex-col self-end">
      <RiDoubleQuotesR className="text-white  " />
    </div>
    <div className="text-[12px] ml-auto italic text-white pb-8">
      <p>
        {user.name}, <span>{user.age} лет</span>
      </p>
    </div>
  </div>
);

export default FeedbackCard;
