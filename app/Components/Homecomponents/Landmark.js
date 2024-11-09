'use client'
import Image from "next/image";
import React from "react";
import landmarkimg from "@/public/Landmark.png";
import { motion } from "framer-motion";
export default function Landmark() {
  return (
    <div className="bg-black pt-20 lg:pt-28">
      <div className="heading text-center text-3xl lg:text-6xl font-bold text-white leading-normal">
        Witness, As We <br /> Transform Your Land <br /> to a Land Mark
      </div>
      <div className="flex justify-center items-center lg:py-10 px-5">
        <div className="left-sidebar flex flex-col lg:justify-between  pb-20 h-[400px] lg:min-h-screen items-center">
          <div className="text-right mb-10 mt-20">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">7M+</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Total Area Build
            </div>
          </div>

          <div className="text-right mb-10">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">07</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Years Inception
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">42</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Number of Completed Projects
            </div>
          </div>
        </div>
        <div className="image">
          <motion.div
            className="w-fit lg:mt-10"
            initial={{ y: 200 }}
            whileInView={{ y:50 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
          <Image src={landmarkimg} alt="dd" />
          </motion.div>
        </div>

        <div className="right-sidebar flex flex-col lg:justify-between   pb-20 h-[400px] lg:min-h-screen  items-center">
          <div className="text-left mb-10 mt-20">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">100+</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Number of Prejects
            </div>
          </div>
          <div className="text-left mb-10">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">1100+</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Happy Clients
            </div>
          </div>
          <div className="text-left">
            <div className="text-2xl lg:text-4xl font-semibold text-yellow-400">11M+</div>
            <div className="text-white text-sm lg:text-lg font-semibold">
              Total Area in Pipeline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
