import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";
import "./Slide.css";
import "swiper/css";
import "swiper/css/virtual";

import shoes from "../../static/shoes.json";

export const Slide = () => {
  return (
    <Swiper
      modules={[Virtual]}
      spaceBetween={170}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="carousel"
    >
      {shoes.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="item">
              <div className="image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="info">
                <span className="name">{item.name}</span>
                <span className="oldPrice">{item.oldPrice}</span>
                <span className="price">{item.price}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
