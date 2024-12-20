// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-cube";

export function Carrousel() {
  return (
    <div className="p-4 w-full flex items-center justify-center">
      <Swiper
        effect={"cube"}
        grabCursor
        loop
        autoplay={{
          delay: 3500,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper max-w-[400px] h-[400px]"
      >
        <SwiperSlide>
          <img
            src="/1.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/2.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/3.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/4.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/5.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/6.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/7.jpeg"
            className="h-[400px] w-full object-cover"
            alt="Image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
