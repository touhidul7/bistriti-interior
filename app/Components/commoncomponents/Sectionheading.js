"use client";
import React from "react";
// React
import { motion } from "framer-motion";

export default function Sectionheading({ title, direction }) {


  return (
    <>
      <div className="bg-black text-center section-heading">
        <h1 className="text-[39px] lg:text-9xl font-bold  text-white -mb-8 opacity-[6%]">
          {title}
        </h1>
        <motion.div
          initial={{ x: direction === "left" ? 300 : -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className=" text-3xl lg:text-8xl font-semibold  text-white fade-in2">
            {title}
          </h2>
        </motion.div>
      </div>
    </>
  );
}
