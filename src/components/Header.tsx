import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Search, User, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Lookbook", path: "/lookbook", description: "Curated outfit collections" },
  { label: "Scanner", path: "/scanner", description: "AI-powered style analysis" },
  { label: "Try-On", path: "/try-on", description: "Virtual fitting room" },
  { label: "Wardrobe", path: "/wardrobe", description: "Your digital closet" },
  { label: "Style Quiz", path: "/quiz", description: "Discover your style DNA" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-terracotta transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-foreground">
              Fashion & Utility
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </button>
            <Link
              to="/quiz"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <User className="w-3.5 h-3.5" />
              Get Styled
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/quiz"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                >
                  <User className="w-3.5 h-3.5" />
                  Get Styled
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
