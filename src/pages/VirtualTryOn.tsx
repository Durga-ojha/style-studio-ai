import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Palette, RotateCcw, Download, User } from "lucide-react";

const colorSwatches = [
  { name: "Ivory", color: "hsl(39 40% 92%)" },
  { name: "Wheat", color: "hsl(39 77% 83%)" },
  { name: "Sand", color: "hsl(35 30% 70%)" },
  { name: "Terracotta", color: "hsl(15 55% 50%)" },
  { name: "Coffee", color: "hsl(18 35% 21%)" },
  { name: "Sage", color: "hsl(140 15% 65%)" },
  { name: "Blush", color: "hsl(15 60% 85%)" },
  { name: "Navy", color: "hsl(220 40% 20%)" },
];

const VirtualTryOn = () => {
  const [selectedColor, setSelectedColor] = useState("Wheat");

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Chroma Studio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              Virtual <span className="italic text-gradient">Try-On</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              See how outfits look on your avatar before you commit.
            </p>
          </motion.div>

          {/* Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Left - Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-[3/4] rounded-3xl bg-card border border-border flex items-center justify-center relative overflow-hidden"
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground">Your Avatar</p>
                <p className="text-sm text-muted-foreground mt-1">Upload a selfie to begin</p>
                <button className="mt-6 flex items-center gap-2 mx-auto px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all">
                  <Camera className="w-4 h-4" />
                  Upload Photo
                </button>
              </div>

              {/* Action buttons */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <button className="flex-1 glass rounded-xl py-2.5 text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                  <RotateCcw className="w-3.5 h-3.5" />
                  Rotate
                </button>
                <button className="flex-1 glass rounded-xl py-2.5 text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </motion.div>

            {/* Right - Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Color Palette */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Palette className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-display font-semibold text-foreground">Color Palette</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {colorSwatches.map((swatch) => (
                    <button
                      key={swatch.name}
                      onClick={() => setSelectedColor(swatch.name)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                        selectedColor === swatch.name
                          ? "bg-card border-2 border-primary"
                          : "hover:bg-card border-2 border-transparent"
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full shadow-sm"
                        style={{ background: swatch.color }}
                      />
                      <span className="text-[10px] font-medium text-muted-foreground">{swatch.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Garment Categories */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-5">Select Garment</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories"].map((cat) => (
                    <button
                      key={cat}
                      className="p-4 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:border-sand transition-colors text-center liquid-hover"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric Preview */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">Fabric</h3>
                <div className="flex gap-3">
                  {["Silk", "Cotton", "Linen", "Wool"].map((f) => (
                    <button
                      key={f}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors"
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTryOn;
