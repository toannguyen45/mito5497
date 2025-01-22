import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import ProductGrid from "./components/product-grid";
import products from "@/data/product";
import Image from "next/image";
import { TikTokIcon } from "./components/tiktok-icon";

export default function Home() {
  const categories = [
    "Trending Gadgets",
    "Beauty & Skincare",
    "Fashion & Accessories",
    "Home & Lifestyle",
    "Fitness & Wellness",
    "Tech & Electronics",
  ];

  return (
    <Fragment>
      <section className="container mx-auto my-20 max-w-5xl flex flex-col lg:flex-row items-center gap-10">
        <Avatar className="w-40 h-40">
          <AvatarImage src="/images/avatar.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className={"flex flex-col gap-3"}>
          <h1 className={"font-bold text-3xl"}>MiTo45</h1>
          <p>Chào mừng mọi người đến với trang trưng bày của mình</p>
          <div className="flex gap-3">
            <Link
              href={
                "https://www.tiktok.com/@mito5497?is_from_webapp=1&sender_device=pc"
              }
              className="flex items-center gap-2 border border-gray-300 rounded-md p-2 hover:border-gray-500"
            >
              <TikTokIcon />
              <span>TikTok của mình</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-20 max-w-7xl">
        <section className={"container my-20 max-w-7xl"}>
          <h2
            className={
              "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6"
            }
          >
            Các sản phẩm hot
          </h2>
          <div className={"grid lg:grid-cols-3 gap-10"}>
            {products.map((product, index) => (
              <Fragment key={index}>
                <Link
                  href={product.url}
                  target={"_blank"}
                  className={"flex flex-col gap-3"}
                >
                  <div className={"relative aspect-square w-full"}>
                    <Image
                      src={product.image_url}
                      alt={product.title}
                      fill={true}
                    />
                  </div>
                  <p className={"line-clamp-2"}>{product.title}</p>
                  {/* <p className={"text-3xl font-bold"}>
                    {product.price.toLocaleString("vi-VN")}.000đ
                  </p> */}
                </Link>
              </Fragment>
            ))}
          </div>
        </section>
      </section>
    </Fragment>
  );
}
