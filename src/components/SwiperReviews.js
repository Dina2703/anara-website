import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import FeedbackCard from "./FeedbackCard";
import { feedbacks } from "../constants";
import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  return (
    <div className=" w-[100%] ">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={true}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide>
            <FeedbackCard key={feedback.id} {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
