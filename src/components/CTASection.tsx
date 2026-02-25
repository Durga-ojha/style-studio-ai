import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Ready to Discover
            <br />
            Your <span className="italic">Style DNA?</span>
          </h2>
          <p className="text-primary-foreground/70 mt-6 text-lg leading-relaxed max-w-lg mx-auto">
            Take our 2-minute style quiz and unlock personalized outfits, sustainability insights, and your digital wardrobe.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/quiz"
              className="group flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-all"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/lookbook"
              className="flex items-center gap-3 px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-full font-medium text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Lookbook
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
