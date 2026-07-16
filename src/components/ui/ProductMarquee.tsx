"use client";

import Image from "next/image";

// Bhartiflex carousel images
const carouselImages = [
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_001.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_002.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_003.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_004.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_005.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_006.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_007.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_008.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_009.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_010.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_011.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_012.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_013.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_014.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_015.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_016.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_017.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_018.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_019.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_020.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_021.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_022.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_023.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_024.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_025.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_026.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_027.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_028.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_029.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_030.jpg",
  "/bhartiflex-image-carousel/Bharti Flex_All Product_538px X 538px_031.jpg",
];

// Duplicate for seamless infinite loop
const items = [...carouselImages, ...carouselImages];

export default function ProductMarquee() {
  return (
    <div className="w-full bg-white border-t border-slate-200 py-12 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max cursor-pointer">
          {items.map((imageSrc, i) => (
            <div
              key={`carousel-${i}`}
              className="shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-80 h-80 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                <Image
                  src={imageSrc}
                  alt={`Bhartiflex Product ${i + 1}`}
                  width={538}
                  height={538}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
