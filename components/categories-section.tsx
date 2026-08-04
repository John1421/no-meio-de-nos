import Link from "next/link";
import Image from "next/image";
import { placeholderImage } from "@/lib/images";

const categories = [
  {
    name: "Roupas",
    image: placeholderImage,
    href: "/products?category=Blankets",
    count: 4,
  },
  {
    name: "Utilidades",
    image: placeholderImage,
    href: "/products?category=Toys",
    count: 6,
  },
  {
    name: "Decoração",
    image: placeholderImage,
    href: "/products?category=Home+Decor",
    count: 8,
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
            Browse By
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
            Shop Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <p className="text-sm opacity-80">{category.count} Products</p>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
