"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "./TeamSwiper.css";

const teamData = [
  {
    id: 1,
    name: "Dajour Smith",
    position: "Founder & CEO",
    img: "/images/Dajour.jpeg",
    bio: "The mind behind MÜLAH’s vision and innovation. Crafting a platform that fuses financial intelligence with emotional insight to rethink how people relate to money.",
  },
  {
    id: 2,
    name: "Savannah Smith",
    position: "Co-Founder",
    img: "/images/Savannah.jpeg",
    bio: "Shaping the emotional intelligence at the heart of MÜLAH. Connecting sociology with real-world financial behavior to help people thrive.",
  },
  {
    id: 3,
    name: "Pushpender Jha",
    position: "Product Manager",
    img: "/images/pushpender.png",
    bio: "Driving product direction and team execution. Bridging users, business, and engineering.",
  },
  {
    id: 4,
    name: "Ojash Tyagi",
    position: "Tech Lead",
    img: "/images/ojash.jpeg",
    bio: "Architecting the core of the platform. Building technology that scales with ambition.",
  },
];

// Duplicate to guarantee loop always works
const slides = [...teamData, ...teamData];

export default function TeamSwiper() {
  return (
    <div className="team-slider-wrapper">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={40}
        initialSlide={Math.floor(slides.length / 2)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".team-next",
          prevEl: ".team-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="team__slide"
      >
        {slides.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="people__card">
              <div className="people__image">
                <img src={member.img} alt={member.name} />
              </div>

              <h3 className="people__name">{member.name}</h3>
              <p className="people__position">{member.position}</p>
              <p className="people__desc">{member.bio}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="team-nav team-prev">
          <ChevronLeft size={24} />
        </div>
        <div className="team-nav team-next">
          <ChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
}
