import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import StyleQuiz from "./pages/StyleQuiz";
import Lookbook from "./pages/Lookbook";
import Scanner from "./pages/Scanner";
import VirtualTryOn from "./pages/VirtualTryOn";
import Wardrobe from "./pages/Wardrobe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<StyleQuiz />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/try-on" element={<VirtualTryOn />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
