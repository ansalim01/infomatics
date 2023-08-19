import React, { useState } from "react";

import "./App.css";
import Slider from "./components/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import Hexagon from "./components/Hexagon";
import { data, IData } from "./data/index";
import exit from "./img/exit-svgrepo-com.svg";
import burger from "./img/burger-list-menu-navigation-svgrepo-com.svg";
import "swiper/css";
import "./style/Slider.css";

SwiperCore.use([Keyboard, Mousewheel]);
function App() {
  const [active, setActive] = useState(2);
  return (
    <div className="App">
      <header className="header">
        <div className="header__conteiner">
          <div className="header-logo">
            <a href="#">Билеты и абонементы</a>
          </div>
          <nav className="header__nav">
            <ul className="header__ul">
              <li>
                <a href="#">Что купить?</a>
              </li>
              <li>
                <a href="#">Правила</a>
              </li>
              <li>
                <a href="#">Возврать билетов</a>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <div className="header-btn__exit">
              <img src={exit} alt="" />
              Войти
            </div>
            <div className="header-btn__burger">
              <img src={burger} alt="" />
            </div>
          </div>
        </div>
      </header>
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
    </div>
  );
}

export default App;
