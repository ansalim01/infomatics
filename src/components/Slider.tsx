import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import Hexagon from "./Hexagon";
import { data } from "../data/index";
import "swiper/css";
import "../style/Slider.css";

SwiperCore.use([Keyboard, Mousewheel]);

function Slider() {
  const [active, setActive] = useState(2);

  return (
    <main className="main">
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          664: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide className={"swiper-slide"} key={index}>
            <Hexagon data={item} active={active} index={index}></Hexagon>
          </SwiperSlide>
        ))}
      </Swiper>
      {data.map(
        (item, index) =>
          index === active && (
            <>
              <div className="left-flag">{item.firstFighter}</div>
              <div className="right-flag">{item.secondFighter}</div>
            </>
          )
      )}
    </main>
  );
}

export default Slider;
