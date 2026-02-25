import { motion } from "framer-motion";
import { ArrowRight, Scan, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion editorial"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider uppercase mb-8"
          >
            <Sparkles className="w-3 h-3 text-terracotta" />
            AI-Powered Style Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-foreground mb-6"
          >
            Elevate Your
            <br />
            <span className="text-gradient italic">Everyday</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Scan, style, sustain. Your personal AI stylist transforms your wardrobe into
            endless possibilities—effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/scanner"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-all"
            >
              <Scan className="w-4 h-4" />
              Scan Your Outfit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/quiz"
              className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-sm tracking-wide hover:bg-accent transition-colors"
            >
              Take Style Quiz
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex gap-10 mt-16 pt-8 border-t border-border"
          >
            {[
              { value: "50%", label: "Less Decision Time" },
              { value: "10K+", label: "Styled Users" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
