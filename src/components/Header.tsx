import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", description: "Trending feed" },
  { label: "Smart Scan", path: "/scanner", description: "AI outfit analysis" },
  { label: "Chroma Studio", path: "/try-on", description: "Virtual try-on" },
  { label: "Occasions", path: "/lookbook", description: "Event lookbooks" },
  { label: "Wardrobe", path: "/wardrobe", description: "Your digital closet" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 group flex-shrink-0">
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-primary">
              LuxeLaps
            </span>
            <div className="h-0.5 w-6 bg-accent rounded-full mt-1 transition-all group-hover:w-10" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Search + User */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className={`relative transition-all duration-300 ${searchFocused ? "w-72" : "w-56"}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search trends, colors, occasions…"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
              />
            </div>
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors group">
              <User className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
            </button>
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
            className="lg:hidden glass-strong overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {/* Mobile search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search trends, colors…"
                  className="w-full pl-9 pr-4 py-2.5 rounded-full bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex flex-col py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-secondary text-primary"
                      : "hover:bg-secondary"
                  }`}
                >
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </Link>
              ))}
              <div className="pt-3 flex gap-2">
                <button className="flex-1 py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Sign In
                </button>
                <button className="flex-1 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
