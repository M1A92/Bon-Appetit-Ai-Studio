import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, Variants } from 'framer-motion';
import {
  Sparkles,
  ChefHat,
  ArrowRight,
  CheckCircle2,
  Users,
  PartyPopper,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Star,
  Search,
  Menu,
  Quote,
  Clock,
  ClipboardCheck,
  UtensilsCrossed,
  MessageSquare
} from 'lucide-react';

// --- Types ---
type NavItem = {
  label: string;
  href: string;
};

// --- Animations ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Shared Components ---

const GlassButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'white';
}> = ({ children, className = "", onClick, variant = 'primary' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl px-8 py-4 font-medium transition-all duration-300 group cursor-pointer
        ${variant === 'primary'
          ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
          : 'bg-white text-brand-primary border border-gray-100 shadow-sm'}
        ${className}
      `}
    >
      {/* Liquid Glass Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10" />
      <div className="absolute inset-0 rounded-xl border border-white/10 z-20 pointer-events-none" />

      <span className="relative z-30 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );
};

const Logo: React.FC<{ light?: boolean; white?: boolean }> = ({ light = false, white = false }) => (
  <div className="flex items-center select-none">
    <img
      src={white ? "/Assets/white logo.png" : "/Assets/Asset 1.png"}
      alt="Bon Appétit AI Studio"
      className={`h-12 md:h-16 w-auto object-contain ${light && !white ? 'brightness-110 contrast-125' : ''}`}
    />
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Process', href: '#process' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="hover:opacity-80 transition-opacity duration-300 origin-left cursor-pointer">
          <Logo light={false} />
        </a>

        <nav className="hidden md:flex gap-8 items-center font-sans">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-cta relative group ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cta transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <GlassButton className="ml-4 !px-6 !py-2.5 text-sm">
            Book Now
          </GlassButton>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-brand-primary p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 300]), { stiffness: 50, damping: 20 });
  const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, -300]), { stiffness: 50, damping: 20 });
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Typewriter state
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Corporate Events", "Dream Weddings", "Private Parties", "Team Lunches"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-white pt-32 pb-20">

      {/* --- Moving Mesh Gradient Background (Brand Colors) --- */}
      <div className="absolute inset-0 z-0 bg-white">
        {/* Noise Texture for Paper feel */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

        {/* Animated Gradient Orbs - Using Brand Colors */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Navy Blob - Softened */}
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-brand-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, 30, 60, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gold Accent Blob - Warmth */}
          <motion.div
            className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-brand-cta rounded-full mix-blend-multiply filter blur-[100px] opacity-10"
            animate={{
              x: [0, -60, 20, 0],
              y: [0, 80, -40, 0],
              scale: [1, 1.2, 1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Blue Blob - Depth */}
          <motion.div
            className="absolute -bottom-[30%] left-[20%] w-[70vw] h-[70vw] bg-brand-secondary rounded-full mix-blend-multiply filter blur-[140px] opacity-15"
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* White/Slate Highlight to break it up */}
          <motion.div
            className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-white rounded-full filter blur-[80px] opacity-80"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* --- Floating Parallax Elements Layer (Behind Content) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        {/* Left Element: Event Logistics Card - UPDATED TO y2 FOR DYNAMIC FEEL */}
        <motion.div style={{ y: y2 }} className="absolute left-4 lg:left-8 top-[12%] hidden md:block z-0">
          <motion.div
            animate={{ rotate: [-3, -1, -3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/80 p-6 rounded-2xl shadow-xl border border-white/40 backdrop-blur-xl w-[240px] cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-3">
              <ClipboardCheck className="w-4 h-4 text-brand-cta" />
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Logistics Plan</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-primary">Setup Time</p>
                  <p className="text-[10px] text-gray-500">11:30 AM (Sharp)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-primary">Staffing</p>
                  <p className="text-[10px] text-gray-500">1 Head Waiter, 3 Servers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-deep">Dietary</p>
                  <div className="flex gap-1 mt-1">
                    <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">12 Vegan</span>
                    <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">3 GF</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Element: Bulk Catering Visual (Buffet/Quantity) */}
        <motion.div style={{ y: y2 }} className="absolute right-4 lg:right-8 top-[25%] hidden md:block z-0">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-auto group"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-brand-secondary/5 rounded-3xl blur-3xl transform translate-x-4 translate-y-6 opacity-60"></div>

            {/* Card Container */}
            <div className="bg-white/80 p-3 rounded-2xl shadow-xl border border-white/40 relative z-10 backdrop-blur-md cursor-pointer">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop"
                  alt="Catering Spread"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-brand-primary shadow-sm">
                  50 PAX
                </div>
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                  <p className="text-xs font-bold text-brand-primary">Corporate Grazing</p>
                  <p className="text-[10px] text-gray-400">Finger Food Selection</p>
                </div>
                <div className="bg-green-50 rounded-full p-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 3: Seasonal Palette (Lower Left - Adjusted) */}
        <motion.div style={{ y: y2 }} className="absolute left-4 lg:left-12 bottom-[22%] hidden lg:block z-0">
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative w-56 h-auto group"
          >
            <div className="bg-white/80 p-3 rounded-2xl shadow-xl border border-white/40 relative z-10 backdrop-blur-md cursor-pointer hover:scale-105 transition-transform duration-500">
              <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
                  alt="Seasonal Dish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-cta" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">AI Composition</span>
                </div>
              </div>
              <p className="text-xs font-bold text-brand-primary px-1">Seasonal Palette</p>
              <p className="text-[10px] text-gray-500 px-1 italic">Vibrant. Fresh. Curated.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 4: Atmospheric Dining (Middle Right - Adjusted) */}
        <motion.div style={{ y: y1 }} className="absolute right-4 lg:right-16 bottom-[5%] hidden lg:block z-0">
          <motion.div
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative w-60 h-auto group"
          >
            <div className="bg-white/80 p-3 rounded-2xl shadow-xl border border-white/40 relative z-10 backdrop-blur-md cursor-pointer hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3 px-1">
                <ChefHat className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">White Glove</span>
              </div>
              <div className="relative h-28 w-full rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop"
                  alt="Event Ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 px-1">
                <p className="text-xs font-bold text-brand-secondary">Atmospheric Dining</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3].map(i => <div key={i} className="h-1 w-4 bg-brand-cta/20 rounded-full" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-brand-primary/10 shadow-sm hover:shadow-md transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cta opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cta"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary/60">AI Intelligence v2.0</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-6 text-brand-secondary tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Catering, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary relative pb-2 italic">
            reimagined.
            {/* Animated Scrawl underline */}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-brand-cta/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path
                d="M0 5 Q 50 15 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subhead with Typewriter */}
        <motion.div
          className="h-16 mb-12 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Luxury events planned by AI for{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                transition={{ duration: 0.3 }}
                className="font-bold text-brand-cta inline-block"
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
        </motion.div>

        {/* Command Bar (Hero Element) */}
        <motion.div
          className="w-full max-w-2xl relative z-20"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Abstract scrawl arrow pointing to input */}
          <div className="absolute -left-32 top-0 hidden lg:block opacity-60">
            <motion.div
              animate={{ rotate: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-brand-primary transform -rotate-12">
                <path d="M10,20 C40,0 80,10 110,60" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
              <span className="absolute -top-6 left-0 font-bold text-brand-primary text-xl">Just ask AI</span>
            </motion.div>
          </div>

          <div className="relative bg-white/40 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-2 flex items-center group hover:bg-white/60 hover:scale-[1.01] transition-all duration-300">
            <div className="p-3 bg-brand-primary/5 rounded-xl">
              <Sparkles className="w-6 h-6 text-brand-cta animate-pulse" />
            </div>
            <input
              type="text"
              placeholder="Describe your event (e.g., 'Vegan lunch for 20')..."
              className="flex-1 bg-transparent border-none outline-none text-lg px-4 text-brand-primary placeholder-gray-400 h-12"
            />
            <GlassButton className="!px-6 !py-3 rounded-xl !shadow-none">
              Generate <ArrowRight className="w-4 h-4 ml-2" />
            </GlassButton>
          </div>
        </motion.div>

        {/* Scroll Indicator - Now Relative Flow */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronLeft className="-rotate-90 w-4 h-4 text-gray-300" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

// Image Marquee: Overlay changed to White/Glass for Dark Text
const ImageMarquee: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="w-full bg-brand-background py-16 overflow-hidden relative z-20 border-y border-gray-100">
      <div className="flex w-max animate-[scroll_40s_linear_infinite]">
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="w-[350px] h-[250px] mx-6 rounded-2xl overflow-hidden relative shadow-md cursor-pointer transition-all duration-300 group"
          >
            <img src={img} alt="Food" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-brand-secondary/40 to-transparent backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-start p-8">
              <span className="text-white font-serif font-bold text-2xl mb-2 tracking-tight">AI Curated</span>
              <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Seasonal Gastronomy</span>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const FoodFoundation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="menu" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Element */}
      <motion.div
        style={{ x }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-slate rounded-full blur-3xl opacity-50 -z-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative group cursor-pointer perspective-1000">
              <motion.div
                whileHover={{ rotateY: 2, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border border-white/20"
              >
                {/* Fixed Image Swap */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?q=80&w=1000&auto=format&fit=crop"
                    alt="Chef Plating"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-white transition-opacity duration-700 group-hover:opacity-0">
                  <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop"
                    alt="Fine Dining Catering"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-8 left-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <p className="font-serif font-bold text-3xl mb-2 tracking-tight">The Ingredients</p>
                    <p className="font-light text-sm opacity-90 max-w-xs">AI-optimized sourcing for maximum nutrition and zero waste.</p>
                  </div>
                </div>

                {/* AI Scan Effect on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                >
                  <motion.div
                    animate={{
                      y: [-100, 600],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-full h-1 bg-brand-cta shadow-[0_0_20px_rgba(161,124,31,0.8)] z-30"
                  />
                  <div className="absolute inset-0 border-2 border-brand-cta/30 m-4 rounded-2xl border-dashed animate-pulse" />
                </motion.div>

                {/* Overlay text for the REVEALED image */}
                <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 delay-100 pointer-events-none">
                  <p className="font-serif font-bold text-4xl mb-2 tracking-tight italic">The Result.</p>
                  <p className="font-light text-sm opacity-90 max-w-xs uppercase tracking-widest">Artfully Plated.</p>
                </div>

              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border border-gray-100 z-20"
              >
                <ChefHat className="w-8 h-8 text-brand-cta mb-1" />
                <span className="text-2xl font-bold text-brand-primary">Top 1%</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-cta font-bold">Culinary AI</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="text-brand-cta font-bold tracking-widest uppercase text-xs mb-4">Precision Sourcing</motion.h4>
            <motion.h2 variants={fadeInUp} className="font-serif text-5xl md:text-6xl text-brand-secondary mb-8 leading-[1.1] tracking-tight">
              AI planning meets <span className="italic text-brand-primary">exquisite</span> culinary arts.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
              While our AI handles the logistics and quantity optimization, our master chefs focus on the soul of the food. We combine modern gastronomy with precision data.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                "Data-driven seasonal sourcing",
                "AI-optimized dietary tailoring (Vegan, Keto, GF)",
                "Visual presentation matched to your event theme"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-brand-primary font-medium"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-brand-secondary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-brand-cta" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="mt-10">
              <GlassButton>
                View Sample Menus <ArrowRight className="w-4 h-4" />
              </GlassButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep: React.FC<{
  number: string;
  title: string;
  desc: string;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}> = ({ number, title, desc, isActive, onClick, onHover }) => (
  <motion.div
    onClick={onClick}
    onMouseEnter={onHover}
    className={`group relative pl-12 pb-12 last:pb-0 cursor-pointer border-l-2 transition-all duration-500 ${isActive ? 'border-brand-cta' : 'border-white/10 hover:border-white/30'}`}
  >
    {/* Step Number Bubble */}
    <div
      className={`absolute left-[-17px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 z-20 ${isActive ? 'bg-brand-cta text-white scale-110' : 'bg-brand-secondary border border-white/20 text-white/50'}`}
    >
      {number}
    </div>

    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-40 grayscale group-hover:opacity-60 translate-x-0'}`}>
      <h3 className="font-serif text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 font-light leading-relaxed max-w-md">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Describe Event",
      desc: "Tell us about your occasion in natural language. Mention guests, budget, and dietary preferences.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      badge: "User Intent"
    },
    {
      number: "02",
      title: "AI Analysis",
      desc: "Our engine calculates quantities, suggests pairings, and ensures zero food waste using historical data.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000",
      badge: "Optimization"
    },
    {
      number: "03",
      title: "Review & Book",
      desc: "Receive a professional proposal instantly. Tweak it if needed, then confirm your booking securely.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
      badge: "Checkout"
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-brand-secondary relative overflow-hidden">
      {/* Luxury Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-brand-cta/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Content List */}
          <div>
            <div className="mb-16">
              <motion.span className="text-brand-cta font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                The Process
              </motion.span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tight leading-tight">
                Planning, <br />
                <span className="italic text-brand-primary">simplified by AI</span>
              </h2>
            </div>

            <div className="relative">
              {steps.map((step, idx) => (
                <ProcessStep
                  key={idx}
                  {...step}
                  isActive={activeStep === idx}
                  onClick={() => setActiveStep(idx)}
                  onHover={() => setActiveStep(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Image Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group"
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />

                {/* Lightened Overlay */}
                <div className="absolute inset-0 bg-brand-secondary/30 pointer-events-none" />

                {/* Floating Glass Badge */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-cta rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">{steps[activeStep].badge}</span>
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-brand-secondary via-brand-secondary/60 to-transparent">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px w-8 bg-brand-cta" />
                    <span className="text-brand-cta text-xs font-bold uppercase tracking-widest">Step {steps[activeStep].number}</span>
                  </div>
                  <h4 className="text-white text-3xl font-serif font-bold italic">{steps[activeStep].title}</h4>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -z-10 pointer-events-none" />
            <div className="absolute -inset-8 border border-white/5 rounded-[3.5rem] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Use Cases - Reverted to Full Width Slider
const UseCases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      icon: Briefcase,
      title: "Corporate Excellence",
      subtitle: "Board Meetings & Galas",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
      desc: "Impress clients and energize teams. From power breakfasts to annual galas, our AI optimizes menus for professional settings, ensuring dietary compliance and elegant presentation."
    },
    {
      icon: PartyPopper,
      title: "Private Celebrations",
      subtitle: "Birthdays & Anniversaries",
      image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2000&auto=format&fit=crop",
      desc: "Be the guest at your own party. Whether it's an intimate dinner for 10 or a birthday bash for 100, we handle the culinary details so you can focus on making memories."
    },
    {
      icon: Users,
      title: "Bespoke Weddings",
      subtitle: "Your Special Day",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop",
      desc: "A culinary journey tailored to your love story. Our AI helps estimate quantities perfectly to avoid waste while our chefs design a menu that reflects your unique taste."
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section id="events" className="relative h-[700px] overflow-hidden bg-brand-primary text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Slower, smoother transition
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cases[currentIndex].image})` }}
        >
          {/* Lighter Gradient for brighter feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                  {React.createElement(cases[currentIndex].icon, { className: "w-6 h-6 text-brand-cta" })}
                </div>
                <span className="text-brand-cta font-bold tracking-widest uppercase text-xs">{cases[currentIndex].subtitle}</span>
              </div>

              <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight drop-shadow-2xl tracking-tighter italic">
                {cases[currentIndex].title}
              </h2>

              <p className="text-white/80 text-xl font-light leading-relaxed mb-10 border-l-2 border-brand-cta pl-6 drop-shadow-md">
                {cases[currentIndex].desc}
              </p>

              <GlassButton variant="white" className="!text-brand-primary">
                Explore Options <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-12 right-6 md:right-12 flex gap-4">
          <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-brand-deep transition-all backdrop-blur-sm group">
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-brand-deep transition-all backdrop-blur-sm group">
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-12 left-6 md:left-auto flex gap-3">
          {cases.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex ? 'w-12 bg-brand-cta' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperiencePreview: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < 2 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    // Updated background to moving waves
    <section className="py-32 relative overflow-hidden bg-brand-background">

      {/* Animated Gradient Orbs - Same as Hero for consistency */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-brand-background/50 z-10" /> {/* Slight lighten */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-brand-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-10"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-brand-cta rounded-full mix-blend-multiply filter blur-[100px] opacity-10"
          animate={{
            x: [0, 60, -20, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl mb-4 text-brand-secondary tracking-tight"
          >
            Experience the Magic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-light max-w-2xl mx-auto"
          >
            See how our AI transforms a simple request into a comprehensive catering plan in seconds.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px] md:h-[550px]"
        >
          {/* Sidebar - Light Mode */}
          <div className="hidden md:flex w-72 bg-gray-50/50 border-r border-gray-100 flex-col p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-2 w-32 bg-gray-200 rounded animate-pulse delay-75" />
              <div className="h-2 w-20 bg-gray-200 rounded animate-pulse delay-100" />
            </div>
            <div className="mt-auto space-y-3">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="p-4 rounded-xl bg-gradient-to-r from-brand-teal/10 to-blue-500/10 border border-brand-teal/20"
              >
                <p className="text-xs font-bold text-brand-primary mb-1 tracking-widest uppercase">Live Calculation</p>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-cta"
                    initial={{ width: "0%" }}
                    animate={{ width: step >= 1 ? "100%" : "30%" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Interface */}
          <div className="flex-1 flex flex-col bg-white relative">
            <div className="flex-1 p-8 overflow-hidden flex flex-col gap-6 relative bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">

              {/* User Message */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="self-end max-w-[80%]"
              >
                <div className="bg-brand-primary text-white p-4 rounded-2xl rounded-tr-sm shadow-xl shadow-brand-primary/10">
                  <p className="text-sm">I need a luxury lunch menu for 30 people next Friday. We have 5 vegans and the budget is around 2500 AED.</p>
                </div>
                <div className="flex items-center justify-end gap-1 mt-2">
                  <div className="w-4 h-4 rounded-full bg-brand-primary/10 flex items-center justify-center text-[8px] font-bold text-brand-primary uppercase">You</div>
                  <p className="text-[10px] text-gray-400">10:42 AM</p>
                </div>
              </motion.div>

              {/* AI Processing Bubble */}
              {step === 0 && <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="self-start"
              >
                <div className="flex gap-2 bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm w-fit shadow-md items-center">
                  <Sparkles className="w-4 h-4 text-brand-cta animate-spin" />
                  <span className="text-xs text-brand-primary font-bold uppercase tracking-wider">AI Reasoning Unit</span>
                </div>
              </motion.div>
              }

              {/* AI Response - Popping In */}
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="self-start max-w-[90%]"
                >
                  <div className="bg-white text-gray-800 p-6 rounded-2xl rounded-tl-sm border border-gray-100 shadow-2xl shadow-brand-primary/5 relative overflow-hidden">
                    {/* Decorative shimmer */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-cta to-brand-primary" />

                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-brand-cta/10 p-1.5 rounded-lg">
                        <Sparkles className="w-4 h-4 text-brand-cta" />
                      </div>
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Enterprise Proposal</span>
                    </div>
                    <p className="text-sm mb-4 text-gray-500 font-medium tracking-tight">I've optimized a gourmet selection for your 30 guests within the 2500 AED target.</p>

                    <div className="space-y-3 mb-4">
                      {/* Item 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary text-xs font-bold group-hover:bg-brand-primary group-hover:text-white transition-colors">01</div>
                          <div>
                            <p className="text-sm font-bold text-brand-primary">Executive Menu (25 pax)</p>
                            <p className="text-xs text-gray-400">High-Protein, Brain-Fuel Focus</p>
                          </div>
                        </div>
                        <span className="text-brand-primary font-bold text-xs">AED 1,875</span>
                      </motion.div>

                      {/* Item 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-cta/5 flex items-center justify-center text-brand-cta text-xs font-bold group-hover:bg-brand-cta group-hover:text-white transition-colors">02</div>
                          <div>
                            <p className="text-sm font-bold text-brand-primary">Specialist Vegan (5 pax)</p>
                            <p className="text-xs text-gray-400">Plant-Based Nutrient Dense</p>
                          </div>
                        </div>
                        <span className="text-brand-primary font-bold text-xs">AED 375</span>
                      </motion.div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Projected Total</p>
                      <p className="text-xl font-bold text-brand-primary">AED 2,250</p>
                    </div>
                  </div>

                  {/* Floating Action Chips */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-2 mt-3 overflow-x-auto pb-2"
                  >
                    <button className="text-[10px] bg-white border border-gray-100 hover:border-brand-primary/20 hover:bg-brand-primary/5 hover:text-brand-primary px-3 py-1.5 rounded-lg transition-all shadow-sm whitespace-nowrap flex items-center gap-1 font-bold uppercase tracking-widest">
                      Add beverages
                    </button>
                    <button className="text-[10px] bg-white border border-gray-100 hover:border-brand-primary/20 hover:bg-brand-primary/5 hover:text-brand-primary px-3 py-1.5 rounded-lg transition-all shadow-sm whitespace-nowrap font-bold uppercase tracking-widest">
                      Switch to buffet
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-50 bg-white">
              <div className="flex gap-2 relative">
                <input
                  disabled
                  placeholder={step >= 1 ? "Fine-tune your requirements..." : "Quantifying logistics..."}
                  className="flex-1 bg-brand-background border-none rounded-xl px-4 py-3 text-sm text-brand-primary/40 cursor-not-allowed pl-10 font-bold tracking-tight"
                />
                <MessageSquare className="w-4 h-4 text-brand-primary/20 absolute left-3 top-1/2 -translate-y-1/2" />
                <div className="bg-brand-primary p-3 rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "The AI planning tool saved me hours. I just typed 'Launch party for 50, finger foods, high-end' and got a perfect menu instantly.",
      author: "Sarah Al-Mansouri",
      role: "Marketing Director, TechHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      text: "Quiet luxury defined. The food was spectacular, but the seamless ordering process is what makes me come back. No back-and-forth emails.",
      author: "James C.",
      role: "Private Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      text: "Bon Appétit transformed our wedding planning. The quantities were spot on, and the presentation was exactly as the AI described.",
      author: "Priya & Raj",
      role: "Wedding Couple",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
    },
    {
      text: "Efficient, delicious, and incredibly smart. It understands dietary restrictions better than most human planners I've worked with.",
      author: "Michael Chen",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-medium uppercase tracking-widest text-xs mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-brand-deep text-center"
          >
            Trusted by Dubai's best
          </motion.h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20" />

        <div className="flex w-max animate-[scroll_50s_linear_infinite]">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[450px] mx-4">
              <div className="bg-brand-slate/30 p-10 rounded-3xl border border-brand-teal/5 relative h-full hover:shadow-lg transition-shadow duration-300">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-teal/10" />
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed line-clamp-3">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white" alt="User" />
                  <div>
                    <p className="font-serif font-bold text-brand-deep text-lg">{t.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-primary to-brand-secondary py-24 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Logo white={true} />
            <p className="mt-8 text-white font-light max-w-sm leading-relaxed">
              Redefining luxury hospitality through advanced artificial intelligence and culinary excellence.
            </p>
            <div className="flex gap-4 mt-8">
              {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-brand-cta hover:text-white hover:border-brand-cta transition-all group">
                  <span className="text-xs font-bold uppercase tracking-widest">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-cta mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['The Process', 'Menu Philosophy', 'Event Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white hover:text-brand-cta transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-cta mb-8">Studio</h4>
            <ul className="space-y-4 text-sm text-white font-light">
              <li>Dubai Design District, UAE</li>
              <li>concierge@bonappetit.ai</li>
              <li>+971 4 000 0000</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">© 2024 Bon Appétit AI Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-background font-sans selection:bg-brand-cta/30 selection:text-brand-primary antialiased">
      <Header />
      <main>
        <Hero />
        <ImageMarquee />
        <FoodFoundation />
        <Process />
        <UseCases />
        <ExperiencePreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;