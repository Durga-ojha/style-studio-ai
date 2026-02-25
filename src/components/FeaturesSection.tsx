import { motion } from "framer-motion";
import { Scan, Palette, Shirt, Sparkles, Leaf, Camera } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Smart Scanner",
    description: "Upload any outfit photo and get instant AI-powered styling suggestions across categories.",
  },
  {
    icon: Palette,
    title: "Style DNA Quiz",
    description: "A personalized onboarding that maps your skin tone, preferences, and lifestyle into a unique style profile.",
  },
  {
    icon: Camera,
    title: "Virtual Try-On",
    description: "See how outfits look on your avatar before you commit—powered by Chroma Studio technology.",
  },
  {
    icon: Shirt,
    title: "Digital Wardrobe",
    description: "Organize your entire closet digitally. Mix, match, and discover looks you never knew you had.",
  },
  {
    icon: Sparkles,
    title: "Generative Outfits",
    description: "Describe your ideal look in words and watch AI bring it to life with unique fashion fusions.",
  },
  {
    icon: Leaf,
    title: "Sustainability Score",
    description: "Track your wardrobe's environmental impact and discover eco-friendly alternatives.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            What we offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Your Complete Style
            <br />
            <span className="italic text-gradient">Ecosystem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-sand transition-all duration-500 liquid-hover cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
