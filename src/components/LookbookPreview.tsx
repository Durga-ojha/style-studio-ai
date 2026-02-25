import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const looks = [
  { image: lookbook1, title: "Accessory Edit", category: "Casual", tag: "Trending" },
  { image: lookbook2, title: "Indian Fusion", category: "Cultural", tag: "Editor's Pick" },
  { image: lookbook3, title: "Everyday Ease", category: "Sustainable", tag: "Eco-Friendly" },
];

const LookbookPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-wheat-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Curated for you
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Latest <span className="italic">Lookbook</span>
            </h2>
          </motion.div>
          <Link
            to="/lookbook"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-terracotta transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {looks.map((look, i) => (
            <motion.div
              key={look.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer liquid-hover"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase glass rounded-full text-foreground">
                  {look.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium tracking-wider uppercase text-primary-foreground/70">
                  {look.category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mt-1">
                  {look.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            to="/lookbook"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-terracotta transition-colors"
          >
            View All Lookbooks
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LookbookPreview;
