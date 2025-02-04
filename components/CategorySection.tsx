import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Mô hình siêu xe M1000R",
    image: "/lego-car/m1000r.jpg",
    imageHover: "/lego-car/m1000r-2.jpg",
    tiktokLink: "https://vt.tiktok.com/ZS6KBonbv/",
  },
  {
    name: "Mô hình siêu xe DUCATI PANIGALE",
    image: "/lego-car/ducati-panigale.jpg",
    imageHover: "/lego-car/panigale-2.jfif",
    tiktokLink: "https://vt.tiktok.com/ZS6KBEvpv/",
  },
  {
    name: "Mô hình siêu xe KAWASAKI NINJA",
    image: "/lego-car/kawasaki.jpg",
    imageHover: "/lego-car/kawasaki-2.webp",
    tiktokLink: "https://vt.tiktok.com/ZS6KBKFqB/",
  },
  {
    name: "Mô hình siêu xe PORSCHE 911",
    image: "/lego-car/porsche-911.webp",
    imageHover: "/lego-car/porsche-911-2.png",
    tiktokLink: "https://vt.tiktok.com/ZS6KB7yRY/",
  },
  {
    name: "Mô hình siêu xe F1 McLaren",
    image: "/lego-car/mclaren.webp",
    imageHover: "/lego-car/mclaren-2.jfif",
    tiktokLink: "https://vt.tiktok.com/ZS6KSKH3L/",
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Siêu xe LEGO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
