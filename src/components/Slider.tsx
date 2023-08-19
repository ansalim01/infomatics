import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import Hexagon from "./Hexagon";
import { data, IData } from "../data/index";
import "swiper/css";
import "../style/Slider.css";

SwiperCore.use([Keyboard, Mousewheel]);

function Slider() {
  const [active, setActive] = useState(2);

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        centeredSlides={true}
        slideToClickedSlide={true}
        keyboard={{ enabled: true }}
        initialSlide={active}
        mousewheel={true}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        onSwiper={(swiper) => setActive(swiper.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide className={"swiper-slide"} key={index}>
            <Hexagon data={item} active={active} index={index}></Hexagon>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
