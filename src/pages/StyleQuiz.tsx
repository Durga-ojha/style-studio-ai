import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";

const skinTones = [
  { label: "Fair", color: "hsl(30 60% 90%)" },
  { label: "Light", color: "hsl(30 45% 80%)" },
  { label: "Medium", color: "hsl(25 40% 65%)" },
  { label: "Olive", color: "hsl(35 35% 55%)" },
  { label: "Brown", color: "hsl(20 40% 40%)" },
  { label: "Deep", color: "hsl(18 35% 25%)" },
];

const styles = [
  { label: "Minimalist", emoji: "◻️" },
  { label: "Bohemian", emoji: "🌿" },
  { label: "Classic", emoji: "👔" },
  { label: "Streetwear", emoji: "🧢" },
  { label: "Indian Fusion", emoji: "✨" },
  { label: "Avant-Garde", emoji: "🎭" },
];

const occasions = [
  { label: "Work / Office", emoji: "💼" },
  { label: "Casual Weekend", emoji: "☕" },
  { label: "Date Night", emoji: "🌙" },
  { label: "Festivals", emoji: "🎊" },
  { label: "Travel", emoji: "✈️" },
  { label: "Weddings", emoji: "💍" },
];

const steps = [
  { id: 0, title: "What's your skin tone?", subtitle: "Helps us suggest the most flattering palettes." },
  { id: 1, title: "What styles resonate with you?", subtitle: "Pick all that speak to your aesthetic." },
  { id: 2, title: "What do you dress for most?", subtitle: "Select your primary occasions." },
];

const StyleQuiz = () => {
  const [step, setStep] = useState(0);
  const [selectedTone, setSelectedTone] = useState<string | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const toggleItem = (item: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const canProceed = step === 0 ? !!selectedTone : step === 1 ? selectedStyles.length > 0 : selectedOccasions.length > 0;

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else setComplete(true);
  };

  if (complete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Style DNA is Ready!
          </h2>
          <p className="text-muted-foreground mb-8">
            Based on your {selectedTone} skin tone, love for{" "}
            {selectedStyles.join(", ")} style, and {selectedOccasions.join(", ")} lifestyle.
          </p>
          <div className="glass rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display text-2xl font-bold text-foreground">{selectedStyles.length}</div>
                <div className="text-xs text-muted-foreground">Styles</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">{selectedOccasions.length}</div>
                <div className="text-xs text-muted-foreground">Occasions</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">∞</div>
                <div className="text-xs text-muted-foreground">Outfits</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => { setStep(0); setComplete(false); }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
          >
            Retake Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background pt-20">
      {/* Progress */}
      <div className="container mx-auto px-6 lg:px-12 pt-8">
        <div className="flex gap-2 max-w-md mx-auto">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s.id <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="max-w-xl mx-auto text-center"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Step {step + 1} of 3
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-2">
                {steps[step].title}
              </h2>
              <p className="text-muted-foreground mb-10">{steps[step].subtitle}</p>

              {/* Step 0: Skin tones */}
              {step === 0 && (
                <div className="flex flex-wrap justify-center gap-4">
                  {skinTones.map((tone) => (
                    <button
                      key={tone.label}
                      onClick={() => setSelectedTone(tone.label)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all liquid-hover ${
                        selectedTone === tone.label
                          ? "border-primary bg-card shadow-md"
                          : "border-transparent hover:border-border"
                      }`}
                    >
                      <div
                        className="w-14 h-14 rounded-full shadow-md"
                        style={{ background: tone.color }}
                      />
                      <span className="text-sm font-medium text-foreground">{tone.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 1: Styles */}
              {step === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {styles.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => toggleItem(s.label, selectedStyles, setSelectedStyles)}
                      className={`relative p-5 rounded-2xl border-2 transition-all liquid-hover text-center ${
                        selectedStyles.includes(s.label)
                          ? "border-primary bg-card"
                        : "border-border hover:border-accent"
                      }`}
                    >
                      {selectedStyles.includes(s.label) && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                      <div className="text-2xl mb-2">{s.emoji}</div>
                      <div className="text-sm font-medium text-foreground">{s.label}</div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Occasions */}
              {step === 2 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {occasions.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => toggleItem(o.label, selectedOccasions, setSelectedOccasions)}
                      className={`relative p-5 rounded-2xl border-2 transition-all liquid-hover text-center ${
                        selectedOccasions.includes(o.label)
                          ? "border-primary bg-card"
                          : "border-border hover:border-accent"
                      }`}
                    >
                      {selectedOccasions.includes(o.label) && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                      <div className="text-2xl mb-2">{o.emoji}</div>
                      <div className="text-sm font-medium text-foreground">{o.label}</div>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-6 lg:px-12 pb-8">
        <div className="flex justify-between max-w-xl mx-auto">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium disabled:opacity-30 transition-all hover:opacity-90"
          >
            {step === 2 ? "See My Style DNA" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleQuiz;
