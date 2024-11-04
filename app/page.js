"use client";

import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Homecatagory from './Components/Homecomponents/Homecatagory';
import Landmark from './Components/Homecomponents/Landmark';
import recentWork from "@/public/data/recent-work.json"
const page = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen flex items-end"
        style={{
          backgroundImage: `url('../about-page/about-heading.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 text-start text-white">
          <h1 className="text-4xl md:text-2xl bg-black w-[440px]  ps-20 pe-16 pt-[104px] text-[#BABABA] pb-20">
            We begin with in-depth consultations to capture your vision and
            preferences
          </h1>
          <h1 className="text-4xl md:text-9xl  font-bold w-[540px] ps-20 bg-black">
            Design
          </h1>
          <h1 className="text-4xl md:text-9xl font-bold w-[600px] ps-20 bg-black">
            Beyond
          </h1>
          <h1 className="text-4xl md:text-9xl font-bold w-[1010px] pb-10 ps-20 bg-black">
            Boundaries
            <span className="ml-9 item-center">
              <button className="group relative min-h-[65px] w-48 overflow-hidden border border-white hover:border-[#750000]  transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#750000] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#750000] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full md:text-2xl">
                <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#750000] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#750000] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white text-[#750000]">
                  VISIT US
                </span>
              </button>
            </span>
          </h1>
        </div>
      </section>
      <Homecatagory />
      <Landmark />

      {/* recent work */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-5 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-20">
            <h1 className="text-9xl font-bold  text-white -mb-16 opacity-[6%]">
              RECENT WORK
            </h1>
            <h2 className="text-8xl font-semibold  text-white mb-10 fade-in2">
              RECENT WORK
            </h2>

            <section className="py-10 sm:py-16 lg:py-10">
              <div className="px-4 mx-auto sm:px-6 lg:px-2 max-w-7xl">
                <div className="container mx-auto px-2 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {recentWork.map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden shadow-lg group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                          }`}
                      >
                        <Image
                          src={image.src}
                          width={100}
                          height={100}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-xl font-bold text-white">
                              {image.title}
                            </h4>
                            {image.description && (
                              <p className="text-white">{image.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
