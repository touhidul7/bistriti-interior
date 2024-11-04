"use client";

import Image from 'next/image';
import React, { useEffect, useState } from "react";

const page = () => {
  return (
    <>
      <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://your-image-url.jpg')`, // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-start text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-lg md:text-xl mb-8">
          High-quality design and development services tailored to your needs.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
    </>
  );
};

export default page;
