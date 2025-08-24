import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { useLanguage } from "./hooks/useLanguage";

const queryClient = new QueryClient();

const AppContent = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Layout language={language} onLanguageChange={setLanguage}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/rooms" element={<Rooms language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/booking" element={<Booking language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
