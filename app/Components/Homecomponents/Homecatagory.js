import Image from "next/image";
import React from "react";
import catagoryies from "@/public/data/homecatagory.json";
import Link from "next/link";
import Sectionheading from "../commoncomponents/Sectionheading";

export default function Homecatagory() {
  console.log(catagoryies);
  return (
    <div className="lg:p-10 p-6 py-10 bg-black flex justify-center">
    {/* left image */}
    {catagoryies.map((data, i) => (
      <div key={i} className="grid grid-cols-1 lg:grid-cols-3 lg:p-20 gap-7 w-fit">
        <div className="rounded-lg relative group h-[450px] cursor-pointer">
          {/* <Image
            src={data.leftimage.image}
            width={100}
            height={100}
            className="rounded-lg object-cover w-full h-full"
            alt="sd"
          /> */}
          <video
              className="w-full  object-cover rounded-lg h-[600px]"
              autoPlay
              muted
              loop
          >
              <source src="./homecatogory/interior-slowmo.mp4" type="video/mp4" />
  
              Your browser does not support the video tag.
          </video>
          <Link href={data.leftimage.link} className="absolute -mb-[150px] top-0 bottom-0 w-full text-center flex flex-col justify-end pb-6 lg:pb-20 items-center bg-black/40 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
            <Link href={data.leftimage.link} className="lg:text-xl font-bold text-white">
              {data.leftimage.title}
            </Link>
            
          </Link>
        </div>

        {/* group images 1 */}
        <div className="grid grid-cols-2 gap-7 ">
          {data.group1.map((group, i) => (
            <div key={i} className="rounded-lg relative group cursor-pointer">
              <Image
                src={group.image}
                width={100}
                height={100}
                className="rounded-lg object-cover w-full h-auto"
                alt="sd"
              />
              <Link href={group.link} className="absolute m-auto top-0 bottom-0 w-full text-center flex flex-col justify-end pb-6 lg:pb-16 items-center bg-black/40 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <Link href={group.link} className="text-base font-bold text-white">
                  {group.title}
                </Link>
                
              </Link>
            </div>
          ))}
        </div>

        {/* group images 2 */}
        <div className="grid grid-cols-2 gap-7">
          {data.group2.map((group, i) => (
            <div key={i} className="rounded-lg relative group cursor-pointer">
              <Image
                src={group.image}
                width={100}
                height={100}
                className="rounded-lg object-cover w-full h-auto"
                alt="sd"
              />
              <Link href={group.link} className="absolute m-auto top-0 bottom-0 w-full text-center flex flex-col justify-end pb-6 lg:pb-16 items-center bg-black/40 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <Link href={group.link} className="text-base font-bold text-white">
                  {group.title}
                </Link>
               
              </Link>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  );
}
