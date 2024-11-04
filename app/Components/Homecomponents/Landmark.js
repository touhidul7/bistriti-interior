import Image from "next/image";
import React from "react";
import landmarkimg from "@/public/Landmark.png";

export default function Landmark() {
  return (
    <div className="bg-black">
      <div className="heading text-center text-6xl font-bold text-white leading-normal">
        Witness, As We <br /> Transform Your Land <br /> to a Land Mark
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="left-sidebar flex flex-col justify-between items-center">
          <div className="text-right">
            <div>7M+</div>
            <div>Total Area Build</div>
            <div>{"(Million Sft.)"}</div>
          </div>
        </div>

        <div className="image">
          <Image src={landmarkimg} alt="dd" />
        </div>
        <div className="right-sidebar flex flex-col justify-between items-center"></div>
      </div>
    </div>
  );
}
