"use client";
import React, { useEffect, useState } from "react";
// React
import { motion } from "framer-motion";

export default function Sectionheading({ title, direction }) {
  const [prefx, setPrefx] = useState(0);
  useEffect(() => {
    if (direction === "left") {
      setPrefx(300);
    } else {
      setPrefx(-300);
    }
  }, [direction]);

  return (
    <>
      <div className="bg-black text-center section-heading">
        <h1 className="text-9xl font-bold  text-white -mb-16 opacity-[6%]">
          {title}
        </h1>
        <motion.div
          initial={{ x: prefx }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="text-8xl font-semibold  text-white fade-in2">
            {title}
          </h2>
        </motion.div>
      </div>
    </>
  );
}
