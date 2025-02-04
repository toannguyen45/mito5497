"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          TikTok Shop
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-600">
            Trang chủ
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Danh mục
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Về mình
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2">
            <Link href="/" className="hover:text-gray-600">
              Trang chủ
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Danh mục
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Về mình
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
