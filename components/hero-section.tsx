import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImage } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Feito com ****
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Cozy creations for your home & heart
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover unique, handmade crochet pieces crafted with premium materials 
              and timeless techniques. Each item tells a story of care and creativity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto px-8">
                  Ver Produtos
                </Button>
              </Link>
              <Link href="/products?category=Blankets">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-transparent">
                  Sobre "No Meio de Nós"
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-muted">
              <Image
                src={placeholderImage}
                alt="Cozy handmade crochet blankets and accessories"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/50 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
