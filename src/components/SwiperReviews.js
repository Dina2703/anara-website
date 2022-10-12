import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import FeedbackCard from "./FeedbackCard";
import { feedbacks } from "../constants";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperReviews() {
  return (
    <div className=" w-[100%] ">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={true}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <FeedbackCard {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
