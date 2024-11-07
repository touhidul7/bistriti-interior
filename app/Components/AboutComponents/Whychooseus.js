'use client'
import React from 'react'
import Sectionheading from '../commoncomponents/Sectionheading'
import Image from 'next/image'
import whyUs from "@/public/data/whyChoose.json";
export default function Whychooseus() {
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="container px-16 py-10 mx-auto">
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <Sectionheading title={"WHY US"} direction={"left"} />

                    <section className="py-10 sm:py-16 lg:py-20">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-10">
                            {whyUs.map((item, index) => (
                                <div
                                    key={index}
                                    className={`xl:w-[100%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4`}
                                >
                                    {item.align === "left" ? (
                                        <>
                                            <div className="lg:w-[60%] xs:w-full">
                                                {item.type === "image" ? (
                                                    <Image
                                                        src={item.image}
                                                        alt="why us"
                                                        width={600}
                                                        height={400}
                                                    />
                                                ) : (<Video src={item.image} />)}

                                            </div>
                                            <div className="lg:w-[50%] sm:w-full text-start xs:w-full dark:bg-gray-900 dark:text-gray-400 md:p-4
                         xs:p-0 rounded-md">
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
                                                {item.type === "image" ? (
                                                    <Image
                                                        src={item.image}
                                                        alt="why us"
                                                        width={600}
                                                        height={400}
                                                    />

                                                ) : (<Video src={item.image} />)}
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
    )
}

const Video = ({ src }) => {

    return (
        <>
            {/* <iframe width="560"
                height="315" src={src}
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                <iframe
        width="100%"
        height="100%"
        src={src}
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
      ></iframe>


        </>
    );
};