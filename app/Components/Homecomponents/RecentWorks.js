import Image from 'next/image'
import React from 'react'
import Sectionheading from '../commoncomponents/Sectionheading'
import recentWork from '@/public/data/recent-work.json'
export default function RecentWorks() {
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="container lg:px-16 py-5 mx-auto">
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-0">
                    <Sectionheading title={"RECENT WORK"} direction={'left'}/>
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
    )
}
