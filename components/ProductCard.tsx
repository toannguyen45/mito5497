'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  imageHover: string; // Add a second image for hover
  tiktokLink: string;
}

const ProductCard = ({
  name,
  image,
  imageHover,
  tiktokLink,
}: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <Link
      href={tiktokLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
        onMouseEnter={() => setCurrentImage(imageHover)}
        onMouseLeave={() => setCurrentImage(image)}
      >
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <span className="text-sm text-gray-600">Nhấn để xem</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
