"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "./HeroSwiper.css";

const movieData = [
  { id: 1, title: "The Queen's Gambit", rating: "8.5", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379" },
  { id: 2, title: "Breaking Bad", rating: "9.5", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd", positionTop: true },
  { id: 3, title: "Wednesday", rating: "8.1", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e" },
  { id: 4, title: "Stranger Things", rating: "8.7", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082" },
  { id: 5, title: "Anne with an E", rating: "8.6", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2ad44f5d-2215-4416-9c9b-2bae3be51a67" },
  { id: 6, title: "Friends", rating: "8.9", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/aa8fe914-741f-4bf4-ad4a-24f19d1f4178" },
  { id: 7, title: "The Crown", rating: "8.6", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d5f10b4f-7d34-45bd-bb5f-5f1530c2ac1c", positionTop: true },
  { id: 8, title: "House M.D.", rating: "8.7", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7cbac263-7c55-4428-908e-31018dc1bce3" },
  { id: 9, title: "Game of Thrones", rating: "9.2", src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2929f534-3bc3-4cbd-b84c-80df863d5a38" },
];

const HeroSwiper = () => {
  return (
    <div className="swiper-wrapper-container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{delay: 1500, disableOnInteraction: false }}
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
            <div className="overlay">
              <span>{movie.rating}</span>
              <h2>{movie.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;