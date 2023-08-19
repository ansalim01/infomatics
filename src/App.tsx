import React, { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "./style/Slider.css";
import Header from "./components/Header";

SwiperCore.use([Keyboard, Mousewheel]);
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
    </div>
  );
}

export default App;
