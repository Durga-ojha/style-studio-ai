import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Scan, Sparkles, Shirt, ArrowRight } from "lucide-react";

const tabs = ["Casual", "Minimalistic", "Formal", "Indian"];

const Scanner = () => {
  const [uploaded, setUploaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Casual");

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Upload */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              AI-Powered
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              Smart <span className="italic text-gradient">Scanner</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Upload any outfit and get instant styling suggestions across categories.
            </p>
          </motion.div>

          {!uploaded ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setUploaded(true)}
                className="w-full aspect-[16/9] rounded-3xl border-2 border-dashed border-border hover:border-sand bg-card flex flex-col items-center justify-center gap-4 transition-all liquid-hover group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Upload className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Drop your outfit photo here</p>
                  <p className="text-sm text-muted-foreground mt-1">or click to browse • JPG, PNG up to 10MB</p>
                </div>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              {/* Analysis Header */}
              <div className="glass rounded-2xl p-6 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center animate-pulse">
                  <Scan className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Analysis Complete</h3>
                  <p className="text-sm text-muted-foreground">Found 16 styling combinations</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  AI Confidence: 94%
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto">
                {tabs.map((tab) => (
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

              {/* Bento Grid Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Top", "Bottom", "Shoes", "Jewellery"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group aspect-square rounded-2xl bg-card border border-border p-6 flex flex-col items-center justify-center gap-3 liquid-hover cursor-pointer"
                  >
                    <Shirt className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                    <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      {activeTab}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all group">
                  Try On These Looks
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Scanner;
