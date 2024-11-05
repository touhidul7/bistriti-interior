"use client";
import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import whyUs from "@/public/data/whyChoose.json";
import allMembers from "@/public/data/allMembers.json";
import experts from "@/public/data/experts.json";
import Image from "next/image";
import clients from "@/public/data/clients.json";
import aboutheroimg from "@/public/about-page/home-header.jpg"
const Page = () => {
  return (
    <>
      {/* ABOUT-HEADER------ */}
      {/* <div className="relative bg-gradient-to-r from-black-800 to-black-800 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="../bistriti-about.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-9xl font-bold leading-tight mb-4">ABOUT US</h1>
          <p className="text-lg text-2xl text-gray-300 mb-8 ">
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
      </div> */}

      <div className="relative bg-gradient-to-r from-black-800 to-black-800 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            height={100}
            width={100}
            src={aboutheroimg}
            alt="Background Image"
            className="object-cover object-center w-full h-full zoom-in"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-9xl font-bold leading-tight mb-4 fade-in">
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

      {/* Our Story--------- */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-5 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-20">
            <h1 className="text-9xl font-bold  text-white -mb-16 opacity-[5%]">
              OUR STORY
            </h1>
            <h2 className="text-8xl font-semibold  text-white mb-10 fade-in2">
              OUR STORY
            </h2>

            <section className="py-10 sm:py-16 lg:py-10">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <section className="dark:bg-gray-900">
                  <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:px-6">
                    <div className="col-span-1 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-end dark:text-white">
                        Designing Dreams Building Reality
                      </h2>
                      <p className="mb-4 text-end">
                        Founded to redefine the essence of spaces, BISTRITI is
                        fueled by a deep passion for design, innovation, and
                        meticulous attention to detail. Our mission goes beyond
                        creating aesthetically pleasing interiors; we aim to
                        shape environments that resonate with our clients'
                        identities and aspirations. From the warmth of intimate
                        homes to the vibrancy of bustling commercial spaces, we
                        believe every project holds the potential to inspire,
                        uplift, and transform. Our team collaborates intimately
                        with clients, harmonizing style with purpose to deliver
                        spaces that not only look beautiful but also feel
                        profoundly personal and welcoming.
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
                      <Image
                        width={100}
                        height={100}
                        className="mt-4 w-full lg:mt-10"
                        src="../about-page/story/story-2.png"
                        alt="office content 2"
                      />
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
        <div className="container px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-10">
            <h1 className="text-9xl font-bold text-white -mb-16 opacity-[5%]">
              OUR EXPERTS
            </h1>
            <h2 className="text-8xl font-semibold text-white mb-20 fade-in2">
              OUR EXPERTS
            </h2>

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
        <div className="container px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-9xl font-bold text-white -mb-16 opacity-[5%]">
              ALL MEMBERS
            </h1>
            <h2 className="text-8xl font-semibold text-white mb-20">
              ALL MEMBERS
            </h2>

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
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-9xl font-bold text-white -mb-16 opacity-[5%]">
              WHY US
            </h1>
            <h2 className="text-8xl font-semibold text-white">WHY US</h2>

            <section className="py-10 sm:py-16 lg:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    className={`xl:w-[100%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4`}
                  >
                    {item.align === "left" ? (
                      <>
                        <div className="lg:w-[60%] xs:w-full">
                          <Image src={item.image} alt="why us" width={600} height={400} />
                        </div>
                        <div className="lg:w-[50%] sm:w-full text-start xs:w-full dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                          <h2 className="text-6xl font-bold text-white">
                            {item.title}
                          </h2>
                          <p className="text-xl mt-4 text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="lg:w-[50%] xs:w-full text-end dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                          <h2 className="text-6xl font-bold text-white">
                            {item.title}
                          </h2>
                          <p className="text-xl mt-4 text-slate-300">
                            {item.description}
                          </p>
                        </div>
                        <div className="md:block sm:hidden xs:hidden lg:w-[60%] xs:w-full">
                          <Image src={item.image} alt="why us" width={600} height={400} />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* our clients--------- */}
      <section className="bg-black dark:bg-gray-900">
        <div className="container px-16 py-10 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-9xl font-bold text-white -mb-16 opacity-[5%]">
              OUR CLIENTS
            </h1>
            <h2 className="text-8xl font-semibold text-white">OUR CLIENTS</h2>

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

    </>
  );
};

export default Page;
