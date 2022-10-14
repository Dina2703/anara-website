import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

function SlideShow() {
  return (
    <div className="w-[330px] sm:w-[400px] mx-auto ">
      <Swiper
        modules={[Autoplay, EffectCards]}
        autoplay={{ delay: 5000 }}
        speed={2000}
        effect="cards"
      >
        <SwiperSlide>
          <img src="/anara01.jpeg" alt="anara" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/anara02.jpeg" alt="anara" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/anara03.jpeg" alt="anara" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideShow;