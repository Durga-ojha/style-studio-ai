import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus, BarChart3, Shuffle } from "lucide-react";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const pillTabs = ["All", "Favorites", "Summer", "Indian", "Workwear"];

const wardrobeItems = [
  { image: lookbook1, label: "Leather Crossbody", category: "Accessories", liked: true, wornCount: 12 },
  { image: lookbook2, label: "Silk Saree", category: "Indian", liked: false, wornCount: 3 },
  { image: lookbook3, label: "Linen Set", category: "Casual", liked: true, wornCount: 18 },
  { image: lookbook1, label: "Gold Necklace", category: "Accessories", liked: true, wornCount: 25 },
  { image: lookbook3, label: "Cotton Tee", category: "Basics", liked: false, wornCount: 30 },
  { image: lookbook2, label: "Embroidered Kurta", category: "Indian", liked: true, wornCount: 8 },
];

const Wardrobe = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Your Collection
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Digital <span className="italic text-gradient">Wardrobe</span>
              </h1>
            </motion.div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all">
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>

          {/* Analytics Bento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Items", value: "48", icon: BarChart3 },
              { label: "Outfit Combos", value: "156", icon: Shuffle },
              { label: "Most Worn", value: "Cotton Tee", icon: Heart },
              { label: "Sustainability", value: "72%", icon: Heart },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <stat.icon className="w-4 h-4 text-muted-foreground mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Pill Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {pillTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {wardrobeItems.map((item, i) => (
              <motion.div
                key={`${item.label}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid liquid-hover"
              >
                <div className={`${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-72"} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-9 h-9 rounded-full glass flex items-center justify-center">
                    <Heart className={`w-4 h-4 ${item.liked ? "fill-terracotta text-terracotta" : "text-foreground"}`} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-medium text-sm text-primary-foreground">{item.label}</p>
                  <p className="text-[10px] text-primary-foreground/70 tracking-wider uppercase">
                    Worn {item.wornCount}× • {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wardrobe;
