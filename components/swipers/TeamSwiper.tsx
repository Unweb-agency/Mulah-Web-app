"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "./TeamSwiper.css";

const teamData = [
    { id: 1, name: "Drew Houston", position: "Co-founder and CEO", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Melanis Collins", position: "VP of People", img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Bharat Mediratta", position: "CTO and SVP, Platform", img: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Olivia Nottebohm", position: "Chief Operating Officer", img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg" },
    { id: 5, name: "Bart Volkmer", position: "Chief Legal Officer", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Lisa Campell", position: "Graphic Designer", img: "https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const TeamSwiper = () => {
    return (
        <div className="team-slider-wrapper bg-linear-to-br from-orange-400/30 via-blue-500/25 to-orange-500/40 rounded-3xl">
            <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                slidesPerView={"auto"}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".team-next",
                    prevEl: ".team-prev",
                }}
                className="team__slide"
                spaceBetween={0}
                breakpoints={{
                    640: {
                        spaceBetween: 60,
                    },
                }}
            >
                {teamData.map((member) => (
                    <SwiperSlide key={member.id} className="swiper-slide-custom">
                        <div className="people__card">
                            <div className="people__image">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="people__info">
                                <ul className="people__social flex justify-center items-center">
                                    <li><a href="#"><Facebook size={16} /></a></li>
                                    <li><a href="#"><Twitter size={16} /></a></li>
                                    <li><a href="#"><Linkedin size={16} /></a></li>
                                </ul>
                                <h3 className="people__name">{member.name}</h3>
                                <p className="people__position">{member.position}</p>
                                <p className="people__desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <div className="people__btn">
                                <a href="#">View info</a>
                            </div>
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
};

export default TeamSwiper;