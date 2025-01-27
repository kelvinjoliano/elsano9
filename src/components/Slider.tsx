"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Elektronik",
    description: "Diskon Hingga 59%",
    img: "https://static.jakmall.id/2019/07/images/products/342986/detail/deerma-air-humidifier-ultrasonic-large-capacity-5l-touch-version-f600.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Peralatan Rumah Tangga",
    description: "Diskon Hingga 40%",
    img: "https://static.jakmall.id/2024/02/images/products/476a33/detail/hamodern-lemari-pakaian-minimalis-rak-multifungsi-dengan-gorden-hm1.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Foto dan Videografi",
    description: "Harga Mulai 10 Ribuan!",
    img: "https://images.pexels.com/photos/2445781/pexels-photo-2445781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const intervalTime = 5000; // Waktu antar slide (ms)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length); // Geser ke slide berikutnya
    }, intervalTime);
  
    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);  // Tidak menggunakan slides atau current sebagai dependensi, hanya [] agar interval hanya dibuat sekali
  

  const handleIndicatorClick = (index: number) => {
    setCurrent(index); // Ubah slide secara manual
  };

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* SLIDES */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{
          transform: `translateX(-${current * 100}vw)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  Belanja Sekarang!
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {/* INDICATORS */}
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
