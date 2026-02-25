import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const categories = ["All", "Casual", "Formal", "Indian Fusion", "Sustainable"];

const allLooks = [
  { image: lookbook1, title: "Leather & Gold", category: "Casual", height: "h-80" },
  { image: lookbook2, title: "Silk Drape", category: "Indian Fusion", height: "h-96" },
  { image: lookbook3, title: "Earth Essentials", category: "Sustainable", height: "h-72" },
  { image: lookbook2, title: "Wedding Edit", category: "Formal", height: "h-96" },
  { image: lookbook1, title: "Weekend Layers", category: "Casual", height: "h-80" },
  { image: lookbook3, title: "Eco Chic", category: "Sustainable", height: "h-72" },
  { image: lookbook2, title: "Festival Ready", category: "Indian Fusion", height: "h-80" },
  { image: lookbook1, title: "Office Glam", category: "Formal", height: "h-96" },
];

const Lookbook = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allLooks : allLooks.filter((l) => l.category === active);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-wheat-gradient">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Editorial
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              The <span className="italic text-gradient">Lookbook</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Curated outfits for every occasion, mood, and moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((look, i) => (
            <motion.div
              key={`${look.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid liquid-hover"
            >
              <div className={`${look.height} overflow-hidden`}>
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-medium tracking-wider uppercase text-primary-foreground/70">
                  {look.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {look.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
