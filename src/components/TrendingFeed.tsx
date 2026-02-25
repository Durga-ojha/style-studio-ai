import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shirt, ShoppingBag, Eye } from "lucide-react";

import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import trending5 from "@/assets/trending-5.jpg";
import trending6 from "@/assets/trending-6.jpg";
import trending7 from "@/assets/trending-7.jpg";
import trending8 from "@/assets/trending-8.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

type CardType = "image" | "palette" | "title";

interface TrendCard {
  id: number;
  type: CardType;
  image?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  height: string;
  colors?: string[];
}

const trendingCards: TrendCard[] = [
  {
    id: 1, type: "image", image: trending1,
    title: "BURGUNDY ROYALTY", subtitle: "Velvet power blazer meets champagne silk", tag: "Trending",
    height: "h-96",
  },
  {
    id: 2, type: "palette",
    title: "REGAL VELVET", subtitle: "Champagne · Burgundy · Sand Gold · Dark Maroon · Deep Wine",
    tag: "Color Palette", height: "h-72",
    colors: ["hsl(38,45%,90%)", "hsl(345,68%,28%)", "hsl(40,60%,80%)", "hsl(345,80%,20%)", "hsl(340,60%,18%)"],
  },
  {
    id: 3, type: "image", image: trending3,
    title: "INDIAN FUSION", subtitle: "Embroidered lehenga with western silhouettes", tag: "Cultural",
    height: "h-[28rem]",
  },
  {
    id: 4, type: "image", image: trending4,
    title: "GOLD EMBROIDERY", subtitle: "Opulent velvet with handcrafted details", tag: "Texture",
    height: "h-64",
  },
  {
    id: 5, type: "image", image: trending5,
    title: "GLAMORATTI 80s", subtitle: "Power glamour • leopard • high shine", tag: "Trending",
    height: "h-96",
  },
  {
    id: 6, type: "title",
    title: "MIDNIGHT MAVEN", subtitle: "Where darkness meets opulence. The 2026 evening wear edit.",
    tag: "Editorial", height: "h-72",
  },
  {
    id: 7, type: "image", image: trending7,
    title: "AFRICAN-BOHO FUSION", subtitle: "Earth tones meet tribal elegance", tag: "Fusion",
    height: "h-96",
  },
  {
    id: 8, type: "image", image: trending8,
    title: "LUXE ACCESSORIES", subtitle: "Burgundy leather & gold chain essentials", tag: "Accessories",
    height: "h-64",
  },
  {
    id: 9, type: "image", image: trending6,
    title: "LACE & EMBROIDERY", subtitle: "Intricate floral craftsmanship", tag: "Detail",
    height: "h-72",
  },
  {
    id: 10, type: "image", image: lookbook1,
    title: "SCULPTED SILHOUETTES", subtitle: "Structured forms for the modern woman", tag: "Trending",
    height: "h-80",
  },
  {
    id: 11, type: "palette",
    title: "SUGAR-COATED PASTELS", subtitle: "Blush · Lavender · Mint · Peach · Cream",
    tag: "Color Palette", height: "h-64",
    colors: ["hsl(350,60%,88%)", "hsl(270,40%,82%)", "hsl(160,30%,82%)", "hsl(25,70%,85%)", "hsl(42,50%,95%)"],
  },
  {
    id: 12, type: "image", image: lookbook2,
    title: "COOL BLUE ACCENTS", subtitle: "Serene tones with sand gold contrast", tag: "Trending",
    height: "h-96",
  },
  {
    id: 13, type: "image", image: trending2,
    title: "PLUM NOIR ROYALTY", subtitle: "Deep wine tones for regal evenings", tag: "Moodboard",
    height: "h-72",
  },
  {
    id: 14, type: "image", image: lookbook3,
    title: "NATURE NOSTALGIA", subtitle: "Organic textures & earthy warmth", tag: "Sustainable",
    height: "h-80",
  },
];

const TrendingFeed = () => {
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedCards((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="pt-16 lg:pt-18 pb-16">
      <div className="container mx-auto px-3 lg:px-6">
        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
          {trendingCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="break-inside-avoid group"
            >
              {card.type === "image" && (
                <div className="relative overflow-hidden rounded-2xl cursor-pointer liquid-hover">
                  <div className={`${card.height} overflow-hidden`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-primary/80 text-primary-foreground rounded-full backdrop-blur-sm">
                      {card.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-sm md:text-base font-bold text-primary-foreground tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-primary-foreground/70 mt-0.5 line-clamp-2">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Hover actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleLike(card.id); }}
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/40 transition-colors"
                    >
                      <Heart className={`w-3.5 h-3.5 ${likedCards.has(card.id) ? "fill-primary text-primary" : "text-primary-foreground"}`} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/40 transition-colors">
                      <Shirt className="w-3.5 h-3.5 text-primary-foreground" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/40 transition-colors">
                      <ShoppingBag className="w-3.5 h-3.5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              )}

              {card.type === "palette" && (
                <div className="relative overflow-hidden rounded-2xl cursor-pointer liquid-hover bg-card border border-border p-5">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-primary">
                    {card.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3">
                    {card.title}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    {card.colors?.map((color, ci) => (
                      <div
                        key={ci}
                        className="flex-1 aspect-square rounded-lg shadow-sm"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              )}

              {card.type === "title" && (
                <div className={`relative overflow-hidden rounded-2xl cursor-pointer liquid-hover ${card.height} bg-primary flex flex-col justify-end p-6`}>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-primary-foreground/60">
                    {card.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mt-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 mt-2 leading-relaxed">
                    {card.subtitle}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-sm font-medium text-accent hover:text-primary-foreground transition-colors">
                    <Eye className="w-4 h-4" />
                    Explore Collection
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingFeed;
