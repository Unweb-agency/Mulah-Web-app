"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "./HeroSwiper.css";

const movieData = [
  {
    id: 1,
    title: "The Queen's Gambit",
    src: "/images/mulah1.png",
  },
  {
    id: 2,
    title: "Breaking Bad",
    src: "/images/mulah5.png",
    positionTop: true,
  },
  {
    id: 3,
    title: "Wednesday",
    src: "/images/mulah2.png",
  },
  {
    id: 4,
    title: "Stranger Things",
    src: "/images/mulah3.png",
  },
  {
    id: 5,
    title: "Stranger Things",
    src: "/images/mulah4.png",
  },
  {
    id: 1,
    title: "The Queen's Gambit",
    src: "/images/mulah1.png",
  },
  {
    id: 2,
    title: "Breaking Bad",
    src: "/images/mulah5.png",
    positionTop: true,
  },
];

const HeroSwiper = () => {
  return (
    <div className="swiper-wrapper-container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        initialSlide={2}
        speed={500}
        loop={true}
        mousewheel={{ invert: false }}
        modules={[EffectCards, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        {movieData.map((movie) => (
          <SwiperSlide key={movie.id} className="swiper-slide">
            <img
              src={movie.src}
              alt={movie.title}
              className={movie.positionTop ? "img-position" : ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
