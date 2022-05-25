import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
export const SwiperImage: React.FC<any> = ({ children }) => {
  return (
    <div className="max-w-[100%] md:max-w-[50%]  w-[100%] ltr">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
};
