import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function SlideShow() {
  return (
    <div className="w-[330px] sm:w-[400px] mx-auto ">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        speed={1200}
        loop
        effect={"fade"}
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
