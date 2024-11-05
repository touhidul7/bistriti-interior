import Image from "next/image";
import React from "react";
import landmarkimg from "@/public/Landmark.png";
import { motion } from "framer-motion";
export default function Landmark() {
  return (
    <div className="bg-black pt-28">
      <div className="heading text-center text-6xl font-bold text-white leading-normal">
        Witness, As We <br /> Transform Your Land <br /> to a Land Mark
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="left-sidebar flex flex-col justify-between pb-20 min-h-screen items-center">
          <div className="text-right">
            <div className="text-4xl font-semibold text-yellow-400">7M+</div>
            <div className="text-white text-lg font-semibold">
              Total Area Build
            </div>
            <div className="text-white text-lg font-semibold">
              {"(Million Sft.)"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-semi text-yellow-400">07</div>
            <div className="text-white text-lg font-semibold">
              Years Since Inception
            </div>

          </div>
          <div className="text-right">
            <div className="text-4xl font-semibold text-yellow-400">42</div>
            <div className="text-white text-lg font-semibold">
              Number of Completed
            </div>
            <div className="text-white text-lg font-semibold">
              Projects
            </div>
          </div>
        </div>
        <div className="image">
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
          <Image src={landmarkimg} alt="dd" />
          </motion.div>
        </div>

        <div className="right-sidebar flex flex-col justify-between pb-20 min-h-screen items-center">
          <div className="text-left">
            <div className="text-4xl font-semibold text-yellow-400">100+</div>
            <div className="text-white text-lg font-semibold">
              Number of Prejects
            </div>
          </div>
          <div className="text-left">
            <div className="text-4xl font-semibold text-yellow-400">1100+</div>
            <div className="text-white text-lg font-semibold">
              Happy Clients
            </div>
          </div>
          <div className="text-left">
            <div className="text-4xl font-semibold text-yellow-400">11M+</div>
            <div className="text-white text-lg font-semibold">
              Total Area in Pipeline
            </div>
            <div className="text-white text-lg font-semibold">
              {"(Million Sft.)"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
