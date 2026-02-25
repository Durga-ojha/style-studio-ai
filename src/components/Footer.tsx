import { Link } from "react-router-dom";
import { Sparkles, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-terracotta" />
              <span className="font-display text-xl font-bold text-foreground">
                Fashion & Utility
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Elevate your everyday with AI-powered styling. Scan, style, and sustain your wardrobe effortlessly.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <div className="space-y-3">
              {["Lookbook", "Scanner", "Try-On", "Wardrobe", "Style Quiz"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-3">
              {["About", "Sustainability", "Pricing", "Contact"].map((item) => (
                <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Fashion & Utility. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
