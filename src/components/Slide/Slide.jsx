import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";
import "./Slide.css";
import "swiper/css";
import "swiper/css/virtual";

export const Slide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <Swiper
      modules={[Virtual]}
      spaceBetween={170}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="carousel"
    >
      {data.map((item) => {
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
