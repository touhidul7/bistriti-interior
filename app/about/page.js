/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import allMembers from "@/public/data/allMembers.json";
import experts from "@/public/data/experts.json";
import Image from "next/image";
import clients from "@/public/data/clients.json";
import aboutheroimg from "@/public/about-page/about-heading.jpg";
import Sectionheading from "../Components/commoncomponents/Sectionheading";
import { motion } from "framer-motion";
import Whychooseus from "../Components/AboutComponents/Whychooseus";

const Page = () =>{
  return (
    <div className="overflow-x-hidden">
      {/* ABOUT-HEADER------ */}
      <div className="relative bg-gradient-to-r from-black-800 to-black-800 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            height={100}
            width={100}
            src={aboutheroimg}
            alt="Background Image"
            className="object-cover object-center w-full h-full zoom-in"
          />
          <div className="absolute inset-0 bg-black opacity-55"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="lg:text-9xl text-6xl font-bold leading-tight mb-4 fade-in">
            ABOUT US
          </h1>
          <p className="text-lg lg:text-2xl text-gray-300 mb-8">
            MAKE YOUR IMAGINATION TO REALITY
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-white">Fade In Effect</h1>
            <p className="text-white">
              Hover over this area to see the fade effect from top to down.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story------------------ */}
      {/* </motion.div> */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-5 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-20">
            <Sectionheading title={"OUR STORY"} />

            <section className="py-10 sm:py-16 lg:py-10">
              <div className="px-0 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <section className="dark:bg-gray-900">
                  <div className="gap-16 items-center  px-0 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:px-6">
                    <div className="col-span-1 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-4xl lg:text-6xl tracking-tight font-extrabold text-white lg:text-end dark:text-white">
                        Designing Dreams Building Reality
                      </h2>
                      <p className="mb-4 lg:text-end">
                        Founded to redefine the essence of spaces, BISTRITI is
                        fueled by a deep passion for design, innovation, and
                        meticulous attention to detail. Our mission goes beyond
                        creating aesthetically pleasing interiors; we aim to
                        shape environments that resonate with our clients'
                        identities and aspirations. From the warmth of intimate
                        homes to the vibrancy of bustling commercial spaces, we
                        believe every project holds the potential to inspire,
                        uplift, and transform.
                      </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-6 mt-8">
                      <Image
                        width={100}
                        height={100}
                        className="w-full"
                        src="../about-page/story/story-1.png"
                        alt="office content 1"
                      />
                      <motion.div
                        className="w-fit lg:mt-10"
                        initial={{ y: 300 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <Image
                          width={100}
                          height={100}
                          className="w-full"
                          src="../about-page/story/story-2.png"
                          alt="office content 2"
                        />
                      </motion.div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* EXPERTS--------- */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-2 lg:px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-10">
            <Sectionheading title={"OUR EXPERTS"} direction={"left"} />

            <section className="py-10 sm:py-16 lg:py-10">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-x-12">
                  {experts.map((expert, index) => (
                    <div key={index}>
                      <Image
                        height={100}
                        width={100}
                        className="w-full"
                        src={expert.image}
                        alt={expert.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* all members--------- */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-2 lg:px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <Sectionheading title={"ALL MEMBERS"} direction={"right"} />

            <section className="py-10 sm:py-16 lg:py-10">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-x-12">
                  {allMembers.map((member, index) => (
                    <div key={index}>
                      <Image
                        width={100}
                        height={1000}
                        className="w-full"
                        src={member.image}
                        alt={member.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* why choose--------- */}
      <Whychooseus/>

      {/* our clients--------- */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <Sectionheading title={"OUR CLIENTS"} direction={"right"} />

            <section className="py-10 sm:py-16 lg:py-20">
              <section className="py-base container">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-6">
                  {clients.map((client, index) => (
                    <span
                      key={index}
                      className="w-full flex items-center justify-center"
                    >
                      <div aria-hidden="true">
                        <Image
                          src={client.src}
                          width={client.width}
                          height={client.height}
                          alt={client.alt}
                        />
                      </div>
                    </span>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
