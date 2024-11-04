import Image from "next/image";
import React from "react";
import catagoryies from "@/public/data/homecatagory.json";
import Link from "next/link";

export default function Homecatagory() {
  console.log(catagoryies);
  return (
    <div className="p-10 bg-black flex justify-center">
      {/* left image */}
      {catagoryies.map((data, i) => (
        <div key={i} className="grid grid-cols-3 lg:p-20 gap-10 w-fit">
          <div className="rounded-lg relative group cursor-pointer">
            <Image
              src={data.leftimage.image}
              width={100}
              height={100}
              className="rounded-lg object-cover w-full h-full"
              alt="sd"
            />
            <div className=" absolute m-auto top-0 bottom-0 w-full text-center flex flex-col justify-center items-center bg-black/30 rounded-lg">
              <Link href={data.leftimage.link} className="text-2xl font-bold text-white">
                {data.leftimage.title}
              </Link>
              <p className="hidden group-hover:block text-white mt-2 px-4 hover:transition-opacity hover:duration-100">
                {data.leftimage.description}
              </p>
            </div>
          </div>

          {/* group images 1 */}
          <div className="grid grid-cols-2 gap-6">
            {data.group1.map((group, i) => (
              <div key={i} className="rounded-lg relative group cursor-pointer">
                <Image
                  src={group.image}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-auto"
                  alt="sd"
                />
                <div className=" absolute m-auto top-0 bottom-0 w-full text-center flex flex-col justify-center items-center bg-black/30 rounded-lg">
                  <Link href={group.link} className="text-2xl font-bold text-white">
                    {group.title}
                  </Link>
                  <p className="hidden group-hover:block text-white mt-2 px-4 text-justify">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* group images 2 */}
          <div className="grid grid-cols-2 gap-6">
            {data.group2.map((group, i) => (
              <div key={i} className="rounded-lg relative group cursor-pointer">
                <Image
                  src={group.image}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-auto"
                  alt="sd"
                />
                <div className=" absolute m-auto top-0 bottom-0 w-full text-center flex flex-col justify-center items-center bg-black/30 rounded-lg">
                  <Link href={group.link} className="text-2xl font-bold text-white">
                    {group.title}
                  </Link>
                  <p className="hidden group-hover:block text-white mt-2 px-4 text-justify">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
