import Container from "@/containers/Container";
import React from "react";

const data = [
  {
    title: "The Self-Possessed",
    desc: "Calm under pressure. Intentional with every move.",
  },
  {
    title: "The Early Architects",
    desc: "Designing their relationship with money from the ground up.",
  },
  {
    title: "The Untraditional Earners",
    desc: "Independent income. Custom rhythm. No standard script.",
  },
  {
    title: "The Clear-Minded People",
    desc: "Looking for understanding, alignment, and peace.",
  },
];

const WhoMulahIsFor = () => {
  return (
    <div className="relative w-full bg-neutral-100">
      <Container className="flex flex-col py-10 md:py-16 lg:py-20 justify-center items-center text-center">
        <p className="font-semibold capitalize text-2xl md:text-3xl tracking-tight mt-1 md:mt-1.5">
          Who Mülah is for
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-12 md:mt-14 lg:mt-16 gap-x-10 gap-y-6">
          {data.map((data, index) => (
            <div
              className="flex flex-col justify-start items-start text-start bg-white p-5 sm:p-6.5 md:p-8 lg:p-10 rounded-lg md:rounded-xl lg:rounded-2xl gap-4 md:gap-5 shadow-lg"
              key={index}
            >
              <div className="h-1.5 w-10 md:h-2 md:w-16 rounded-full bg-linear-to-r from-brandOrange to-brandBlue"></div>
              <h2 className="font-semibold capitalize text-xl md:text-2xl">
                {" "}
                {data.title}{" "}
              </h2>
              <p className="text-sm md:text-base leading-snug font-medium text-neutral-500">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhoMulahIsFor;
