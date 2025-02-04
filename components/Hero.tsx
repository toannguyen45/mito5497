import Link from "next/link";
import TikTokIcon from "./TikTokIcon";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative bg-hero bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
      style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              @mito5497
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hãy xem những sản phẩm hot trend và theo dõi tớ trên TikTok nhé!
            </p>
            <Link
              href="https://www.tiktok.com/@mito5497"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 inline-flex items-center"
            >
              <TikTokIcon />
              Theo dõi TikTok
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/avatar.jpg"
                alt="TikTok Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
